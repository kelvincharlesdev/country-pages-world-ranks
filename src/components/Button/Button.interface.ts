import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  $isActive?: boolean;
  onClick?: () => void;
}

export interface ButtonStyledProps {
  $isActive: boolean;
}
