import styled from '@emotion/styled';
import React from 'react';
import { Spacing } from './Spacing';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { keyframes } from '@emotion/react';

type Props = {
  onClose?: () => void;
  children?: React.ReactNode;
};

const DimmerWrapper = ({ onClose, children }: Props) => {
  return (
    <Wrapper onClick={onClose} onTouchMove={onClose} onDrag={onClose}>
      <InnerWrapper>{children}</InnerWrapper>
      <DimmedWrapper />
    </Wrapper>
  );
};

export default DimmerWrapper;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const DimmedWrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;

  top: 0;
  left: 0;
  background: #000000;
  opacity: 0.7;
  z-index: 10;
`;

const InnerWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;

  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  z-index: 100;
`;
