import * as storeFormatter from './storeFormatter';
import mockStoreData from './__mocks__/mockStoreData.json';

describe('storeFormatter', () => {
  describe('getNearestStore', () => {
    it('should return the nearest Big Box store based on distance', () => {
      const spy = jest.spyOn(storeFormatter, 'getNearestStore');

      storeFormatter.getNearestStore(mockStoreData.stores);

      expect(spy).toHaveReturnedWith(mockStoreData.stores[0]);
    });
  });

  describe('addLeadingZero', () => {
    it('should add a leading zero to numbers over 10', () => {
      const spy = jest.spyOn(storeFormatter, 'addLeadingZero');

      storeFormatter.addLeadingZero('9');
      expect(spy).toHaveReturnedWith('09');

      storeFormatter.addLeadingZero('12');
      expect(spy).toHaveReturnedWith('12');
    });
  });

  describe('formatDate', () => {
    it('should return a date formatted as YYYY-MM-DD', () => {
      const spy = jest.spyOn(storeFormatter, 'formatDate');

      const date = new Date(2018, 8, 25);

      storeFormatter.formatDate(date.getFullYear(), date.getMonth(), date.getDate());
      expect(spy).toHaveReturnedWith('2018-08-25');
    });
  });

  describe('formatAmPmTime', () => {
    it('should convert 24 hour time to 12 hour time', () => {
      const spy = jest.spyOn(storeFormatter, 'formatAmPmTime');

      storeFormatter.formatAmPmTime('9:00');
      expect(spy).toHaveReturnedWith('9:00 am');

      storeFormatter.formatAmPmTime('12:15');
      expect(spy).toHaveReturnedWith('12:15 pm');

      storeFormatter.formatAmPmTime('13:30');
      expect(spy).toHaveReturnedWith('1:30 pm');

      storeFormatter.formatAmPmTime('24:00');
      expect(spy).toHaveReturnedWith('12:00 pm');
    });
  });

  describe('formatStoreHours', () => {
    it("should return today/tomorrow's hours, openNow and closingSoon", () => {
      const spy = jest.spyOn(storeFormatter, 'formatStoreHours');

      /* eslint-disable no-extend-native */
      Date.prototype.getFullYear = jest.fn().mockReturnValue(2018);
      Date.prototype.getMonth = jest.fn().mockReturnValue(7);
      Date.prototype.getDate = jest.fn().mockReturnValue(27);

      storeFormatter.formatStoreHours(mockStoreData.stores[0].detailedHours);

      expect(spy).toHaveReturnedWith({
        closingSoon: expect.any(Boolean),
        openNow: expect.any(Boolean),
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
      });
    });
  });
});
