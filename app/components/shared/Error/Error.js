import React from 'react';
import styled from 'styled-components';
import CloseButton from '../../CloseButton/CloseButton';
import Logo from '../Logo/Logo';
import { COLORS, STYLES } from '../../../constants/styles';

const TopBar = styled.div`
  margin-top: 15px;
  display: flex;
`;

const Body = styled.span`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  text-align: center;
  justify-content: center;
`;

const ErrorHeader = styled.h3`
  text-align: left;
`;

const Button = styled.button`
  width: 100%;
  top: 10px;
  background: ${COLORS.yellow};
  font-size: ${STYLES.fontSize};
  width: 100%;
  border: 0;
  height: 45px;
  line-height: normal;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  transition: all 0.3s ease-out 0s;

  &:hover {
    background: ${COLORS.lightYellow};
  }
`;

const ButtonContainer = styled.a`
  width: 100%;
  top: 10px;
`;

const Error = () => (
  <div>
    <TopBar>
      <Logo isPopup />
      <CloseButton isPopup />
    </TopBar>
    <Body>
      <ErrorHeader>
        We are sorry that we could not locate this product at this time. Please try again later
      </ErrorHeader>
      <ButtonContainer target="_blank" rel="noopener noreferrer" href="https://www.bestbuy.com/">
        <Button>Shop BestBuy.com</Button>
      </ButtonContainer>
    </Body>
  </div>
);

export default Error;
