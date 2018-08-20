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
    // const modelNumber = await getModelNumber();

    const productData = await fetchProductData('UN32N5300AFXZA'); // swap with model number

    if (productData.products && Array.isArray(productData.products)) {
      const product = productData.products[0];
      const skuId = product.sku;

      // TODO: figure out how to get zipcode or geolocation coordinates
      const storeData = await fetchStoreData(skuId, '55423', '15');

      console.log(storeData);

      if (storeData.stores && Array.isArray(storeData.stores)) {
        const nearestStore = storeData.stores[0];

        console.log(`${nearestStore.city}, ${nearestStore.region}`);
        const { city, region, lat, lng } = nearestStore;
        this.setState({
          addToCartUrl: product.addToCartUrl,
          nearestStore: `${city}, ${region}`,
          nearestStoreMapUrl: `https://www.google.com/maps/search/Best+Buy+${city}+${region}/@${lat},${lng}`,
          price: product.salePrice || product.regularPrice
        });
      }
    }
  }
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
