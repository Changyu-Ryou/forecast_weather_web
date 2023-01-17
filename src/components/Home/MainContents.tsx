import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { TabHandlerProps } from '../../pages/Home';
import GlobalPaymentsBrand from './components/GlobalPaymentsBrand';
import InputPriceSection from './components/InputPriceSection';
import NavigationBar from './NavigationBar';

function MainContents(): ReactElement {
  return (
    <View>
      <InputPriceSection />
      <GlobalPaymentsBrand />
    </View>
  );
}

const View = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;

  background-color: #eff2f1;
`;

export default MainContents;
