import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Button = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 20px;
  gap: 8px;

  width: 100%;

  background: #3c4fff;
  border-radius: 12px;

  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 135%;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        background: #f0f3f6;
        color: #cccccd;
      `;
    }
  }}
`;
