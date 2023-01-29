import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

function NoticeInfo(): ReactElement {
  const { setValue } = useFormContext();
  return (
    <Wrapper>
      <p>위 계산 결과는 실제결과와 다를 수 있습니다.</p>
      <p id="more-button" onClick={() => setValue('openModal', true)}>
        더 알아보기
      </p>
    </Wrapper>
  );
}

export default NoticeInfo;

const Wrapper = styled.div`
  width: 100%;
  font-size: 12px;
  padding: 16px;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  #more-button {
    color: #5975f9;
    text-decoration: underline;
    font-weight: 700;
  }
`;
