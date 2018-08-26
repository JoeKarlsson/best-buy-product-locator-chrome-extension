import React, { Component } from 'react';
import App from './App';
import {
  constructProductURL,
  constructStoreURL,
  constructNearestStoreMapUrl,
} from '../../util/urlFormatter';
import api from '../../util/api';

class AppContainer extends Component {
  static isValidProductData(productData) {
    return productData.products && productData.products.length > 0;
  }

  static isValidStoreData(storeData) {
    return storeData.stores && storeData.stores.length > 0;
  }

  constructor() {
    super();

    this.state = {
      addToCartUrl: '',
      nearestStore: '',
      nearestStoreMapUrl: '',
      price: 0,
      isError: false,
      isLoading: true,
    };
  }

  async componentDidMount() {
    // check local storage for existing model numbers on page
    chrome.storage.local.get(['modelNumbers'], (result) => {
      if (result.modelNumbers && result.modelNumbers.length > 0) {
        result.modelNumbers.forEach(async (modelNumber) => {
          this.getAvailability(modelNumber);
        });
      }
    });
    // set up listener for model number DOM scraper
    chrome.runtime.onMessage.addListener((modelNumbers) => {
      modelNumbers.forEach(async (modelNumber) => {
        this.getAvailability(modelNumber);
      });
    });
  }

  getAvailability = async (modelNumber) => {
    const productURL = constructProductURL(modelNumber);
    const productData = await api(productURL);

    if (AppContainer.isValidProductData(productData)) {
      const product = productData.products[0];
      const skuId = product.sku;

      // TODO: figure out how to get zipcode or geolocation coordinates
      const storeURL = constructStoreURL(skuId, '55423', '15');
      const storeData = await api(storeURL);

      if (AppContainer.isValidStoreData(storeData)) {
        const nearestStore = storeData.stores[0];

        const {
          city, region, lat, lng
        } = nearestStore;

        this.setState({
          addToCartUrl: product.addToCartUrl,
          nearestStore: `${city}, ${region}`,
          nearestStoreMapUrl: constructNearestStoreMapUrl(city, region, lat, lng),
          price: product.salePrice || product.regularPrice,
          isLoading: false,
        });
      }
    } else {
      this.setState({
        isError: true,
        isLoading: false,
      });
    }
  };

  render() {
    const {
      nearestStore,
      nearestStoreMapUrl,
      price,
      addToCartUrl,
      isLoading,
      isError,
    } = this.state;

    return (
      <App
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
        addToCartUrl={addToCartUrl}
        isLoading={isLoading}
        isError={isError}
      />
    );
  }
}

export default AppContainer;
