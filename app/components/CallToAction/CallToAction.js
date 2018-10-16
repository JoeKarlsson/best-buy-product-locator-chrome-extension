import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/styles';

const Container = styled.div`
  ${(props) => {
    if (!props.isPopup) {
      return css`
        margin-left: 100px;
        margin-top: -5px;

        p {
          display: inline;
        }

        @media (max-width: 1200px) {
          margin-top: 5px;
          margin-left: 0px;
        }

        @media (max-width: 850px) {
          p {
            display: block;
          }
        }
      `;
    }
  }};
`;

const H2 = styled.h2`
  color: ${COLORS.darkBlue};
`;

const CallToAction = (props) => {
  const {
    isPopup, nearestStoreMapUrl, nearestStore, price
  } = props;
  return (
    <Container isPopup={isPopup}>
      <H2 className="foobar">Want it faster? </H2>
      <p>
        This product is available for pick up at the{' '}
        <a target="_blank" rel="noopener noreferrer" href={nearestStoreMapUrl}>
          Best Buy in {nearestStore}.
        </a>{' '}
        Order now and pick it up in 1 hour.&nbsp;
      </p>
      <p>
        Price: <b>${price}</b>
      </p>
    </Container>
  );
};

CallToAction.propTypes = {
  isPopup: PropTypes.bool,
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

CallToAction.defaultProps = {
  isPopup: false,
};

export default CallToAction;
