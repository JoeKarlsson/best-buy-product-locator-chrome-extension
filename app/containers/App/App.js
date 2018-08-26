import React, { Component } from 'react';
import CloseButton from '../../components/CloseButton/CloseButton';
import Logo from '../../components/Logo/Logo';
import CallToAction from '../../components/CallToAction/CallToAction';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import { fetchProductData, fetchStoreData } from '../../util/fetchBestBuyData';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      addToCartUrl: '',
      nearestStore: '',
      nearestStoreMapUrl: '',
      price: 0,
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
    const productData = await fetchProductData(modelNumber);
    if (productData.products && productData.products.length > 0) {
      const product = productData.products[0];
      const skuId = product.sku;

      // TODO: figure out how to get zipcode or geolocation coordinates
      const storeData = await fetchStoreData(skuId, '55423', '15');

      if (storeData.stores && storeData.stores.length > 0) {
        const nearestStore = storeData.stores[0];

        const {
          city, region, lat, lng
        } = nearestStore;
        this.setState({
          addToCartUrl: product.addToCartUrl,
          nearestStore: `${city}, ${region}`,
          nearestStoreMapUrl: `https://www.google.com/maps/search/Best+Buy+${city}+${region}/@${lat},${lng}`,
          price: product.salePrice || product.regularPrice,
        });
      }
    }
  };

  render() {
    const {
      nearestStore, nearestStoreMapUrl, price, addToCartUrl
    } = this.state;
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
  }
}
