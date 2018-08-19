import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  ReactDOM.render(<Root initialState={initialState} />, document.querySelector('#root'));
});
