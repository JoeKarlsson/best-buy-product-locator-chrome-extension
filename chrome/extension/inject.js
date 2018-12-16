import React from 'react';
import { render } from 'react-dom';
import Root from '../../app/containers/Root';
import getProductCode from './get-product-code';
import css from './styles';

window.addEventListener('load', () => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.textContent = css;
  document.head.appendChild(style);

  // WebFont.load({
  //   custom: {
  //     families: ['Human BBY Web'],
  //     urls: [fontPath],
  //   },
  // });

  // const font = new FontFace(
  //   'Human BBY Web',
  //   chrome.runtime.getURL('fonts/HumanBBY-55Regular-Web.woff2'),
  // );
  // document.fonts.add(font);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = getProductCode;
  document.body.appendChild(script);

  const div = document.createElement('div');
  div.id = 'bby-product-locator';
  document.body.appendChild(div);
  render(<Root isPopup={false} />, div);
});
