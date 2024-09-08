import { Image } from '../Image';
import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Header>
      <S.ContentImage>
        <Image src="/logo.svg" alt="Logo" />
      </S.ContentImage>
    </S.Header>
  );
};
