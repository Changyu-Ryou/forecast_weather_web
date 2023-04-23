import styled from '@emotion/styled';
import React from 'react';
import useFormContextHook from '../../../hooks/useFormContextHook';
import { TypeAnimation } from 'react-type-animation';
import { formatDate } from '../../../utils/dayUtil';
interface Props {
  message: string;
  isAI: boolean;
  idx: number;
  isLastMessage: boolean;
  scrollToBottom: () => void;
  createdAt?: Date;
}

const MessageContents = ({
  isAI,
  createdAt,
  message,
  idx,
  isLastMessage,
  scrollToBottom,
}: Props) => {
  const { watch, setValue } = useFormContextHook();
  const typingValue = watch('typing');
  const isWriting = typingValue && isLastMessage;

  const renderResult = (message: string) => {
    const numbers = extractNumbersFromText(message);
    if (numbers) {
      const split = splitNumbersIntoText(message);
      return (
        <>
          {split[0]}
          <NumberWrapper>
            {numbers.map((number, idx) => (
              <NumberCircle key={idx} color={numberColorSwitch(number)}>
                {number}
              </NumberCircle>
            ))}
          </NumberWrapper>
          {split[1]}
          {createdAt && <CreatedAt>{formatDate(new Date(createdAt))}</CreatedAt>}
        </>
      );
    } else {
      return message;
    }
  };

  return (
    <MessageWrapper isAI={isAI}>
      {isWriting ? (
        <TypeAnimation
          cursor={false}
          sequence={[
            message,
            () => {
              setValue('typing', false);
              scrollToBottom();
            },
          ]}
        />
      ) : (
        renderResult(message)
      )}
    </MessageWrapper>
  );
};

export default MessageContents;

// 로또 공 색상
const numberColorSwitch = (number: number) => {
  let color = '';
  if (number <= 10) {
    color = '#fbc400';
  } else if (number <= 20) {
    color = '#60bbe3';
  } else if (number <= 30) {
    color = '#f86e6e'; // 노란색
  } else if (number <= 40) {
    color = '#a7a7a7'; // 연두색
  } else {
    color = '#b0d840'; // 초록색
  }
  return color;
};

// text내 [ ] 안에 있는 숫자 목록 파싱
function extractNumbersFromText(text: string) {
  const regex = /\[(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+)\]/;
  const matches = regex.exec(text);

  if (matches) {
    const numbers = matches.slice(1).map(Number);
    return numbers;
  } else {
    return null;
  }
}

// [] 를 기준으로 text를 split 후 arr로 리턴 (예시 : 오늘 행운의 번호는 [1,23,4,5,6,7] 입니다.)
function splitNumbersIntoText(text: string) {
  return text.split(/\[.*?\]/g);
}

const MessageWrapper = styled.div<{ isAI: boolean }>`
  width: 100%;
  height: auto;
  color: #d1d5db;
  line-height: 28px;

  font-size: ${({ isAI }) => (isAI ? '0.9rem' : '0.8rem')};
  font-weight: ${({ isAI }) => (isAI ? '600' : '300')};

  white-space: pre-wrap;
`;

const NumberWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
`;

const NumberCircle = styled.span<{ color: string }>`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 15px;

  text-shadow: 1px 1px 1px gray;
`;

const CreatedAt = styled.span`
  font-size: 0.8rem;
  color: #a7a7a7;
  margin-left: 10px;
`;
