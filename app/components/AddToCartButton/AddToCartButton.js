import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS, STYLES } from '../../constants/styles';

const Container = styled.div`
  ${(props) => {
    if (!props.isPopup) {
      return css`
        width: 200px;
        float: right;
        margin-right: 50px;
      `;
    }
  }};
`;

const Button = styled.button`
  background: ${COLORS.yellow};
  font-size: ${STYLES.fontSize};
  width: 100%;
  border: 0;
  height: 45px;
  line-height: normal;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  transition: all 0.3s ease-out 0s;

  &:hover {
    background: ${COLORS.lightYellow};
  }
`;

const AddToCartButton = ({ addToCartUrl, isPopup }) => (
  <Container isPopup={isPopup}>
    <a target="_blank" rel="noopener noreferrer" href={addToCartUrl}>
      <Button>Buy on BestBuy.com</Button>
    </a>
  </Container>
);

AddToCartButton.propTypes = {
  addToCartUrl: PropTypes.string.isRequired,
  isPopup: PropTypes.bool,
};

AddToCartButton.defaultProps = {
  isPopup: false,
};

export default AddToCartButton;
