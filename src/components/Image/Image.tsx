import * as I from './Image.interface';
import * as S from './Image.styles';

export const Image = ({ src, alt }: I.ImageProps) => {
  return <S.Image src={src} alt={alt} />;
};
