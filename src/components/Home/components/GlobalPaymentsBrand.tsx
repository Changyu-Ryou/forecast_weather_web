import styled from '@emotion/styled';
import { ReactElement, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import visaIcon from '../../../assets/Icon/visa-icon.svg';
import masterIcon from '../../../assets/Icon/master-card-icon.svg';
import amexIcon from '../../../assets/Icon/american-express-icon.svg';
import jcbIcon from '../../../assets/Icon/jcb-card-icon.svg';
import upi from '../../../assets/Icon/upi-icon.svg';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Title } from './InputPriceSection';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

function GlobalPaymentsBrand(): ReactElement {
  const { register, watch, setValue } = useFormContext();
  const globalPaymentsValue = watch('globalPayments');
  const globalPaymentsFeeValue = watch('globalPaymentsFee');

  const selectedItem = useMemo(() => {
    const result = GLOBAL_PAYMENTS.find((item) => item.id === globalPaymentsValue);
    setValue('globalPaymentsFee', result?.fee ?? 0);
    return result;
  }, [globalPaymentsValue]);

  const onChangeFee = useCallback(
    (value: number, isPlus: boolean) => {
      if (isPlus) value = Math.round((value + 0.1) * 10) / 10;
      if (!isPlus) value = Math.round((value - 0.1) * 10) / 10;
      if (value < 0) value = 0;
      setValue('globalPaymentsFee', value);
    },
    [setValue]
  );

  const CustomInputController = useCallback(() => {
    return (
      <ControllerWrapper>
        <RemoveCircleOutlineOutlinedIcon
          onClick={() => onChangeFee(globalPaymentsFeeValue, false)}
          style={{ fontSize: '18px' }}
        />
        {globalPaymentsFeeValue}%
        <ControlPointOutlinedIcon
          onClick={() => onChangeFee(globalPaymentsFeeValue, true)}
          style={{ fontSize: '18px' }}
        />
      </ControllerWrapper>
    );
  }, [globalPaymentsFeeValue, onChangeFee]);

  const displayText = useMemo(() => {
    if (!selectedItem) return '선택해주세요';
    if (!selectedItem?.displayText) return <CustomInputController />;
    return selectedItem?.displayText;
  }, [CustomInputController, selectedItem]);

  return (
    <Wrapper>
      <Header>
        <Title style={{ flexShrink: 0 }}>국제브랜드사 수수료</Title>
        <DotLine />
        <PaymentsFee>{displayText}</PaymentsFee>
      </Header>
      <PaymentsMethodWrapper>
        {GLOBAL_PAYMENTS.map((item) => {
          return (
            <CardWrapper key={item.id} htmlFor={item.id} checked={globalPaymentsValue === item.id}>
              <CardInput
                type="radio"
                id={item.id}
                value={item.id}
                {...register('globalPayments')}
              />
              {item?.icon && <IconWrapper>{item.icon}</IconWrapper>}
              <p>{item.name}</p>
              <CheckCircleOutlinedIcon
                style={{
                  fontSize: '15px',
                  color: globalPaymentsValue === item.id ? '#E9EDEF' : '#d2d9f8',
                }}
              />
            </CardWrapper>
          );
        })}
      </PaymentsMethodWrapper>
    </Wrapper>
  );
}

const Icon = styled.img<{ size?: number }>`
  min-width: ${({ size = 20 }) => `${size}px`};
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

export const GLOBAL_PAYMENTS = [
  {
    id: 'visa',
    name: '비자',
    displayText: 'VISA(1.1%)',
    fee: '1.1',
    icon: <Icon src={visaIcon} size={30} />,
  },
  {
    id: 'master',
    name: '마스터',
    fee: '1.0',
    displayText: '마스터(1.0%)',
    icon: <Icon src={masterIcon} size={23} />,
  },

  {
    id: 'amex',
    name: '아맥스',
    fee: '1.4',
    displayText: 'AMEX(1.4%)',
    icon: <Icon src={amexIcon} size={1} />,
  },
  {
    id: 'jcb',
    name: 'JCB',
    fee: '0',
    displayText: 'JCB(0%)',
    icon: <Icon src={jcbIcon} size={16} />,
  },
  {
    id: 'upi',
    name: 'UPI',
    fee: '0',
    displayText: 'UPI(0%)',
    icon: <Icon src={upi} size={27} />,
  },
  {
    id: 'custon',
    name: '직접선택',
    fee: '0',
    displayText: undefined,
  },
];

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  overflow: hidden;
  flex-shrink: 0;
`;

const PaymentsMethodWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: visible;
  gap: 10px;
  padding: 16px;
  flex-wrap: nowrap;

  // 스크롤바 없애기
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const CardWrapper = styled.label<{ checked: boolean }>`
  height: 40px;
  max-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  flex-shrink: 0;
  padding: 10px 15px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ checked }) => (checked ? '#5670F7' : '#9faff3')};
  color: ${({ checked }) => (checked ? '#E9EDEF' : '#d2d9f8')};

  p {
    flex-shrink: 0;
  }
`;

const CardInput = styled.input`
  display: none;
`;

const IconWrapper = styled.div``;

const ControllerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export default GlobalPaymentsBrand;
