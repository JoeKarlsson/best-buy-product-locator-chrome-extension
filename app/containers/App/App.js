import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Error from '../../components/shared/Error/Error';
import Loader from '../../components/shared/Loader/Loader';
import Body from '../../components/Body/Body';
import Popup from '../../components/Popup/Popup';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      validProduct: false,
      validStore: false,
    };

    this.isValidProductData = this.isValidProductData.bind(this);
  }

  componentDidUpdate() {
    const {
      nearestStore, nearestStoreMapUrl, price, addToCartUrl
    } = this.props;
    this.isValidProductData(price, addToCartUrl);
    this.isValidStoreData(nearestStore, nearestStoreMapUrl);
  }

  isValidProductData(price, addToCartUrl) {
    const validProduct = price > 0 && addToCartUrl.length > 0;

    this.setState({
      validProduct,
    });
  }

  isValidStoreData(nearestStore, nearestStoreMapUrl) {
    const validStore = nearestStore.length > 0 && nearestStoreMapUrl.length > 0;

    this.setState({
      validStore,
    });
  }

  render() {
    const {
      name,
      image,
      addToCartUrl,
      hours,
      isLoading,
      isPopup,
      nearestStore,
      nearestStoreMapUrl,
      price,
      url,
    } = this.props;

    const { validProduct, validStore } = this.state;

    if (isLoading && isPopup) {
      return <Loader />;
    }

    if (validProduct) {
      if (isPopup) {
        return (
          <Popup
            name={name}
            image={image}
            addToCartUrl={addToCartUrl}
            hours={hours}
            isPopup={isPopup}
            nearestStore={nearestStore}
            nearestStoreMapUrl={nearestStoreMapUrl}
            price={price}
            url={url}
            validStore={validStore}
          />
        );
      }
      return (
        <Body
          name={name}
          image={image}
          addToCartUrl={addToCartUrl}
          hours={hours}
          isPopup={isPopup}
          nearestStore={nearestStore}
          nearestStoreMapUrl={nearestStoreMapUrl}
          price={price}
          url={url}
          validStore={validStore}
        />
      );
    }
    if (isPopup) {
      return <Error />;
    }
    return null;
  }
}

App.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  addToCartUrl: PropTypes.string,
  hours: PropTypes.object,
  isLoading: PropTypes.bool,
  isPopup: PropTypes.bool,
  nearestStore: PropTypes.string,
  nearestStoreMapUrl: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
};

App.defaultProps = {
  name: '',
  image: '',
  addToCartUrl: '',
  hours: {},
  isLoading: true,
  isPopup: false,
  nearestStore: '',
  nearestStoreMapUrl: '',
  price: 0,
  url: '',
};

export default App;
