import styled, { keyframes } from 'styled-components';

import * as I from './SpinnerCircular.interface';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div<I.SpinnerCircularProps>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid
    ${({ $borderColor: borderColor }) =>
      borderColor ? borderColor : '#ffffff'};
  border-top: 0.4rem solid
    ${({ borderTopColor }) => (borderTopColor ? borderTopColor : 'transparent')};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
