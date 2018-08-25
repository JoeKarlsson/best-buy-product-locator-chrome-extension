import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

const H1 = styled.h1`
  color: ${COLORS.darkBlue};
`;

const CallToAction = (props) => {
  const { nearestStoreMapUrl, nearestStore, price } = props;
  return (
    <div>
      <H1>Want it faster? </H1>
      <p>
        This same product is available right now at the{' '}
        <a target="_blank" rel="noopener noreferrer" href={nearestStoreMapUrl}>
          Best Buy in {nearestStore}.
        </a>{' '}
        Order now and pick it up in 1 hour.
      </p>
      <p>
        Price: <b>${price}</b>
      </p>
    </div>
  );
};

CallToAction.propTypes = {
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

CallToAction.defaultProps = {};

export default CallToAction;
