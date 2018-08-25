import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AddToCartButton from './AddToCartButton';

configure({ adapter: new Adapter() });

describe('AddToCartButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddToCartButton addToCartUrl="www.testurl.com" />);
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered', () => {
        const component = renderer.create(<AddToCartButton addToCartUrl="www.testurl.com" />);
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
