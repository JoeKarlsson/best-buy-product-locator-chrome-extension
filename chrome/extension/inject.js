import React, { Component } from 'react';
import { render } from 'react-dom';

class InjectApp extends Component {
  render() {
    return <div>Hello Injected App</div>;
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-best-buy-product-locator';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
