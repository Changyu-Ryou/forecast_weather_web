import styled from '@emotion/styled';

interface Props {
  height?: number;
  background?: string;
}

export const Spacing = styled.div<Props>`
  width: 100%;
  min-height: ${({ height = 16 }) => `${height}px`};
  height: ${({ height = 16 }) => `${height}px`};
  background: ${({ background }) => background || 'transparent'};
`;
