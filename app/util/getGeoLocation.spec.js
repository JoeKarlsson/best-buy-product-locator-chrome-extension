// import geolocate from 'mock-geolocation';
// import WindowMock from 'window-mock';
import getGeoLocation from './getGeoLocation';

describe('getGeoLocation', () => {
  it('should return the coordinates', async () => {
    const position = {
      coords: {
        latitude: 54.980206086231,
        longitude: 82.898068362003,
      },
    };

    global.navigator = {
      geolocation: {
        getCurrentPosition() {
          return new Promise((ok) => {
            ok(position);
          });
        },
      },
    };

    getGeoLocation().then((pos) => {
      expect(pos.coords.latitude).toBe(position.coords.latitude);
      expect(pos.coords.longitude).toBe(position.coords.longitude);
    });
  });

  it('should handle errors', async () => {
    const position = {
      foo: 'bar',
    };

    global.navigator = {
      geolocation: {
        getCurrentPosition() {
          return new Promise((ok) => {
            ok(position);
          });
        },
      },
    };

    getGeoLocation().catch(() => {});
  });
});
