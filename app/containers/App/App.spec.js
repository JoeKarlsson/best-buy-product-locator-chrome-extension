import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
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

      it('is rendered loading state', () => {
        const nearestStore = 'Richfeild';
        const nearestStoreMapUrl = 'www.testurl.com';
        const price = 1234;
        const addToCartUrl = 'www.testurl.com';
        const isLoading = true;

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
