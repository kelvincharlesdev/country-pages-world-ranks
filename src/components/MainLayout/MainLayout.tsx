import * as S from './MainLayout.styles';

import { Header } from '../Header/Header.styles';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <S.Main__Layout__Container>
      <Header />
      <Outlet />
    </S.Main__Layout__Container>
  );
};
