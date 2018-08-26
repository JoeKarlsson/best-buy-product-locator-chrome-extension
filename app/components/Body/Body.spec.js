import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Body from './Body';

configure({ adapter: new Adapter() });

describe('Body', () => {
  let wrapper;

  beforeEach(() => {
    const nearestStore = 'Richfeild';
    const nearestStoreMapUrl = 'www.testurl.com';
    const price = 1234;
    const addToCartUrl = 'www.testurl.com';
    const isLoading = false;

    wrapper = shallow(
      <Body
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
        addToCartUrl={addToCartUrl}
        isLoading={isLoading}
      />,
    );
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered', () => {
        const nearestStore = 'Richfeild';
        const nearestStoreMapUrl = 'www.testurl.com';
        const price = 1234;
        const addToCartUrl = 'www.testurl.com';
        const isLoading = false;

        const component = renderer.create(
          <Body
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

      it('is rendered correctly', () => {
        expect(wrapper).toHaveLength(1);
      });

      it('should have correct inital instance', () => {
        const initialInstance = wrapper.instance();
        const expectedInstance = null;
        expect(initialInstance).toBe(expectedInstance);
      });
    });
  });
});
