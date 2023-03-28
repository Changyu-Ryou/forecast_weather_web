import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

import { useFlow } from '../../stackflow';
import { AppScreen } from '../../stackflow/components';
import { Button } from '../common/Button';
import FlippyCard from '../common/FlippyCard';
import { Spacing } from '../common/Spacing';

const transition = {
  duration: 2,
  delay: 0.5,
};

const textReveal = {
  initial: {
    y: '200%',
    opacity: 0,
  },
  animate: {
    y: '0%',
    opacity: 1,
  },
};

function MainContents(): ReactElement {
  const { push } = useFlow();
  return (
    <AppScreen
      noAppBar
      accessoryBar={
        <ButtonWrapper
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 2 }}
        >
          <Button
            onClick={() => {
              push('OnBoardGoalPage', {});
            }}
          >
            명언 받기
          </Button>
        </ButtonWrapper>
      }
    >
      <View>
        <Title
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay: 0.5 }}
        >
          명언을 어쩌구
          <br />
          갓생 살기 가즈아
        </Title>
        <Spacing height={31} />
        <FlippyCard imageUrl="https://blog.kakaocdn.net/dn/bdMBNq/btrbWeHU9Ui/itmiT8htt9Y8OdxculRhM0/img.jpg" />

        <Spacing height={30} />
      </View>
    </AppScreen>
  );
}

const View = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-y: auto;
  position: relative;
`;

const Title = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 20px;
  overflow: hidden;

  font-weight: 700;
  font-size: 28px;
  line-height: 130%;

  text-align: center;
  word-break: keep-all;
  flex-shrink: 0;
`;

const ButtonWrapper = styled(motion.div)`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export default MainContents;
