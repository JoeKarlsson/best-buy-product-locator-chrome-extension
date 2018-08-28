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
        getCurrentPosition(ok) {
          return ok(position);
        },
      },
    };

    getGeoLocation().then((pos) => {
      expect(pos.coords.latitude).toBe(position.coords.latitude);
      expect(pos.coords.longitude).toBe(position.coords.longitude);
    });
  });

  it('should handle errors', async () => {
    const errMsg = 'TEST ERROR';

    global.navigator = {
      geolocation: {
        getCurrentPosition(ok, err) {
          return err(errMsg);
        },
      },
    };

    getGeoLocation().catch((err) => {
      expect(err).toBe(errMsg);
    });
  });

  it('should handle incorrect formattted position data', async () => {
    const position = {
      foo: 'bar',
    };

    global.navigator = {
      geolocation: {
        getCurrentPosition(ok) {
          return ok(position);
        },
      },
    };

    getGeoLocation().catch((err) => {
      expect(err).toMatchObject(position);
    });
  });
});
