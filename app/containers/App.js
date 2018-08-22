import React, { Component } from 'react';
import CloseButton from '../components/CloseButton';
import Logo from '../components/logo';
import CallToAction from '../components/CallToAction';
import AddToCartButton from '../components/AddToCartButton';
import { getModelNumber, fetchProductData, fetchStoreData } from '../util/util';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      addToCartUrl: '',
      nearestStore: '',
      nearestStoreMapUrl: '',
      price: 0
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
    chrome.runtime.onMessage.addListener((modelNumbers, sender) => {
      modelNumbers.forEach(async (modelNumber) => {
        this.getAvailability(modelNumber);
      });
    });
  }
  getAvailability = async (modelNumber) => {
    const productData = await fetchProductData(modelNumber);
    if (productData.products && productData.products.length > 0) {
      const product = productData.products[0];
      const skuId = product.sku;

      // TODO: figure out how to get zipcode or geolocation coordinates
      const storeData = await fetchStoreData(skuId, '55423', '15');

      if (storeData.stores && storeData.stores.length > 0) {
        const nearestStore = storeData.stores[0];

        const { city, region, lat, lng } = nearestStore;
        this.setState({
          addToCartUrl: product.addToCartUrl,
          nearestStore: `${city}, ${region}`,
          nearestStoreMapUrl: `https://www.google.com/maps/search/Best+Buy+${city}+${region}/@${lat},${lng}`,
          price: product.salePrice || product.regularPrice
        });
      }
    }
  };
  render() {
    return (
      <div>
        <CloseButton />
        <Logo />
        <CallToAction
          nearestStore={this.state.nearestStore}
          nearestStoreMapUrl={this.state.nearestStoreMapUrl}
          price={this.state.price}
        />
        <AddToCartButton addToCartUrl={this.state.addToCartUrl} />
      </div>
    );
  }
}
