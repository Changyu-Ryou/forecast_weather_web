import styled from '@emotion/styled';
import { ActivityComponentType } from '@stackflow/react';
import MyInfoContents from '../../components/MyInfo';
import { AppScreen } from '../../stackflow/components';

const MyPage: ActivityComponentType = () => {
  return (
    <AppScreen>
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

export default MyPage;
