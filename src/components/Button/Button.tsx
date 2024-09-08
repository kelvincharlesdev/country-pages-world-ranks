import * as S from './Button.styles';
import * as I from './Button.interface';

export const Button = ({
  children,
  $isActive = false,
  onClick
}: I.ButtonProps) => {
  return (
    <S.Button $isActive={$isActive} onClick={onClick}>
      {children}
    </S.Button>
  );
};
