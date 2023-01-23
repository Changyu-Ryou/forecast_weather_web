import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Spacing } from '../../common/Spacing';
import { CARDS } from './CardsBrand';
import { GLOBAL_PAYMENTS } from './GlobalPaymentsBrand';

function Result(): ReactElement {
  const { watch } = useFormContext();
  const amountValue = watch('amount');
  const globalPaymentsValue = watch('globalPayments');
  const globalPaymentsFeeValue = watch('globalPaymentsFee');
  const dollarValue = watch('dollar');

  const cardsValue = watch('cards');
  const cardsFeeValue = watch('cardsFee');

  const globalPaymentsItem = GLOBAL_PAYMENTS.find((item) => item.id === globalPaymentsValue);
  const cardsItem = CARDS.find((item) => item.id === cardsValue);

  const globalPaymentsFee = globalPaymentsFeeValue ?? globalPaymentsItem?.fee;
  const cardsFee = cardsFeeValue ?? cardsItem?.fee;

  const calcResult = () => {
    const amountPayInDollar =
      (Number(amountValue) / 100) * (Number(globalPaymentsFee) + 100) * Number(dollarValue);
    const amountServiceFee = (Number(amountValue) / 100) * cardsFee * Number(dollarValue);
    return amountPayInDollar + amountServiceFee;
  };
  return (
    <Wrapper>
      <Header>
        <DotLine />
        <Title>예상 청구금액</Title>
        <DotLine />
      </Header>
      <ContentsWrapper>
        <Spacing />
        <SubTitle>해외 이용금액</SubTitle>
        <Item>
          <Name>거래미화금액</Name>
          <SmallDotLine />
          <Name>$ {Number(amountValue).toLocaleString()}</Name>
        </Item>
        <Item>
          <Name>국제브랜드 수수료</Name>
          <SmallDotLine />
          <Name>{globalPaymentsFee ? globalPaymentsFee + '%' : '(비어있음)'}</Name>
        </Item>
        <Item>
          <Name>전신환매도율</Name>
          <SmallDotLine />
          <Name>₩ {Number(dollarValue).toLocaleString()}</Name>
        </Item>
        <Spacing />
        <SubTitle>해외 서비스 수수료</SubTitle>
        <Item>
          <Name>거래미화금액</Name>
          <SmallDotLine />
          <Name>$ {Number(amountValue).toLocaleString()}</Name>
        </Item>
        <Item>
          <Name>카드사 거래 수수료</Name>
          <SmallDotLine />
          <Name>{cardsFee ? cardsFee + '%' : '(비어있음)'}</Name>
        </Item>
        <Item>
          <Name>전신환매도율</Name>
          <SmallDotLine />
          <Name>₩ {Number(dollarValue).toLocaleString()}</Name>
        </Item>
      </ContentsWrapper>
      <Spacing height={20} />
      <ResultWrapper>
        <SmallName>예상 한화 금액</SmallName>
        <BigValue>{calcResult().toLocaleString()}원</BigValue>
      </ResultWrapper>
    </Wrapper>
  );
}

export default Result;

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 13px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  flex-shrink: 0;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #7d8186;
  flex-shrink: 0;
`;

const DotLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 2px dashed #7d8186;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  gap: 1rem;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #7d8186;
  flex-shrink: 0;
`;

const SmallName = styled(Name)`
  font-size: 11px;
  font-weight: 800;
`;

const SmallDotLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px dotted #7d8186;
`;

const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const BigValue = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: #636567;
  flex-shrink: 0;
`;
