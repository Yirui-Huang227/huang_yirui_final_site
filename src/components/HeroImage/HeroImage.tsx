import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Container = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Title = styled.h1`
  position: absolute;
  top: 20%;
  left: 5%;
  color: white;
  font-size: 2rem;
  margin: 0;

  @media (min-width: 768px) {
    top: 18%;
    left: 8%;
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    top: 15%;
    left: 10%;
    font-size: 3rem;
  }
`;

const Subtitle = styled.h3`
  position: absolute;
  top: 30%;
  left: 5%;
  color: white;
  font-size: 1.2rem;
  margin: 0;

  @media (min-width: 768px) {
    top: 28%;
    left: 8%;
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    top: 25%;
    left: 10%;
    font-size: 1.8rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  disabled,
}) => (
  <Container disabled={disabled}>
    <StyledImg src={src} alt={alt} />
    {title && <Title>{title}</Title>}
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Container>
);
