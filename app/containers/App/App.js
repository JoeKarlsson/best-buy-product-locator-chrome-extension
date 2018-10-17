import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Error from '../../components/shared/Error/Error';
import Loader from '../../components/shared/Loader/Loader';
import Body from '../../components/Body/Body';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      validProduct: false,
    };

    this.isValidProductData = this.isValidProductData.bind(this);
  }

  componentDidUpdate() {
    this.isValidProductData();
  }

  isValidProductData() {
    const {
      nearestStore, nearestStoreMapUrl, price, addToCartUrl
    } = this.props;

    const validProduct = nearestStore.length > 0
      && nearestStoreMapUrl.length > 0
      && price > 0
      && addToCartUrl.length > 0;

    this.setState({
      validProduct,
    });
  }

  render() {
    const {
      addToCartUrl,
      hours,
      isLoading,
      isPopup,
      nearestStore,
      nearestStoreMapUrl,
      price,
    } = this.props;

    const { validProduct } = this.state;

    if (isLoading && isPopup) {
      return <Loader />;
    }

    if (validProduct) {
      return (
        <Body
          addToCartUrl={addToCartUrl}
          hours={hours}
          isPopup={isPopup}
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
        />
      );
    }
    if (isPopup) {
      return <Error />;
    }
    return null;
  }
}

App.propTypes = {
  addToCartUrl: PropTypes.string,
  hours: PropTypes.object,
  isLoading: PropTypes.bool,
  isPopup: PropTypes.bool,
  nearestStore: PropTypes.string,
  nearestStoreMapUrl: PropTypes.string,
  price: PropTypes.number,
};

App.defaultProps = {
  addToCartUrl: '',
  hours: {},
  isLoading: true,
  isPopup: false,
  nearestStore: '',
  nearestStoreMapUrl: '',
  price: 0,
};

export default App;
