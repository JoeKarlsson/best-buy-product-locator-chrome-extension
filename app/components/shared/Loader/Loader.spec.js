import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Loader from './Loader';

configure({ adapter: new Adapter() });

describe('Loader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered', () => {
        const component = renderer.create(<Loader />);
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
