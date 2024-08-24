import { Image } from '../Image';
import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Header>
      <S.ContentImage>
        <Image src="/Logo.svg" alt="Logo" />
      </S.ContentImage>
    </S.Header>
  );
};
