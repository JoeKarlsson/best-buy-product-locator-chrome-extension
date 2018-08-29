import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

const Container = styled.div`
  width: 100%;
  text-align: right;
`;

const X = styled.div`
  width: 100%;
  color: ${COLORS.blue};
  cursor: pointer;
  font-size: 40px;
  font-weight: 700;
`;

const CloseButton = ({ isPopup }) => (
  <Container
    onClick={() => {
      if (isPopup) {
        window.close();
        return;
      }
      document.getElementById('bby-product-locator').style.display = 'none';
    }}
  >
    <X>×</X>
  </Container>
);

CloseButton.propTypes = {
  isPopup: PropTypes.bool.isRequired,
};

export default CloseButton;
