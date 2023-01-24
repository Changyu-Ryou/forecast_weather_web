import styled from '@emotion/styled';
import { ReactElement, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Title } from './InputPriceSection';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';
import { useStorage } from '../../../hooks/useStorage';

function UsDollar(): ReactElement {
  const { watch, control, setValue } = useFormContext();
  const dollarValue = watch('dollar');
  const [, setDollar] = useStorage('dollar', undefined);

  const getDollar = async () => {
    const dollarRequest = await axios.get(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD'
    );
    const dollarRequestData = dollarRequest.data[0].ttBuyingPrice;
    setValue('dollar', dollarRequestData);
    setDollar(dollarRequestData);
  };

  useEffect(() => {
    getDollar();
  }, []);

  return (
    <Wrapper>
      <Title>전신환매도율(환율)</Title>
      <ValueWrapper>
        <Controller
          render={(props) => (
            <NumericFormat
              customInput={DollarInput2}
              thousandSeparator={true}
              onValueChange={(v) => {
                setValue('dollar', v.value);
                setDollar(v.value);
              }}
              value={dollarValue}
              {...props}
            />
          )}
          name="dollar"
          control={control}
        />
        원
      </ValueWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ValueWrapper = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #5975f9;
`;

const DollarInput2 = styled.input`
  width: auto;
  min-width: 20px;
  max-width: 150px;
  font-size: 32px;
  font-weight: 700;
  color: #5975f9;
  margin-right: 5px;
  padding: 0 10px;
  line-height: 28px;
  border: none;
  background-color: transparent;
  text-align: center;
  border-bottom: 1px solid gray;
`;

export default UsDollar;
