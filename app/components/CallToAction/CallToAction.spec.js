import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CallToAction from './CallToAction';

configure({ adapter: new Adapter() });

describe('CallToAction', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CallToAction
        nearestStore="Richfeild, MN"
        nearestStoreMapUrl="www.testurl.com"
        price={1234}
      />,
    );
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered', () => {
        const component = renderer.create(
          <CallToAction
            nearestStore="Richfeild, MN"
            nearestStoreMapUrl="www.testurl.com"
            price={1234}
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
