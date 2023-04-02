import styled from '@emotion/styled';
import { ActivityComponentType } from '@stackflow/react';
import MyInfoContents from '../../components/MyInfo';
import { AppScreen } from '../../stackflow/components';

const MyPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: <AppBarTitle>마이페이지</AppBarTitle> }}>
      <Wrapper>
        <MyInfoContents />
      </Wrapper>
    </AppScreen>
  );
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

const AppBarTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  letter-spacing: -0.01em;
  color: #1f2023;
`;

export default MyPage;
