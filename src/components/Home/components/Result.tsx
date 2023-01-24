import styled from '@emotion/styled';
import { ReactElement, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Spacing } from '../../common/Spacing';
import { CARDS } from './CardsBrand';
import { GLOBAL_PAYMENTS } from './GlobalPaymentsBrand';

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
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

  const [open, setOpen] = useState(false);
  return (
    <ViewWrapper>
      {open && <Dimmer onClick={() => setOpen(false)} />}
      <RelativeWrapper open={open}>
        <OpenButton onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <KeyboardArrowDownOutlinedIcon style={{ fontSize: '20px' }} />
          ) : (
            <KeyboardArrowUpOutlinedIcon style={{ fontSize: '20px' }} />
          )}
        </OpenButton>
        <Wrapper open={open}>
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
        </Wrapper>
      </RelativeWrapper>
      <NavWrapper>
        <ResultWrapper>
          <SmallName>예상 한화 금액</SmallName>
          <BigValue>{calcResult().toLocaleString()}원</BigValue>
        </ResultWrapper>
      </NavWrapper>
    </ViewWrapper>
  );
}

export default Result;

const ViewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #f5f5f5;
  position: relative;
  overflow: visible;
  height: 56px;
  max-height: 56px;
`;

const Dimmer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
`;

const RelativeWrapper = styled.div<{ open: boolean }>`
  width: 100%;
  height: auto;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  transform: ${({ open }) => (open ? 'translate(0px, 0%)' : 'translate(0px, calc(100% - 18px))')};
  -webkit-transition: opacity 0s, transform 0.4s;
  transition: opacity 0s, transform 0.4s;
`;

const OpenButton = styled.div`
  width: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px;
  background-color: white;
  z-index: 2;
`;

const Wrapper = styled.div<{ open: boolean }>`
  width: 100%;
  z-index: 1;
  padding: 16px;
  background-color: white;
  opacity: ${({ open }) => (open ? 1 : 0)};
  height: ${({ open }) => (open ? 'auto' : 0)};
  /* transform: ${({ open }) => (open ? 'translate(0px, -100%)' : 'translate(0px, 0%)')}; */
  -webkit-transition: opacity 0.4s;
  transition: opacity 0.4s;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 13px;
  overflow: hidden;
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

const NavWrapper = styled.div`
  width: 100%;
  padding: 5px 16px 10px 16px;
  background-color: white;
  z-index: 3;
`;
