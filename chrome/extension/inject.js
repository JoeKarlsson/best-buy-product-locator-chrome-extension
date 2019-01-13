import React from 'react';
import { render } from 'react-dom';
import Root from '../../app/containers/Root';
import getProductCode from './util/getProductCode';
import getProductData from './util/getProductData';
import { DIV_ID, STORAGE_PREFIX } from './constants/constants';
// import css from './styles';

// const style = document.createElement('style');
// style.type = 'text/css';
// style.textContent = css;
// document.head.appendChild(style);

window.addEventListener('load', async () => {
  const productCode = await getProductCode();
  const productData = await getProductData(productCode.code, productCode.type);
  if (productData) {
    chrome.runtime.sendMessage({ productFound: true, requestTabId: true }, (tabId) => {
      chrome.storage.local.set({
        [`${STORAGE_PREFIX}active`]: tabId,
        [`${STORAGE_PREFIX}${tabId}`]: {
          productData,
          productUrl: window.location.href,
          tabId,
        },
      });

      const div = document.createElement('div');
      div.id = DIV_ID;
      document.body.appendChild(div);
      render(<Root isPopup={false} />, div);
    });
  }
});
