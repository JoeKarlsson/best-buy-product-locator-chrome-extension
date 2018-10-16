import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import ErrorBoundary from '../../components/shared/ErrorBoundary/ErrorBoundary';
import getProductAvailability from '../../util/getProductAvailability';

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      addToCartUrl: '',
      nearestStore: '',
      nearestStoreMapUrl: '',
      price: 0,
      isLoading: true,
    };

    this.getProductCode = this.getProductCode.bind(this);
    this.getProductData = this.getProductData.bind(this);
  }

  componentDidMount() {
    // console.log('hit', isValidHost());
    // if (isValidHost()) {
    //   this.setState({
    //     isNotValidSite: false,
    //   });
    // }
    return this.getProductCode();
  }

  getProductCode() {
    chrome.storage.local.get(['productCode', 'codeType'], this.getProductData);
  }

  async getProductData({ productCode, codeType }) {
    const productData = await getProductAvailability(productCode, codeType);
    const {
      addToCartUrl, nearestStore, nearestStoreMapUrl, price
    } = productData;

    this.setState({
      addToCartUrl,
      nearestStore,
      nearestStoreMapUrl,
      price,
      isLoading: false,
    });
  }

  render() {
    const {
      nearestStore, nearestStoreMapUrl, price, addToCartUrl, isLoading
    } = this.state;

    const { isPopup } = this.props;
    return (
      <ErrorBoundary>
        <App
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          addToCartUrl={addToCartUrl}
          isLoading={isLoading}
          isPopup={isPopup}
        />
      </ErrorBoundary>
    );
  }
}

AppContainer.propTypes = {
  isPopup: PropTypes.bool,
};

AppContainer.defaultProps = {
  isPopup: false,
};

export default AppContainer;
