import React from 'react';
import styled from 'styled-components';
import Circles from './circles';
import { COLORS } from '../../../constants/styles';

const ImageContainer = styled.div`
  text-align: center;
  background: ${COLORS.white};
  height: 200px;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out 0s;
`;

const options = {
  color: 'blue',
  type: 'audio',
  height: 80,
  width: 80,
  visible: true,
};

const Logo = () => <ImageContainer>{Circles(options)}</ImageContainer>;

export default Logo;
