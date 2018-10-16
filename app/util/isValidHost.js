const isValidHost = () => {
  switch (window.location.host) {
    case 'www.amazon.com':
      return true;
    case 'www.target.com':
      return true;
    default:
      return false;
  }
};

export default isValidHost;
