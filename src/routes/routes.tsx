import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CountryDetailsPage, HomePage } from '../page';
import { MainLayout } from '../components';

export const CountryRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/" />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path={`/name/:countryId`} element={<CountryDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
