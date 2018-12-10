import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Body from './Body';

configure({ adapter: new Adapter() });

describe('Body', () => {
  let wrapper;
  const hours = {
    closingSoon: true,
    openNow: true,
    today: {
      close: '21:00',
      closeAmPm: '9:00 pm',
      date: '2018-08-27',
      day: 'Today',
      open: '10:00',
      openAmPm: '10:00 am',
    },
    tomorrow: {
      close: '21:00',
      closeAmPm: '9:00 pm',
      date: '2018-08-28',
      day: 'Tomorrow',
      open: '10:00',
      openAmPm: '10:00 am',
    },
  };

  beforeEach(() => {
    const nearestStore = 'Richfeild';
    const nearestStoreMapUrl = 'www.testurl.com';
    const image = 'www.testurl.com';
    const price = 1234;
    const addToCartUrl = 'www.testurl.com';
    const isLoading = false;
    const validStore = true;

    wrapper = shallow(
      <Body
        hours={hours}
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
        image={image}
        addToCartUrl={addToCartUrl}
        isLoading={isLoading}
        validStore={validStore}
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
        const image = 'www.testurl.com';
        const isLoading = false;
        const validStore = true;

        const component = renderer.create(
          <Body
            hours={hours}
            nearestStore={nearestStore}
            nearestStoreMapUrl={nearestStoreMapUrl}
            price={price}
            image={image}
            addToCartUrl={addToCartUrl}
            isLoading={isLoading}
            validStore={validStore}
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
