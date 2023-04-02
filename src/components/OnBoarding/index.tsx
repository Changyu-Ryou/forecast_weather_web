import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactElement, useEffect } from 'react';

import { fetchPostUserRegister } from '../../api/fetchPostUserRegister';
import { useStorage } from '../../hooks/useStorage';

import { useFlow } from '../../stackflow';
import { AppScreen } from '../../stackflow/components';
import { DeviceUUID } from 'device-uuid';

import NormalFlippyCard from '../common/NormalFlippyCard';
import { Spacing } from '../common/Spacing';
import useFormContextHook from '../../hooks/useFormContextHook';

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

  const onOnboardHandler = async () => {
    const uuid = new DeviceUUID().get();
    const data = await fetchPostUserRegister({ deviceId: uuid });

    if (data) {
      setValue('userData', data.data);
    }
    push('OnBoardGoalPage', {}, { animate: false });
  };

  return (
    <AppScreen noAppBar>
      <View>
        <Title variants={textReveal} initial="initial" animate="animate" transition={transition}>
          명언을 어쩌구
          <br />
          갓생 살기 가즈아
        </Title>
        <Spacing height={55} />
        <CardWrapper>
          <NormalFlippyCard
            onClick={onOnboardHandler}
            imageUrl="https://blog.kakaocdn.net/dn/bdMBNq/btrbWeHU9Ui/itmiT8htt9Y8OdxculRhM0/img.jpg"
            frontImage="https://user-images.githubusercontent.com/56837413/228339554-e3dc0092-71b7-4dac-b79e-01f8db2961e4.png"
          />
        </CardWrapper>
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
  overflow: hidden;

  font-weight: 700;
  font-size: 28px;
  line-height: 130%;

  text-align: center;
  word-break: keep-all;
  flex-shrink: 0;
`;

const CardWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default MainContents;
