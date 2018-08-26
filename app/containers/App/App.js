import React from 'react';
import PropTypes from 'prop-types';
import Error from '../../components/shared/Error/Error';
import Loader from '../../components/shared/Loader/Loader';
import Body from '../../components/Body/Body';

const isValidProductData = (data) => {
  const {
    nearestStore, nearestStoreMapUrl, price, addToCartUrl
  } = data;

  return (
    nearestStore.length > 0 && nearestStoreMapUrl.length > 0 && price > 0 && addToCartUrl.length > 0
  );
};

const App = (props) => {
  const {
    nearestStore, nearestStoreMapUrl, price, addToCartUrl, isLoading
  } = props;

  if (isLoading) {
    return <Loader />;
  }
  if (isValidProductData(props)) {
    return (
      <Body
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
        addToCartUrl={addToCartUrl}
      />
    );
  }
  return <Error />;
};

App.propTypes = {
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCartUrl: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

App.defaultProps = {};

export default App;
