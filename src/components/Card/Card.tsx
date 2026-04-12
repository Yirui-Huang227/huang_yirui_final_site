import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean }>`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#ffffff')};
  color: ${({ disabled }) => (disabled ? '#cccccc' : '#000000')};
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1.25rem;
  }

  @media (min-width: 1200px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;

const CardContent = styled.p`
  margin: 0;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const Card: React.FC<CardProps> = ({ title, content, disabled }) => {
  return (
    <StyledCard disabled={disabled} data-testid="card-container">
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </StyledCard>
  );
};
