import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ color?: string; disabled?: boolean }>`
  color: ${({ disabled, color }) => (disabled ? '#cccccc' : color || '#000')};
  font-size: 1rem; /* 16px */

  @media (min-width: 768px) {
    font-size: 1.1rem; /* 17.6px */
  }

  @media (min-width: 1200px) {
    font-size: 1.25rem; /* 20px */
  }
`;

export const Text: React.FC<TextProps> = ({ content, color, disabled }) => (
  <StyledText color={color} disabled={disabled}>
    {content}
  </StyledText>
);
