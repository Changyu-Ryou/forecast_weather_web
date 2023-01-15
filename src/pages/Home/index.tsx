import styled from '@emotion/styled';
import { ReactElement, useState } from 'react';
import BottomNav from '../../components/Home/BottomNav';
import MainContents from '../../components/Home/MainContents';
import NavigationBar from '../../components/Home/NavigationBar';

function Home(): ReactElement {
  const [tab, setTab] = useState(0);
  return (
    <Wrapper>
      {/* <NavigationBar /> */}
      <MainContents tab={tab} setTab={setTab} />
      <BottomNav tab={tab} setTab={setTab} />
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
