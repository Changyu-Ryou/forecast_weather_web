import styled from '@emotion/styled';
import { BottomSheet } from '@stackflow/plugin-basic-ui';
import React from 'react';
import useFormContextHook from '../../hooks/useFormContextHook';
import { useFlow } from '../../stackflow';
import AsyncBoundary from '../common/AsyncBoundary/AsyncBoundary';
import { Button } from '../common/Button';

const EditGoalBottomSheet = () => {
  const { pop } = useFlow();
  const { watch, setValue } = useFormContextHook();
  const userData = watch('userData');
  const [editValue, setEditValue] = React.useState<string | undefined>(userData?.goal ?? '');

  const storeHandler = () => {
    setValue('userData', { ...userData, goal: editValue });
    pop();
  };

  return (
    <BottomSheet borderRadius="1.25rem">
      <AsyncBoundary pendingFallback={<></>} rejectedFallback={<></>}>
        <Wrapper>
          <Title>목표</Title>
          <TextareaWrapper>
            <Textarea value={editValue} onChange={(e) => setEditValue(e.target.value)} autoFocus />
          </TextareaWrapper>
          <StoreBtn onClick={storeHandler}>저장</StoreBtn>
        </Wrapper>
      </AsyncBoundary>
    </BottomSheet>
  );
};

export default EditGoalBottomSheet;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #1f2023;
  padding: 10px;
`;

const TextareaWrapper = styled.div`
  width: calc(100% - 40px);
  margin: 8px 20px;
  height: 140px;
  padding: 18px;
  background: #f3f3f4;
  border-radius: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;

  background-color: transparent;

  caret-color: #1f2023;

  border: none;

  &:focus {
    outline: none;
  }
  resize: none;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;

  letter-spacing: -0.01em;

  &::placeholder {
    color: #bfbfc2;
  }
`;

const StoreBtn = styled(Button)`
  margin: 16px 20px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  padding: 10px;

  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
`;
