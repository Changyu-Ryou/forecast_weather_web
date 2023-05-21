import styled from '@emotion/styled';
import React from 'react';
import useFormContextHook from '../../../../hooks/useFormContextHook';
import Shrines from '../../constants/Shrines';

const VisitedCounter = () => {
  const { setValue, watch } = useFormContextHook();
  const visitedValue: string[] = watch('visited');
  const totalCount = Shrines?.length;
  const visitedCount = visitedValue?.length ?? 0;
  return (
    <Wrapper>
      {visitedCount}/{totalCount}
    </Wrapper>
  );
};

export default VisitedCounter;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 7px;
  z-index: 9990;
  right: auto;
  left: auto;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
