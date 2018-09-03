import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import AppContainer from './App/AppContainer';
import { COLORS, STYLES } from '../constants/styles';

export default class Root extends Component {
  componentDidMount() {
    const { isPopup } = this.props;
    if (isPopup) {
      this.injectPopupStyles();
    }
  }

  injectPopupStyles = () => {
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      body {
        margin 0;
        background: ${COLORS.white};
        color: ${COLORS.black};
        font-size: ${STYLES.fontSize};
        font-family: ${STYLES.fontFamily};
        padding: 5px 20px 20px 20px;
        a, a:visited {
          color: ${COLORS.blue};
        }
      }
    `;
  };

  render() {
    const { isPopup } = this.props;
    return <AppContainer isPopup={isPopup} />;
  }
}

Root.propTypes = {
  isPopup: PropTypes.bool,
};

Root.defaultProps = {
  isPopup: false,
};
