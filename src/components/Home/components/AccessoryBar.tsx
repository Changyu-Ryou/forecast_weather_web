import styled from '@emotion/styled';
import React from 'react';
import useFormContextHook from '../../../hooks/useFormContextHook';
import { storage } from '../../../hooks/useStorage';
import { useFlow } from '../../../stackflow';
import { generateBirthDayLottoNumbers, generateLottoNumbers } from './lottoGenerate';
import { receive } from '@stackflow/compat-await-push';

// interface Props {}

const AccessoryBar = () => {
  const { watch, setValue } = useFormContextHook();
  const talks = watch('talks');
  const birthday = watch('birthday');
  const { push } = useFlow();

  const getNewNumberHandler = () => {
    setValue('talks', [
      ...talks,
      {
        author: 'USER',
        message: '로또 1등 당첨될것 같은 숫자 6개 알려줘',
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

  // 테스트용 예시
  console.log();
  return (
    <Wrapper>
      <ButtonListWrapper>
        <Button onClick={getNewNumberHandler}>번호 추천 받기</Button>
        <Button onClick={getBirthdayNumberHandler}>내 생일에 맞는 번호 추천받기</Button>
      </ButtonListWrapper>
    </Wrapper>
  );
};

export default AccessoryBar;

const Wrapper = styled.div`
  width: 100%;
  padding: 8px 12px 12px 12px;
  background-color: #343541;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const ButtonListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Button = styled.div`
  width: auto;

  color: white;
  background-color: rgba(16, 163, 127, 1);
  border-radius: 5px;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
