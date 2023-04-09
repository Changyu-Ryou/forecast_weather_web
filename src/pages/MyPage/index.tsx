import styled from '@emotion/styled';
import { ActivityComponentType, useActivity } from '@stackflow/react';
import MyInfoContents from '../../components/MyInfo';
import { useFlow } from '../../stackflow';
import { AppScreen } from '../../stackflow/components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const MyPage: ActivityComponentType = () => {
  const { pop, replace } = useFlow();
  const { isTop } = useActivity();
  return (
    <AppScreen
      appBar={{
        title: <AppBarTitle>마이페이지</AppBarTitle>,
        closeButton: {
          renderIcon: () => <ArrowBackIosNewIcon sx={{ fontSize: '24px', color: 'black' }} />,
          onClick: () => {
            if (isTop) {
              replace('HomePage', {});
              return;
            }
            pop();
          },
        },
      }}
    >
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
