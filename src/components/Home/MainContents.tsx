import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { Spacing } from '../common/Spacing';
import CardsBrand from './components/CardsBrand';
import GlobalPaymentsBrand from './components/GlobalPaymentsBrand';
import InputPriceSection from './components/InputPriceSection';
import Result from './components/Result';
import UsDollar from './components/UsDollar';

function MainContents(): ReactElement {
  /**
    * 원화 청구금액 = 해외 이용금액(원화) + 해외서비스수수료
    * 해외 이용금액(원화) = 미화환산금액 X 접수일자 1회차 전신환매도율(신한은행 송금 보낼 때 환율)
    * 미화환산금액은 해외 현지통화 이용금액을 국제브랜드사가 정한 환율에 의해 미화로 환산된 금액입니다.
    * 미화환산금액에는 국제브랜드수수료가 포함되어 있습니다.
      (국제브랜드수수료 : 비자/마스터/유어스 : 1%, 아멕스/S& : 1.4%, JCB/UPI : 없음)
      
    * 해외서비스수수료=거래미화금액(국제브랜드수수료가 포함안된 달러금액)X신용0.18%/체크0.2%X전신환매도율
   */
  return (
    <View>
      <InputPriceSection />
      <GlobalPaymentsBrand />
      <CardsBrand />
      <UsDollar />
      <Spacing />
      <Result />
    </View>
  );
}

const View = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: auto;

  background-color: #f5f5f5;
`;

export default MainContents;
