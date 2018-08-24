import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/styles';

const Container = styled.div`
  width: 100%;
  text-align: right;
`;

const X = styled.div`
  width: 100%;
  color: ${COLORS.blue};
  cursor: pointer;
  font-size: 40px;
  font-weight: 700;
`;

const CloseButton = () => (
  <Container onClick={() => window.close()}>
    <X>×</X>
  </Container>
);

export default CloseButton;
