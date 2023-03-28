import styled from '@emotion/styled';
import { ActivityComponentType, useActivity } from '@stackflow/react';

import MainContents from '../../components/Home/MainContents';
import { AppScreen } from '../../stackflow/components';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Fade from '@mui/material/Fade';
import { CustomTooltip } from '../../components/common/CustomToolTip';
import { useFlow } from '../../stackflow';
import { useState } from 'react';

const HomePage: ActivityComponentType = () => {
  const { push } = useFlow();
  const { isTop } = useActivity();
  const [showTooltip, setShowTooltip] = useState(true);

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
          return (
            <CustomTooltip
              TransitionProps={{ timeout: 600 }}
              placement="bottom-start"
              title={
                <span
                  onClick={() => {
                    setShowTooltip(false);
                  }}
                >
                  여기서 확인해라
                </span>
              }
              open={showTooltip && isTop}
              arrow
            >
              <MyIconWrapper
                onClick={() => {
                  setShowTooltip(false);
                  push('MyPage', {});
                }}
              >
                <PersonOutlineIcon sx={{ fontSize: '30px' }} />
              </MyIconWrapper>
            </CustomTooltip>
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
