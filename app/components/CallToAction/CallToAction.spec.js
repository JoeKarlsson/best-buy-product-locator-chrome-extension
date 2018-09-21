import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CallToAction from './CallToAction';

configure({ adapter: new Adapter() });

describe('CallToAction', () => {
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
    wrapper = shallow(
      <CallToAction
        hours={hours}
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
            hours={hours}
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
    });
  });
});
