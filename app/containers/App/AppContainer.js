import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import ErrorBoundary from '../../components/shared/ErrorBoundary/ErrorBoundary';
import getProductAvailability from '../../util/getProductAvailability';
import handleError from '../../util/handleError';

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
    return this.getProductCode();
  }

  getProductCode() {
    chrome.storage.local.get(['productCode', 'codeType'], this.getProductData);
  }

  async getProductData({ productCode, codeType }) {
    try {
      const productData = await getProductAvailability(productCode, codeType);

      const {
        addToCartUrl, hours, nearestStore, nearestStoreMapUrl, price
      } = productData;

      this.setState({
        addToCartUrl,
        hours,
        isLoading: false,
        nearestStore,
        nearestStoreMapUrl,
        price,
      });
    } catch (err) {
      handleError(err);
    }
  }

  render() {
    const {
      addToCartUrl, hours, isLoading, nearestStore, nearestStoreMapUrl, price
    } = this.state;

    const { isPopup } = this.props;
    return (
      <ErrorBoundary>
        <App
          addToCartUrl={addToCartUrl}
          hours={hours}
          isLoading={isLoading}
          isPopup={isPopup}
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
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
