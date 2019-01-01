import React from 'react';
import { render } from 'react-dom';
import Root from '../../app/containers/Root';
import getProductCode from './get-product-code';
import { DIV_ID } from './constants/constants';
// import css from './styles';

window.addEventListener('load', () => {
  // const style = document.createElement('style');
  // style.type = 'text/css';
  // style.textContent = css;
  // document.head.appendChild(style);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = getProductCode;
  document.body.appendChild(script);

  const div = document.createElement('div');
  div.id = DIV_ID;
  document.body.appendChild(div);
  render(<Root isPopup={false} />, div);
});
