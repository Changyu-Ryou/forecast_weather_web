import styled from '@emotion/styled';
import React, { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Title({ children, ...rest }: Props): ReactElement {
  return <TitleWrapper {...rest}>{children}</TitleWrapper>;
}

const TitleWrapper = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #2e3138;
`;

export const SubTitle = styled(Title)`
  width: 100%;
  font-size: 18px;
  font-weight: 300;
`;

export default Title;
