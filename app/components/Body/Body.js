import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../shared/Logo/Logo';
import CallToAction from '../CallToAction/CallToAction';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { COLORS, STYLES } from '../../constants/styles';

const slideDown = keyframes`
    0% {
        top: -100px;
    }
    100% {
        top: 0;
    }
`;

const Container = styled.div`
  ${(props) => {
    if (!props.isPopup) {
      return css`
        background: ${COLORS.blue};
        color: ${COLORS.white};
        font-size: ${STYLES.fontSize};
        font-family: ${STYLES.fontFamily};
        width: 100%;
        position: fixed;
        z-index: 9999;
        top: 0;
        padding: 10px 20px 10px 20px;
        animation-name: ${slideDown};
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;

        h2 {
          color: ${COLORS.white};
          font-size: 1.5em;
          -webkit-margin-before: 0px;
          -webkit-margin-after: 0px;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
          font-weight: bold;
        }

        a,
        a:visited {
          text-decoration: underline;
          color: ${COLORS.white};
        }
      `;
    }
  }}
}
`;

const Body = (props) => {
  const {
    addToCartUrl, hours, isPopup, nearestStore, nearestStoreMapUrl, price
  } = props;

  return (
    <Container isPopup={isPopup}>
      <CloseButton isPopup={isPopup} />
      <Logo isPopup={isPopup} />
      <CallToAction
        hours={hours}
        isPopup={isPopup}
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
      />
      <AddToCartButton addToCartUrl={addToCartUrl} isPopup={isPopup} />
    </Container>
  );
};

Body.propTypes = {
  addToCartUrl: PropTypes.string.isRequired,
  hours: PropTypes.object.isRequired,
  isPopup: PropTypes.bool,
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Body.defaultProps = {
  isPopup: false,
};

export default Body;
