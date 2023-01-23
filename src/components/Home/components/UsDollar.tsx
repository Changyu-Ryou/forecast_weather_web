import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Title } from './InputPriceSection';
import { NumericFormat } from 'react-number-format';

function UsDollar(): ReactElement {
  const { control, setValue } = useFormContext();

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
              }}
              defaultValue="1200"
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
  font-weight: 800;
  color: #5975f9;
`;

const DollarInput2 = styled.input`
  width: auto;
  min-width: 20px;
  max-width: 100px;
  font-size: 32px;
  font-weight: 800;
  color: #5975f9;
  margin-right: 5px;
  padding: 0 10px;
  line-height: 28px;
  border: none;
  background-color: transparent;
  text-align: right;
`;

export default UsDollar;
