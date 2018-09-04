import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/styles';

const Container = styled.div`
  ${(props) => {
    if (props.isPopup) {
      return css`
        width: 100%;
        text-align: right;
      `;
    }
    return css`
      position: absolute;
      right: 20px;
      top: 24px;
    `;
  }};
`;

const X = styled.div`
  cursor: pointer;

  ${(props) => {
    if (props.isPopup) {
      return css`
        width: 100%;
        color: ${COLORS.blue};
        font-size: 40px;
        font-weight: 700;
      `;
    }
    return css`
      width: 100%;
      color: ${COLORS.white};
      font-size: 40px;
      font-weight: 700;
    `;
  }};
`;

const CloseButton = ({ isPopup }) => (
  <Container
    id="bby-close"
    isPopup={isPopup}
    onClick={() => {
      if (isPopup) {
        window.close();
        return;
      }
      document.getElementById('bby-product-locator').style.display = 'none';
    }}
  >
    <X isPopup={isPopup}>×</X>
  </Container>
);

CloseButton.propTypes = {
  isPopup: PropTypes.bool,
};

CloseButton.defaultProps = {
  isPopup: false,
};

export default CloseButton;
