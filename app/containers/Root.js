import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import AppContainer from './App/AppContainer';
import { COLORS, STYLES } from '../constants/styles';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin 0;
    background: ${COLORS.white};
    color: ${COLORS.black};
    font-size: ${STYLES.fontSize};
    font-family: ${STYLES.fontFamily};
    padding: 5px 20px 20px 20px;
  }

  a, a:visited {
    color: ${COLORS.blue};
  }
`;

export default class Root extends Component {
  render() {
    return <AppContainer />;
  }
}
