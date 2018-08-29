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
  }

  componentDidMount() {
    this.handleProductCode();
    this.handleDOMScraperEvent();
  }

  async handleDOMScraperEvent() {
    chrome.runtime.onMessage.addListener(async (productCode, codeType) => {
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
    });
  }

  async handleProductCode() {
    chrome.storage.local.get(['productCode', 'codeType'], async (result) => {
      if (result.productCode && result.codeType) {
        const productData = await getProductAvailability(result.productCode, result.codeType);
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
  isPopup: PropTypes.bool.isRequired,
};

export default AppContainer;
