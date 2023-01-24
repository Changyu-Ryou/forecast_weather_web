import styled from '@emotion/styled';
import { ReactElement, useCallback, useMemo, useRef, useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Title } from './InputPriceSection';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { parsingBankUrl } from '../constants/parsingUrl';
import axios from 'axios';
import { useStorage } from '../../../hooks/useStorage';

// https://namu.wiki/w/%EC%8B%A0%EC%9A%A9%EC%B9%B4%EB%93%9C/%ED%95%B4%EC%99%B8%EC%82%AC%EC%9A%A9#s-4.1
function CardsBrand(): ReactElement {
  const { register, watch, setValue } = useFormContext();
  const cardsValue = watch('cards');

  const [, setCards] = useStorage('cards', undefined);
  const [cardsFeeStorageValue, setCardsFee] = useStorage('cardsFee', undefined);

  const selectedItem = useMemo(() => {
    const result = CARDS.find((item) => item.id === cardsValue);
    setCards(cardsValue);

    setValue('cardsFee', result?.fee ?? 0);

    if (result?.id === 'custom') {
      setCardsFee(cardsFeeStorageValue ?? 0);
    }

    return result;
  }, [cardsValue, setValue]);

  const onChangeFee = useCallback(
    (value: number, isPlus: boolean) => {
      if (isPlus) value = Math.round((value + 0.1) * 10) / 10;
      if (!isPlus) value = Math.round((value - 0.1) * 10) / 10;
      if (value < 0) value = 0;
      setValue('cardsFee', value);
      setCardsFee(value);
    },
    [setValue]
  );

  const openBankPage = () => {
    const parsingUrl = parsingBankUrl.find((item) => item.id === selectedItem?.transaction);
    if (parsingUrl) {
      window.open(parsingUrl.url, '_blank', 'noopener,noreferrer');
    }
  };

  const CustomInputController = useCallback(() => {
    return (
      <ControllerWrapper>
        <RemoveCircleOutlineOutlinedIcon
          onClick={() => onChangeFee(cardsFeeStorageValue, false)}
          style={{ fontSize: '18px' }}
        />
        {cardsFeeStorageValue}%
        <ControlPointOutlinedIcon
          onClick={() => onChangeFee(cardsFeeStorageValue, true)}
          style={{ fontSize: '18px' }}
        />
      </ControllerWrapper>
    );
  }, [cardsFeeStorageValue, onChangeFee]);

  const displayText = useMemo(() => {
    if (!selectedItem) return '선택해주세요';
    if (!selectedItem?.displayText) return <CustomInputController />;
    return selectedItem?.displayText;
  }, [CustomInputController, selectedItem]);

  return (
    <Wrapper>
      <Header>
        <Title style={{ flexShrink: 0 }}>결제 카드사 수수료</Title>
        <DotLine />
        <PaymentsFee>{displayText}</PaymentsFee>
      </Header>
      <SelectorWrapper id="cards-select" {...register('cards')}>
        <option value="none" disabled selected={true}>
          결제 카드사를 선택해주세요
        </option>
        {CARDS.map((card) => {
          return (
            <option key={card.id} value={card.id}>
              {card.name}
            </option>
          );
        })}
      </SelectorWrapper>
      {selectedItem?.transaction ? (
        <InfoWrapper>
          <b>{selectedItem?.name} 카드사</b>는 <b>{selectedItem?.transaction}</b>의 최초고시
          매매기준율을 기준으로 환율을 계산합니다.
          <Button onClick={openBankPage}>확인하러가기</Button>
        </InfoWrapper>
      ) : (
        <InfoWrapper>
          <b>해당 카드사</b>는 직접 최초고시 매매기준율 기준 환율을 확인해주셔야해요.
        </InfoWrapper>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  overflow: hidden;
  flex-shrink: 0;
`;
const Header = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  gap: 1rem;
`;

const DotLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px dotted #d2d9f8;
`;

const PaymentsFee = styled.div`
  width: auto;
  flex-shrink: 0;
  font-size: 12px;
  color: #7d8186;
`;

export const CARDS = [
  {
    id: 'custom',
    name: '직접입력',
    displayText: undefined,
    onceFee: '0.5',
  },
  {
    id: 'kb',
    name: 'KB국민카드',
    displayText: 'KB국민카드(0.25%)',
    fee: '0.25',
    transaction: 'KB국민은행',
    memo: 'https://card.kbcard.com/CMN/DVIEW/HOBMCXPRIZZC0003?realQuery=%EC%B2%AD%EA%B5%AC%EA%B8%88%EC%95%A1&collection=ALL&sidoText=&sidoCode=&gugunText=&gugunCode=&dongCode=&dongText=&cate1Text=&cate2Text=&cate1Code=&cate2Code=&sortStr=&startCount=0&query=%ED%95%B4%EC%99%B8+%EC%B2%AD%EA%B5%AC%EA%B8%88%EC%95%A1',
  },
  {
    id: '삼성',
    name: '삼성카드',
    displayText: '삼성카드(0.2%)',
    fee: '0.2',
    transaction: '우리은행',
    memo: 'https://www.samsungcard.com/personal/services/UHPPAS0500M1.jsp?click=gnb_myinfo_information_abroad',
  },

  {
    id: '신한',
    name: '신한카드',
    displayText: '신한카드(0.18%)',
    fee: '0.18',
    transaction: '신한은행',
    memo: 'https://www.shinhancard.com/conts/person/card_use_guide/abroad_use_guide/globalUse05.jsp',
  },
  {
    id: '우리',
    name: '우리카드',
    displayText: '우리카드(0.3%)',
    fee: '0.3',
    transaction: '우리은행',
    memo: 'https://pc.wooricard.com/dcpc/yh1/ugd/ugd02/frguseadv/H1UGD202S46.do',
  },
  {
    id: '하나',
    name: '하나카드',
    displayText: '하나카드(0.2%)',
    fee: '0.2',
    transaction: '하나은행',
  },
  {
    id: '롯데',
    name: '롯데카드',
    displayText: '롯데카드(0.2%)',
    fee: '0.2',
    transaction: '우리은행',
  },
  {
    id: '현대',
    name: '현대카드',
    displayText: '현대카드(0.18%)',
    fee: '0.18',
    transaction: '신한은행',
  },
  {
    id: 'NH',
    name: 'NH농협카드',
    displayText: 'NH농협카드(0.25%)',
    fee: '0.25',
    transaction: '농협은행',
  },
  {
    id: 'IBK',
    name: 'IBK기업은행',
    displayText: 'IBK기업은행(0.18%)',
    fee: '0.18',
    transaction: 'IBK기업은행',
  },
  {
    id: '씨티',
    name: '한국씨티은행',
    displayText: '한국씨티은행(0.25%)',
    fee: '0.25',
  },
  {
    id: '스탠다드차티드',
    name: '스탠다드차티드은행',
    displayText: '스탠다드차티드(0.35%)',
    fee: '0.35',
  },
  {
    id: '수협',
    name: '수협은행',
    displayText: '수협은행(0.3%)',
    fee: '0.3',
  },
];

const SelectorWrapper = styled.select`
  padding: 15px 15px;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 600;
  margin: 16px;
  color: #7d8186;
  background-color: #f8fafb;
  border-color: #e5e8e9;

  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
`;

const ControllerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const InfoWrapper = styled.div`
  width: 100%;

  padding: 5px 20px 30px 20px;
  font-size: 13px;
  line-height: 16px;
  div,
  b {
    display: inline-block;
    flex: 1;
    white-space: nowrap;
  }
`;

const Button = styled.div`
  font-weight: 800;
  padding: 0 3px;
  text-decoration: underline;
`;
export default CardsBrand;
