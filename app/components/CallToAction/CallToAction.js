import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/styles';

const Container = styled.div`
  ${(props) => {
    if (!props.isPopup) {
      return css`
        margin-left: 100px;
        margin-top: -5px;

        p {
          display: inline;
        }

        @media (max-width: 1390px) {
          margin-top: 5px;
          margin-left: 0px;
        }

        @media (max-width: 1040px) {
          p {
            display: block;
          }
        }
      `;
    }
  }};
`;

const H2 = styled.h2`
  color: ${COLORS.darkBlue};
`;

class CallToAction extends React.PureComponent {
  formatMessage = (hours) => {
    const pickItUp = 'Pick it up';

    if (hours.openNow && hours.closingSoon) {
      return `${pickItUp} today before ${hours.today.closeAmPm} or tomorrow as early as ${
        hours.tomorrow.openAmPm
      }`;
    }
    if (!hours.openNow) {
      return `${pickItUp} as early as ${hours.tomorrow.openAmPm}`;
    }
    return `${pickItUp} in 1 hour. Open today until ${hours.today.closeAmPm}`;
  };

  render() {
    const {
      hours, isPopup, nearestStoreMapUrl, nearestStore, price, validStore
    } = this.props;

    if (validStore) {
      return (
        <Container isPopup={isPopup}>
          <H2>Want it faster? </H2>
          <p>
            This product is available for pick up at the{' '}
            <a target="_blank" rel="noopener noreferrer" href={nearestStoreMapUrl}>
              Best Buy in {nearestStore}.
            </a>{' '}
            {this.formatMessage(hours, validStore)}
            .&nbsp;
          </p>
          <p>
            Price: <b>${price}</b>
          </p>
        </Container>
      );
    }

    return (
      <Container isPopup={isPopup}>
        <H2>Order now on BestBuy.com</H2>
        <p>
          Price: <b>${price}</b>
        </p>
      </Container>
    );
  }
}

CallToAction.propTypes = {
  hours: PropTypes.object.isRequired,
  isPopup: PropTypes.bool,
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  validStore: PropTypes.bool.isRequired,
};

CallToAction.defaultProps = {
  isPopup: false,
};

export default CallToAction;
