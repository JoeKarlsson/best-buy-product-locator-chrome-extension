import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS, STYLES } from '../../constants/styles';

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

const AddToCartButton = (props) => {
  const { addToCartUrl } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" href={addToCartUrl}>
      <Button>Buy on BestBuy.com</Button>
    </a>
  );
};

AddToCartButton.propTypes = {
  addToCartUrl: PropTypes.string.isRequired,
};

export default AddToCartButton;
