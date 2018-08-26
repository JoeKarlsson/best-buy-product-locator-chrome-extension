import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../shared/Logo/Logo';
import CallToAction from '../CallToAction/CallToAction';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const Body = (props) => {
  const {
    nearestStore, nearestStoreMapUrl, price, addToCartUrl
  } = props;

  return (
    <div>
      <CloseButton />
      <Logo />
      <CallToAction
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
      />
      <AddToCartButton addToCartUrl={addToCartUrl} />
    </div>
  );
};

Body.propTypes = {
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCartUrl: PropTypes.string.isRequired,
};

Body.defaultProps = {};

export default Body;
