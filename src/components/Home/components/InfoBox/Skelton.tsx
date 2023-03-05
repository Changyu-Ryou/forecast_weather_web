import styled from '@emotion/styled';

import { ReactElement } from 'react';
import { Spacing } from '../../../common/Spacing';

function Skelton(): ReactElement {
  return (
    <SkeletonWrapper>
      <Spacing height={10} />
      <SkeletonBox
        style={{
          width: '100%',
          height: '150px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
        }}
      />
      <Spacing height={14} />
      <SkeletonBox
        style={{
          width: '50px',
          height: '15px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
        }}
      />
      <Spacing height={5} />
      <SkeletonBox
        style={{
          width: '70%',
          height: '25px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
        }}
      />
      <Spacing height={11} />
      <SkeletonBox
        style={{
          width: '50%',
          height: '19px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
        }}
      />
      <Spacing height={6} />
      <SkeletonBox
        style={{
          width: '50%',
          height: '19px',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px',
        }}
      />
    </SkeletonWrapper>
  );
}

const SkeletonWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
`;

export default Skelton;

const SkeletonBox = styled.div``;
