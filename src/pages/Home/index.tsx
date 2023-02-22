import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MainContents from '../../components/Home/MainContents';
import NavigationBar from '../../components/Home/NavigationBar';
import { storage } from '../../hooks/useStorage';

function Home(): ReactElement {
  const { get: amountValue } = storage('amount');
  const { get: globalPaymentsValue } = storage('globalPayments');
  const { get: globalPaymentsFeeValue } = storage('globalPaymentsFee');
  const { get: cardsValue } = storage('cards');
  const { get: cardsFeeValue } = storage('cardsFee');
  const { get: dollarValue } = storage('dollar');

  const formMathods = useForm({
    defaultValues: {
      amount: amountValue() ?? 10,
      dollar: dollarValue() ?? 1200,
      globalPayments: globalPaymentsValue() ?? undefined,
      globalPaymentsFee: globalPaymentsFeeValue() ?? undefined,
      cards: cardsValue() ?? undefined,
      cardsFee: cardsFeeValue() ?? undefined,
      openModal: false,
    },
  });

  return (
    <Wrapper>
      <FormProvider {...formMathods}>
        <NavigationBar />
        <MainContents />
      </FormProvider>
    </Wrapper>
  );
}

export type TabHandlerProps = {
  tab: number;
  setTab: (tab: number) => void;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;
`;

export default Home;
