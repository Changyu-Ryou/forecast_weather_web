import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { TabHandlerProps } from '../../pages/Home';
import HomeTab from './HomeTab';
import MassageTab from './MassageTab';
import MetroTab from './MetroTab';

function MainContents({ tab, setTab }: TabHandlerProps): ReactElement {
  const TempHome = () => {
    return <Title>Tab {tab}</Title>;
  };

  const renderTab = () => {
    switch (tab) {
      // case 0:
      //   return <HomeTab />;
      case 0:
        return <MetroTab />;
      case 1:
        return <MassageTab />;
      default:
        return <TempHome />;
    }
  };
  return <View>{renderTab()}</View>;
}

const View = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 46px;
  color: #454545;
  text-align: center;
`;

export default MainContents;
