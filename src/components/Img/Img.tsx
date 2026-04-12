import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  disabled?: boolean;
  imgWidth?: string;
  imgHeight?: string;
}>`
  width: ${({ imgWidth }) => imgWidth || '100%'};
  height: auto;
  max-width: ${({ imgWidth }) => imgWidth || '100%'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: block;

  @media (min-width: 768px) {
    max-width: ${({ imgWidth }) => imgWidth || '80%'};
  }

  @media (min-width: 1200px) {
    max-width: ${({ imgWidth }) => imgWidth || '60%'};
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled,
}) => (
  <StyledImg
    src={src}
    alt={alt}
    imgWidth={width}
    imgHeight={height}
    disabled={disabled}
  />
);
