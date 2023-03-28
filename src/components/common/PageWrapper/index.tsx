import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

function PageWrapper({ children }: { children: ReactElement }): ReactElement {
  const { watch } = useFormContext();
  const fontFamily = watch('fontFamily');
  return <Wrapper fontFamily={fontFamily}>{children}</Wrapper>;
}

export default PageWrapper;

const Wrapper = styled.div<{ fontFamily: string }>`
  font-family: ${({ fontFamily }) => fontFamily};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;
