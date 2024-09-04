import * as S from './SpinnerCircular.styles';
import * as I from './SpinnerCircular.interface';

export const SpinnerCircular = ({
  borderColor,
  borderTopColor
}: I.SpinnerCircularProps) => {
  return (
    <S.SpinnerContainer
      borderColor={borderColor}
      borderTopColor={borderTopColor}
      data-testid="spinner-circular"
    ></S.SpinnerContainer>
  );
};
