import styled from '@emotion/styled';
import React from 'react';
import useFormContextHook from '../../../hooks/useFormContextHook';
import { storage } from '../../../hooks/useStorage';
import { useFlow } from '../../../stackflow';
import { generateBirthDayLottoNumbers, generateLottoNumbers } from './lottoGenerate';
import { receive } from '@stackflow/compat-await-push';
import useSendNativeEventBridge from '../../../hooks/useSendNativeEventBridge';
import { Spacing } from '../../common/Spacing';
import { usePostLottoQuestion } from '../../../api/fetchPostLottoQuestion';
import { v4 as uuidv4 } from 'uuid';
import { DeviceUUID } from 'device-uuid';
// interface Props {}

const AccessoryBar = () => {
  const { watch, setValue } = useFormContextHook();
  const talks = watch('talks');
  const birthday = watch('birthday');
  const { push } = useFlow();
  const { sendToNative } = useSendNativeEventBridge();

  const { mutate } = usePostLottoQuestion();
  const uuid = new DeviceUUID().get() || uuidv4();

  const getNewNumberHandler = () => {
    setValue('talks', [
      ...talks,
      {
        author: 'USER',
        message: '로또 1등 당첨될 것 같은 숫자 6개 알려줘',
      },
    ]);

    setTimeout(() => {
      // setValue('typing', false);
      const newTalks = storage('talks').get();
      const numberList = generateLottoNumbers();
      setValue('talks', [
        ...newTalks,
        {
          author: 'AI',
          message: `이번 추천 번호는 [${numberList.join(', ')}] 입니다.`,
          createdAt: new Date(),
        },
      ]);
      setValue('typing', true);
    }, 1000);
  };

  const getBirthdayNumberHandler = async () => {
    if (!birthday) {
      const recieveValue: any = await receive(push('BirthDayBottomSheet', {}));
      if (!recieveValue?.birthday) return;
      setValue('birthday', recieveValue?.birthday);
      sendToNative('showInterstitialAd', {});
      const numberList = generateBirthDayLottoNumbers(recieveValue?.birthday);

      setValue('talks', [
        ...talks,
        {
          author: 'USER',
          message: `내 생일 ${recieveValue.birthday}에 맞는 오늘 행운의 로또 번호 알려줘`,
          createdAt: new Date(),
        },
      ]);
      setTimeout(() => {
        // setValue('typing', false);
        const newTalks = storage('talks').get();
        setValue('talks', [
          ...newTalks,
          {
            author: 'AI',
            message: `생일에 맞는 추천 번호는 [${numberList.join(', ')}] 입니다.`,
            createdAt: new Date(),
          },
        ]);
        setValue('typing', true);
      }, 1000);

      return;
    }
    sendToNative('showInterstitialAd', {});
    const numberList = generateBirthDayLottoNumbers(birthday);

    setValue('talks', [
      ...talks,
      {
        author: 'USER',
        message: `내 생일 ${birthday}에 맞는 오늘 행운의 로또 번호 알려줘`,
      },
    ]);
    setTimeout(() => {
      // setValue('typing', false);
      const newTalks = storage('talks').get();
      setValue('talks', [
        ...newTalks,
        {
          author: 'AI',
          message: `생일에 맞는 추천 번호는 [${numberList.join(', ')}] 입니다.`,
        },
      ]);
      setValue('typing', true);
    }, 1000);
  };

  const askQuestionToAI = async () => {
    const recieveValue: any = await receive(push('AskQuestionBottomSheet', {}));
    if (!recieveValue?.question) {
      return;
    }
    await mutate(
      {
        deviceId: uuid,
        question: recieveValue.question,
      },
      {
        onSuccess: (data) => {
          if (data.data?.lottoQnA?.answer)
            setTimeout(() => {
              const newTalks = storage('talks').get();
              setValue('talks', [
                ...newTalks,
                {
                  author: 'AI',
                  message: data.data?.lottoQnA?.answer,
                  createdAt: new Date(),
                },
              ]);
              setValue('typing', true);
            }, 1000);
        },
        onError: (error) => {
          console.log(error);
          setTimeout(() => {
            const newTalks = storage('talks').get();
            setValue('talks', [
              ...newTalks,
              {
                author: 'AI',
                message:
                  '죄송합니다. 일시적 에러가 발생해 답변을 드리지 못했습니다. 다시 시도해주세요',
                createdAt: new Date(),
              },
            ]);
            setValue('typing', true);
          }, 1000);
        },
      }
    );
  };

  // 테스트용 예시
  return (
    <Wrapper>
      <div className="gradient-overlay"></div>
      <ButtonListWrapper>
        <Spacing width={8} />
        <Button onClick={getNewNumberHandler}>번호 추천 받기</Button>
        <Button onClick={getBirthdayNumberHandler}>내 생일에 맞는 번호 추천받기</Button>
        <Button onClick={askQuestionToAI}>AI에게 직접 번호 물어보기</Button>
        <Button disabled>추가 기능 준비중...</Button>
        <Spacing width={8} />
      </ButtonListWrapper>
    </Wrapper>
  );
};

export default AccessoryBar;

const Wrapper = styled.div`
  width: 100%;
  padding: 8px 0 12px 0;
  background-color: #343541;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 0;
    z-index: 29;
    width: 100%;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(52, 53, 65, 0.7) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 90%,
      rgba(52, 53, 65, 1) 100%
    );
  }
`;

const ButtonListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  gap: 8px;
`;

const Button = styled.div<{ disabled?: boolean }>`
  width: fit-content;
  min-width: fit-content;

  color: white;
  background-color: rgba(16, 163, 127, 1);
  border-radius: 5px;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: rgba(16, 163, 127, 0.5);
    color: rgba(255, 255, 255, 0.5);
  `}
`;
