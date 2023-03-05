import styled from '@emotion/styled';

interface Props {
  width?: number;
  height?: number;
  background?: string;
}

export const Spacing = styled.div<Props>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  min-width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height = 16 }) => `${height}px`};
  min-height: ${({ height = 16 }) => `${height}px`};
  background: ${({ background }) => background || 'transparent'};
`;
