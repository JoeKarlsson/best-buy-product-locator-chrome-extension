const walkDOM = (node, callback) => {
  callback(node);
  // eslint-disable-next-line no-param-reassign
  node = node.firstChild;
  while (node) {
    walkDOM(node, callback);
    // eslint-disable-next-line no-param-reassign
    node = node.nextSibling;
  }
};

export default walkDOM;
