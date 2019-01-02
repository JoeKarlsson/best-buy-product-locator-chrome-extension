function waitUntilVisible(selector, attr, cb) {
  const interval = setInterval(() => {
    if (attr === 'id') {
      const element = document.getElementById(selector);
      if (element) {
        clearInterval(interval);
        cb(element);
      }
    } else if (attr === 'class') {
      const element = document.getElementsByClassName(selector);
      if (element && element.length) {
        clearInterval(interval);
        cb(element[0]);
      }
    } else {
      clearInterval(interval);
    }
  }, 10);

  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}

export default waitUntilVisible;
