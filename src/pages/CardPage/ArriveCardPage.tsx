import styled from '@emotion/styled';
import { ActivityComponentType, useActivity } from '@stackflow/react';
import ArriveCard from '../../components/CardShow/ArriveCard';
import CloseIcon from '@mui/icons-material/Close';
import { AppScreen } from '../../stackflow/components';
import { useFlow } from '../../stackflow';

const ArriveCardPage: ActivityComponentType = () => {
  const { pop, replace } = useFlow();
  const { isRoot } = useActivity();
  return (
    <AppScreen
      appBar={{
        backButton: undefined,
        closeButton: undefined,
        appendRight: () => (
          <CloseIcon
            onClick={() => {
              if (isRoot) {
                replace('HomePage', {});
                return;
              }
              pop();
            }}
          />
        ),
      }}
    >
      <Wrapper>
        <ArriveCard />
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

export default ArriveCardPage;
