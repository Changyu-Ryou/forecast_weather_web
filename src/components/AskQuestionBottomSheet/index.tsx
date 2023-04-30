import styled from '@emotion/styled';
import { BottomSheet } from '@stackflow/plugin-basic-ui';

import useFormContextHook from '../../hooks/useFormContextHook';
import { useFlow } from '../../stackflow';
import { Spacing } from '../common/Spacing';
import { send } from '@stackflow/compat-await-push';
import { useActivity } from '@stackflow/react';
import useSendNativeEventBridge from '../../hooks/useSendNativeEventBridge';
import { useEffect } from 'react';

const AskQuestionBottomSheet = () => {
  const { setValue, watch } = useFormContextHook();
  const { pop } = useFlow();
  const { sendToNative } = useSendNativeEventBridge();

  const talks = watch('talks');
  const questionValue = watch('question') || '';
  const { id } = useActivity();

  const submitHandler = async () => {
    if (questionValue.length > 20) {
      alert('질문은 20자 이내로 입력해주세요.');
      return;
    }
    if (questionValue.length < 1) {
      alert('질문을 입력해주세요.');
      return;
    }
    if (questionValue.length < 5) {
      alert('질문이 너무 짧습니다. 5글자 이상 입력해주세요.');
      return;
    }

    sendToNative('showInterstitialAd', {});

    setValue('talks', [
      ...talks,
      {
        author: 'USER',
        message: questionValue,
      },
    ]);
    send({
      activityId: id,
      data: {
        question: questionValue,
      },
    });
    pop();
  };

  useEffect(() => {
    setValue('question', '로또번호 추천 해줘');
  }, []);

  return (
    <BottomSheet borderRadius="1.25rem" backgroundColor="#343541">
      <Wrapper>
        <Spacing height={10} />
        <Text>AI에게 로또 번호를 물어보세요</Text>
        <Spacing height={5} />
        <SubText>
          현재 직접 질문 기능은 테스트 중으로, 정상적인 번호 추천이 어려울 수도 있음을 미리
          말씀드립니다.
        </SubText>
        <Spacing height={20} />
        <Input
          maxLength={20}
          type="text"
          placeholder="예시: 로또번호 추천 해줘"
          onChange={(e) => {
            setValue('question', e.target.value);
          }}
          value={watch('question') || ''}
        />
        <Spacing height={5} />
        <MaxLengthWrapper textLength={questionValue.length}>
          {questionValue.length}/20
        </MaxLengthWrapper>
        <Spacing height={20} />
        <Button onClick={submitHandler}>확인</Button>
      </Wrapper>
    </BottomSheet>
  );
};

export default AskQuestionBottomSheet;

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
  font-size: 13px;
  padding: 5px 0 0 0;
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

  &::placeholder {
    font-size: 15px;
  }
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

const MaxLengthWrapper = styled.div<{ textLength: number }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => (props.textLength > 20 ? 'red' : 'white')};
  font-size: 13px;
`;
