import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import { STORAGE_PREFIX } from '../../constants/constants';
import ErrorBoundary from '../../components/shared/ErrorBoundary/ErrorBoundary';

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

    this.getProductData = this.getProductData.bind(this);
    this.getActiveTab = this.getActiveTab.bind(this);
  }

  componentDidMount() {
    this.getActiveTab();
  }

  getProductData() {
    const { tabId } = this.state;
    chrome.storage.local.get([`${STORAGE_PREFIX}${tabId}`], (tabData) => {
      if (Object.keys(tabData).length > 0) {
        const { productData } = tabData[`${STORAGE_PREFIX}${tabId}`];
        if (productData) {
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
      }
    });
  }

  getActiveTab() {
    chrome.storage.local.get([`${STORAGE_PREFIX}active`], (tab) => {
      this.setState(
        {
          tabId: tab[`${STORAGE_PREFIX}active`],
        },
        () => {
          const { isPopup } = this.props;
          const { tabId } = this.state;
          if (isPopup) {
            chrome.runtime.sendMessage({ popupOpen: true, tabId });
          }
          this.getProductData();
        },
      );
    });
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
