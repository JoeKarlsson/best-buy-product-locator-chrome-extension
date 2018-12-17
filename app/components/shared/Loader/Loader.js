import React from 'react';
import styled from 'styled-components';
import CloseButton from '../../CloseButton/CloseButton';
import Logo from '../Logo/Logo';
import { COLORS, STYLES } from '../../../constants/styles';

const LoaderContainer = styled.div`
  text-align: center;
  background: ${COLORS.white};
  height: 100%;
  margin-top: 15px;
`;

const Wrapper = styled.div`
  // Loader animation
  @keyframes loader-animate {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
`;

const CardLoader = styled.div`
  background-color: #fff;
  position: relative;
  border-radius: 2px;
  height: 200px;
  overflow: hidden;

  &:only-child {
    margin-top: 0;
  }

  &:before {
    content: '';
    height: 110px;
    display: block;
    background-color: #ededed;
    box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;
  }

  &:after {
    content: '';
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-name: loader-animate;
    animation-timing-function: linear;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 0) 81%
    );
    background: -o-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 0) 81%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 0) 81%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(
    startColorstr="#00ffffff",
    endColorstr="#00ffffff",
    GradientType=1
  );
  }
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

const Container = styled.div``;

const TopBar = styled.div`
  margin-top: 15px;
  display: flex;
`;

const Loader = () => (
  <Container>
    <TopBar>
      <Logo isPopup />
      <CloseButton isPopup />
    </TopBar>
    <LoaderContainer>
      <Wrapper>
        <CardLoader />
      </Wrapper>
    </LoaderContainer>
    <ButtonContainer target="_blank" rel="noopener noreferrer" href="https://www.bestbuy.com/">
      <Button>Shop BestBuy.com</Button>
    </ButtonContainer>
  </Container>
);

export default Loader;
