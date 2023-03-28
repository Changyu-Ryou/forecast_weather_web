import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { HTMLAttributes, ReactNode } from 'react';
import { useFlow } from '../../stackflow';

interface Props extends HTMLAttributes<HTMLDivElement> {
  message?: string | ReactNode;
}

export const NotFoundView = ({ message }: Props) => {
  const { replace } = useFlow();

  return (
    <Container>
      {typeof message === 'string' ? (
        <Heading dangerouslySetInnerHTML={{ __html: message }} />
      ) : (
        <Heading>
          {message || (
            <>
              앗! 죄송해요.
              <br />
              해당 페이지로 접근이 불가능해요.
            </>
          )}
        </Heading>
      )}
      <ButtonWrapper>
        <Button
          onClick={() => {
            replace('HomePage', {});
          }}
          style={{ width: '100%' }}
        >
          홈으로 이동
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            replace('OnBoardPage', {});
          }}
          style={{ width: '100%' }}
        >
          온보딩으로 이동
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px 0 16px;
  max-height: 100%;
  overflow: auto;
`;

const Heading = styled.h1`
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: -0.02em;
`;

const ButtonWrapper = styled.div`
  width: 160px;
  margin-top: 1rem;
`;
