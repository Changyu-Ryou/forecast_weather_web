import styled from '@emotion/styled';
import { ActivityComponentType, useActivity } from '@stackflow/react';

import MainContents from '../../components/Home/MainContents';
import { AppScreen } from '../../stackflow/components';

import { CustomTooltip } from '../../components/common/CustomToolTip';
import { useFlow } from '../../stackflow';
import { ReactElement } from 'react';
import useFormContextHook from '../../hooks/useFormContextHook';
import MyIcon from '../../assets/Icon/iconoir_user.svg';

const HomePage: ActivityComponentType = () => {
  const { push } = useFlow();
  const { isTop } = useActivity();

  const { watch, setValue } = useFormContextHook();
  const clickedLike = watch('clickedLike');
  const clikedMyPageTooltip = watch('clickedMyPageTooltip');

  const showTooltip = clickedLike && !clikedMyPageTooltip && isTop;

  const renderMyPage = (children: ReactElement) => {
    if (showTooltip) {
      return (
        <CustomTooltip
          TransitionProps={{ timeout: 600 }}
          placement="bottom-start"
          title={
            <span
              onClick={() => {
                setValue('clickedMyPageTooltip', true);
              }}
            >
              저장한 한마디는 여기서 볼 수 있어요
            </span>
          }
          open={showTooltip}
          arrow
        >
          {children}
        </CustomTooltip>
      );
    }
    return children;
  };

  return (
    <AppScreen
      appBar={{
        backButton: {
          renderIcon: () => {
            return <></>;
          },
        },
        closeButton: {
          renderIcon: () => {
            return <></>;
          },
        },

        appendRight: () => {
          return renderMyPage(
            <MyIconWrapper
              onClick={() => {
                setValue('clickedMyPageTooltip', true);
                push('MyPage', {});
              }}
            >
              <img src={MyIcon} />
              {/* <MyIcon /> */}
              {/* <PersonOutlineIcon sx={{ fontSize: '30px' }} /> */}
            </MyIconWrapper>
          );
        },
      }}
    >
      <Wrapper>
        <MainContents />
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

const MyIconWrapper = styled.div`
  margin-right: 8px;
`;

export default HomePage;
