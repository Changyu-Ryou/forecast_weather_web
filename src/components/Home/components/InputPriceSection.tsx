import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { useStorage } from '../../../hooks/useStorage';

function InputPriceSection(): ReactElement {
  const { watch, control, setValue } = useFormContext();
  const [, setAmount] = useStorage('amount', undefined);
  const amountValue = watch('amount');

  return (
    <Wrapper>
      <Title>미화 결제 금액</Title>
      <InputWrapper>
        $
        <Controller
          render={(props) => (
            <NumericFormat
              hasValue={false}
              customInput={AmountInput}
              thousandSeparator={true}
              onValueChange={(v) => {
                setValue('amount', v.value);
                setAmount(v.value);
              }}
              value={amountValue}
              {...props}
            />
          )}
          name="amount"
          control={control}
        />
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 16px 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  color: #7d8186;
  font-size: 15px;
  line-height: 18px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  color: #5975f9;
  font-size: 32px;
  font-weight: 800;
  padding-top: 10px;
`;

const AmountInput = styled.input<{ hasValue: boolean }>`
  width: 100%;
  border: none;
  color: #5975f9;
  font-size: 45px;
  font-weight: 800;
  margin-left: 10px;

  background: transparent;

  border-bottom: ${({ hasValue }) => (hasValue ? 'none' : '1px solid #5975f9')};
`;

export default InputPriceSection;
