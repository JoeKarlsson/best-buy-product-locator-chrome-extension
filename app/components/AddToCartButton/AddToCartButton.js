import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS, STYLES } from '../../constants/styles';

const Container = styled.div`
  ${(props) => {
    if (!props.isPopup) {
      return css`
        position: absolute;
        width: 200px;
        right: 60px;
        top: 10px;

        @media (max-width: 1110px) {
          margin-top: 10px;
          position: initial;
          float: left;
        }

        @media (max-width: 710px) {
          margin-top: 15px;
          width: 100%;
        }
      `;
    }
  }};
`;

const Button = styled.button`
  color: ${COLORS.black};
  background: ${COLORS.yellow};
  font-family: ${STYLES.fontFamily};
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
