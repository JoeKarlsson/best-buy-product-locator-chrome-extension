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
      isLoading,
      isPopup,
      nearestStore,
      nearestStoreMapUrl,
      price,
      addToCartUrl,
    } = this.props;

    const { validProduct } = this.state;

    if (isLoading && isPopup) {
      return <Loader />;
    }

    if (validProduct) {
      return (
        <Body
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          addToCartUrl={addToCartUrl}
          isPopup={isPopup}
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
  nearestStore: PropTypes.string,
  nearestStoreMapUrl: PropTypes.string,
  price: PropTypes.number,
  addToCartUrl: PropTypes.string,
  isLoading: PropTypes.bool,
  isPopup: PropTypes.bool,
};

App.defaultProps = {
  addToCartUrl: '',
  nearestStore: '',
  nearestStoreMapUrl: '',
  price: 0,
  isLoading: true,
  isPopup: false,
};

export default App;
