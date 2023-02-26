import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MainContents from '../../components/Home/MainContents';
import NavigationBar from '../../components/Home/NavigationBar';

function Home(): ReactElement {
  const formMathods = useForm({});

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
