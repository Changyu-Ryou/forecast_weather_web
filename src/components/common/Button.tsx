import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Button = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  gap: 8px;

  width: 100%;

  background: #1f2023;
  border-radius: 10px;

  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 135%;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        background: #f3f3f4;
        color: #cacccf;
      `;
    }
  }}
`;
