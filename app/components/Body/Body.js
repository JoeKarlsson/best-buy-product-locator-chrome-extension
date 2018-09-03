import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../shared/Logo/Logo';
import CallToAction from '../CallToAction/CallToAction';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { COLORS, STYLES } from '../../constants/styles';

const Container = styled.div`
  background: ${COLORS.white};
  color: ${COLORS.black};
  font-size: ${STYLES.fontSize};
  font-family: ${STYLES.fontFamily};
  width: 350px;
  position: fixed;
  z-index: 9999;
  right: 50px;
  top: 50px;
  padding: 30px;
  border: 1px solid ${COLORS.grey};

  h2 {
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  }

  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  a,
  a:visited {
    color: ${COLORS.blue};
  }
}
`;

const Body = (props) => {
  const {
    nearestStore, nearestStoreMapUrl, price, addToCartUrl, isPopup
  } = props;

  return (
    <Container>
      <CloseButton isPopup={isPopup} />
      <Logo color={isPopup ? COLORS.black : COLORS.white} />
      <CallToAction
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
      />
      <AddToCartButton addToCartUrl={addToCartUrl} />
    </Container>
  );
};

Body.propTypes = {
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCartUrl: PropTypes.string.isRequired,
  isPopup: PropTypes.bool,
};

Body.defaultProps = {
  isPopup: false,
};

export default Body;
