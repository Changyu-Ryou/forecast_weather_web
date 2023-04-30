import styled from '@emotion/styled';
import { BottomSheet } from '@stackflow/plugin-basic-ui';
import React from 'react';
import useFormContextHook from '../../hooks/useFormContextHook';
import { useFlow } from '../../stackflow';
import { Spacing } from '../common/Spacing';
import { send } from '@stackflow/compat-await-push';
import { useActivity } from '@stackflow/react';

function isValidBirthdate(str: string) {
  const regex = /^\d{8}$/;
  if (!regex.test(str)) {
    return false;
  }

  const year = parseInt(str.substr(0, 4));
  const month = parseInt(str.substr(4, 2));
  const day = parseInt(str.substr(6, 2));
  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function formatBirthdate(str: string) {
  if (!isValidBirthdate(str)) {
    return null;
  }

  const year = str.substr(0, 4);
  const month = str.substr(4, 2);
  const day = str.substr(6, 2);

  return `${year}-${month}-${day}`;
}

const BirthDayBottomSheet = () => {
  const { setValue, watch } = useFormContextHook();
  const { pop } = useFlow();
  const { id } = useActivity();

  const submitHandler = () => {
    const birthday = watch('birthday') || '';
    if (isValidBirthdate(birthday)) {
      pop();
      setValue('birthday', formatBirthdate(birthday));
      send({
        activityId: id,
        data: {
          birthday: formatBirthdate(birthday),
        },
      });
    } else {
      alert('생년월일을 다시 입력해주세요');
    }
  };
  return (
    <BottomSheet borderRadius="1.25rem" backgroundColor="#343541">
      <Wrapper>
        <Spacing height={10} />
        <Text>생년월일을 입력해주세요</Text>
        <Spacing height={5} />
        <SubText>(예시: 19880305)</SubText>
        <Spacing height={20} />
        <Input
          type="number"
          placeholder="예시: 19880305"
          onChange={(e) => {
            setValue('birthday', e.target.value);
          }}
          value={watch('birthday') || ''}
        />
        <Spacing height={20} />
        <Button onClick={submitHandler}>확인</Button>
      </Wrapper>
    </BottomSheet>
  );
};

export default BirthDayBottomSheet;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 1.25rem 1.25rem 0 0;
  border: 1px solid #e5e5e5;
  padding: 0 20px 20px 20px;
`;

const Text = styled.div`
  width: 100%;
  font-size: 19px;
  line-height: 22px;
  font-weight: 600;
  color: white;
`;

const SubText = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: white;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #40414f;
  background-color: #40414f;

  font-size: 18px;
  font-weight: 500;
  color: white;
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
