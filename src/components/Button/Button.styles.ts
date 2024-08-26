import styled from 'styled-components';
import * as I from './Button.interface';

export const Button = styled.button<I.ButtonStyledProps>`
  padding: 0.3125rem 0.625rem;
  font-size: ${({ theme }) => theme.size.medium};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.textSecondary : 'transparent'};
  width: auto;
  border-radius: 0.625rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
