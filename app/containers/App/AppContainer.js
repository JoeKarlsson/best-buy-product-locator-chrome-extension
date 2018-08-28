import React, { Component } from 'react';
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
    this.handleModelNumbers();
    this.handleDomScraperevent();
  }

  async handleDomScraperevent() {
    // set up listener for model number DOM scraper
    chrome.runtime.onMessage.addListener((modelNumbers) => {
      modelNumbers.forEach(async (modelNumber) => {
        const productData = await getProductAvailability(modelNumber);
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
    });
  }

  async handleModelNumbers() {
    // check local storage for existing model numbers on page
    chrome.storage.local.get(['modelNumbers'], (result) => {
      if (result.modelNumbers.length > 0) {
        result.modelNumbers.forEach(async (modelNumber) => {
          const productData = await getProductAvailability(modelNumber);
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
    });
  }

  render() {
    const {
      nearestStore, nearestStoreMapUrl, price, addToCartUrl, isLoading
    } = this.state;

    return (
      <ErrorBoundary>
        <App
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          addToCartUrl={addToCartUrl}
          isLoading={isLoading}
        />
      </ErrorBoundary>
    );
  }
}

export default AppContainer;
