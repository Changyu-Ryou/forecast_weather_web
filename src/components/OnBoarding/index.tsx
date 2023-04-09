import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

import { usePostUserRegister } from '../../api/fetchPostUserRegister';

import { useFlow } from '../../stackflow';
import { AppScreen } from '../../stackflow/components';
import { DeviceUUID } from 'device-uuid';

import NormalFlippyCard from '../common/NormalFlippyCard';
import { Spacing } from '../common/Spacing';
import useFormContextHook from '../../hooks/useFormContextHook';
import { v4 as uuidv4 } from 'uuid';
import DimmerWrapper from '../common/DimmerWrapper';
import CircularProgress from '../../assets/CircularProgress';
import backCardImage from '../../assets/Image/card_back.png';

const transition = {
  duration: 0.5,
};

const textReveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function MainContents(): ReactElement {
  const { push } = useFlow();

  const { setValue } = useFormContextHook();

  const { mutate, isLoading } = usePostUserRegister();

  const onOnboardHandler = async () => {
    if (isLoading) return;
    const uuid = new DeviceUUID().get() || uuidv4();

    await mutate(
      { deviceId: uuid },
      {
        onSuccess: (data) => {
          if (data) {
            setValue('userData', data.data);
          }
          push('OnBoardGoalPage', {}, { animate: false });
        },
      }
    );
  };

  return (
    <AppScreen noAppBar>
      <View>
        <Title variants={textReveal} initial="initial" animate="animate" transition={transition}>
          당신을 일으켜 세울
          <br />
          오늘의 한마디
        </Title>
        <Spacing height={33} />
        <CardWrapper>
          <NormalFlippyCard onClick={onOnboardHandler} frontImage={backCardImage} />
        </CardWrapper>
      </View>
      {isLoading && (
        <DimmerWrapper>
          <CircularProgress />
        </DimmerWrapper>
      )}
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
  overflow: hidden;

  font-weight: 700;
  font-size: 28px;
  line-height: 130%;

  text-align: center;
  word-break: keep-all;
  flex-shrink: 0;
`;

const CardWrapper = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MainContents;
