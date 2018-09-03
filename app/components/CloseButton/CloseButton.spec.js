import 'jsdom-global/register';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CloseButton from './CloseButton';

configure({ adapter: new Adapter() });

describe('CloseButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CloseButton />);
  });

  describe('close button onClick', () => {
    it('should call window.close when in popup mode', () => {
      const spy = jest.spyOn(window, 'close');
      wrapper = mount(<CloseButton isPopup />);
      wrapper
        .find('#bby-close')
        .hostNodes()
        .simulate('click');
      expect(spy).toHaveBeenCalled();
    });
    it('should hide the div when not in popup mode', () => {
      document.getElementById = jest.fn(() => ({
        style: { display: 'block' },
      }));
      const spy = jest.spyOn(document, 'getElementById');
      wrapper = mount(<CloseButton isPopup={false} />);
      wrapper
        .find('#bby-close')
        .hostNodes()
        .simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered', () => {
        const component = renderer.create(<CloseButton />);
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
