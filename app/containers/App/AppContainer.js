import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import ErrorBoundary from '../../components/shared/ErrorBoundary/ErrorBoundary';

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      activeUrl: '',
      addToCartUrl: '',
      nearestStore: '',
      nearestStoreMapUrl: '',
      price: 0,
      isLoading: true,
    };

    this.getActiveUrl = this.getActiveUrl.bind(this);
    this.getProductData = this.getProductData.bind(this);
    this.isValidPage = this.isValidPage.bind(this);
  }

  componentDidMount() {
    const { isPopup } = this.props;
    if (isPopup) {
      chrome.runtime.sendMessage({ popupOpen: true });
      this.getActiveUrl();
    } else {
      this.getProductData();
    }
  }

  getActiveUrl() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeUrl = tabs[0].url;
      this.setState(
        {
          activeUrl,
        },
        this.getProductData,
      );
    });
  }

  getProductData() {
    chrome.storage.local.get(['productData', 'productUrl'], ({ productData, productUrl }) => {
      if (productData && this.isValidPage(productUrl)) {
        const {
          name,
          image,
          addToCartUrl,
          hours,
          nearestStore,
          nearestStoreMapUrl,
          price,
          url,
        } = productData;

        this.setState({
          name,
          image,
          addToCartUrl,
          hours,
          isLoading: false,
          nearestStore,
          nearestStoreMapUrl,
          price,
          url,
        });
      } else {
        this.setState({
          isLoading: false,
        });
      }
    });
  }

  isValidPage(productUrl) {
    const { isPopup } = this.props;
    const { activeUrl } = this.state;
    if (isPopup && productUrl === activeUrl) {
      return true;
    }
    if (!isPopup && productUrl === window.location.href) {
      return true;
    }
    return false;
  }

  render() {
    const {
      name,
      image,
      addToCartUrl,
      hours,
      isLoading,
      nearestStore,
      nearestStoreMapUrl,
      price,
      url,
    } = this.state;

    const { isPopup } = this.props;
    return (
      <ErrorBoundary>
        <App
          name={name}
          image={image}
          addToCartUrl={addToCartUrl}
          hours={hours}
          isLoading={isLoading}
          isPopup={isPopup}
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          url={url}
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
