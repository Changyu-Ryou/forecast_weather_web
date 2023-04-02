import styled from '@emotion/styled';
import React from 'react';
import { Spacing } from '../common/Spacing';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { keyframes } from '@emotion/react';
import useFormContextHook from '../../hooks/useFormContextHook';

const SwipeUpOnboard = () => {
  const { setValue } = useFormContextHook();
  const removeSwipeUpOnboard = () => {
    setValue('showedSwipeUpOnboard', true);
  };
  return (
    <Wrapper
      onClick={removeSwipeUpOnboard}
      onTouchMove={removeSwipeUpOnboard}
      onDrag={removeSwipeUpOnboard}
    >
      <Text>
        위아래로 스와이프하면
        <br />더 많은 명언을 볼 수 있어요!
        <Spacing height={10} />
        <SwipeUpOnboardIcon
          style={{
            color: 'white',
            animationName: 'MoveUpAndDown',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
          }}
        />
      </Text>
      <Spacing height={186} />
      <DimmedWrapper />
    </Wrapper>
  );
};

export default SwipeUpOnboard;

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

const MoveUpAndDown = keyframes`

  0% {
    transform: translateY(0);
  }

  60% {
    transform: translateY(0px);
  }
  70% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;

  z-index: 9999;
  animation-name: ${MoveUpAndDown};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const SwipeUpOnboardIcon = styled(KeyboardDoubleArrowUpIcon)`
  color: white;
  animation-name: ${MoveUpAndDown};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
