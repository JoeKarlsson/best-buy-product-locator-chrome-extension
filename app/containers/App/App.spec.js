import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  describe('isValidProduct', () => {
    it('should be called when component receives props', () => {
      const nearestStore = 'Richfeild';
      const nearestStoreMapUrl = 'www.testurl.com';
      const price = 1234;
      const addToCartUrl = 'www.testurl.com';
      const isLoading = false;

      const wrapper = mount(
        <App
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          addToCartUrl={addToCartUrl}
          isLoading={isLoading}
        />,
      );

      const spy = jest.spyOn(wrapper.instance(), 'isValidProductData');
      wrapper.instance().forceUpdate();
      expect(spy).toHaveBeenCalled();
    });

    it('should set state.validProduct true when given a valid product', () => {
      const nearestStore = 'Richfeild';
      const nearestStoreMapUrl = 'www.testurl.com';
      const price = 1234;
      const addToCartUrl = 'www.testurl.com';
      const isLoading = false;

      const wrapper = mount(
        <App
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          addToCartUrl={addToCartUrl}
          isLoading={isLoading}
        />,
      );

      wrapper.instance().forceUpdate();

      expect(wrapper.state().validProduct).toEqual(true);
    });

    it('should set state.validProduct false when given an invalid product', () => {
      const nearestStore = '';
      const nearestStoreMapUrl = '';
      const price = 0;
      const addToCartUrl = '';
      const isLoading = false;

      const wrapper = mount(
        <App
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          addToCartUrl={addToCartUrl}
          isLoading={isLoading}
        />,
      );

      wrapper.instance().forceUpdate();

      expect(wrapper.state().validProduct).toEqual(false);
    });
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered heathy state', () => {
        const nearestStore = 'Richfeild';
        const nearestStoreMapUrl = 'www.testurl.com';
        const price = 1234;
        const addToCartUrl = 'www.testurl.com';
        const isLoading = false;

        const component = renderer.create(
          <App
            nearestStore={nearestStore}
            nearestStoreMapUrl={nearestStoreMapUrl}
            price={price}
            addToCartUrl={addToCartUrl}
            isLoading={isLoading}
          />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('is rendered loading state when in popup mode', () => {
        const nearestStore = 'Richfeild';
        const nearestStoreMapUrl = 'www.testurl.com';
        const price = 1234;
        const addToCartUrl = 'www.testurl.com';
        const isLoading = true;
        const isPopup = true;

        const component = renderer.create(
          <App
            nearestStore={nearestStore}
            nearestStoreMapUrl={nearestStoreMapUrl}
            price={price}
            addToCartUrl={addToCartUrl}
            isLoading={isLoading}
            isPopup={isPopup}
          />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('is rendered error state', () => {
        const nearestStore = '';
        const nearestStoreMapUrl = '';
        const price = 0;
        const addToCartUrl = '';
        const isLoading = false;

        const component = renderer.create(
          <App
            nearestStore={nearestStore}
            nearestStoreMapUrl={nearestStoreMapUrl}
            price={price}
            addToCartUrl={addToCartUrl}
            isLoading={isLoading}
          />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
