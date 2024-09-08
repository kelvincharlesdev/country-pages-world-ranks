import { Header } from '../Header';
import * as S from './MainLayout.styles';

import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <S.Main__Layout__Container>
      <Header />
      <Outlet />
    </S.Main__Layout__Container>
  );
};
