const getGeoLocation = () => {
  const position = {
    coords: {
      latitude: 54.980206086231,
      longitude: 82.898068362003,
    },
  };

  return new Promise((ok) => {
    ok(position);
  });
};

export default getGeoLocation;
