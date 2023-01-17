import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import visaIcon from '../../../assets/Icon/visa-icon.svg';
import masterIcon from '../../../assets/Icon/master-card-icon.svg';
import amexIcon from '../../../assets/Icon/american-express-icon.svg';
import jcbIcon from '../../../assets/Icon/jcb-card-icon.svg';
import upi from '../../../assets/Icon/upi-icon.svg';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Title } from './InputPriceSection';

function GlobalPaymentsBrand(): ReactElement {
  const { register, watch } = useForm();
  const globalPaymentsValue = watch('globalPayments');

  return (
    <Wrapper>
      <Title style={{ padding: '0 16px' }}>국제브랜드사</Title>
      <PaymentsMethodWrapper>
        {GLOBAL_PAYMENTS.map((item) => {
          return (
            <CardWrapper
              key={item.id}
              htmlFor={item.id}
              checked={globalPaymentsValue === item.id}
              onClick={(e) => {
                e.currentTarget;
              }}
            >
              <CardInput
                type="radio"
                id={item.id}
                value={item.id}
                {...register('globalPayments')}
              />
              <IconWrapper>{item?.icon}</IconWrapper>
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

const GLOBAL_PAYMENTS = [
  {
    id: 'visa',
    name: '비자',
    icon: <Icon src={visaIcon} size={30} />,
  },
  {
    id: 'master',
    name: '마스터',
    icon: <Icon src={masterIcon} size={23} />,
  },

  {
    id: 'amex',
    name: '아맥스',
    icon: <Icon src={amexIcon} size={13} />,
  },
  {
    id: 'jcb',
    name: 'JCB',
    icon: <Icon src={jcbIcon} size={16} />,
  },
  {
    id: 'upi',
    name: 'UPI',
    icon: <Icon src={upi} size={27} />,
  },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 0 0 0;
`;

const PaymentsMethodWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  flex-shrink: 0;
  padding: 10px 20px;
  border-radius: 10px;
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

export default GlobalPaymentsBrand;
