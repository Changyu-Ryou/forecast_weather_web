import styled from '@emotion/styled';
import { ActivityComponentType } from '@stackflow/react';

import OnBoardGoal from '../../components/OnBoarding/OnBoardGoal';

const OnBoardGoalPage: ActivityComponentType = () => {
  return (
    <Wrapper>
      <OnBoardGoal />
    </Wrapper>
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

export default OnBoardGoalPage;
