const getGeoLocation = () => {
  const options = {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 7000,
  };

  return new Promise((ok, err) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position.coords) {
          ok(position);
        }
      },
      (errMsg) => {
        err(errMsg);
      },
      options,
    );
  });
};

export default getGeoLocation;
