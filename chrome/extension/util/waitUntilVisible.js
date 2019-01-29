const waitUntilVisible = (selector, cb) => {
  const interval = setInterval(() => {
    const element = document.querySelectorAll(selector);
    if (element && element.length) {
      clearInterval(interval);
      cb(element[0]);
    }
  }, 10);
};

export default waitUntilVisible;
