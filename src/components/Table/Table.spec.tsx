import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Table } from './Table';
import { theme } from '../../styles/theme';
import { Countries } from '../../types/countries';
import { MemoryRouter } from 'react-router-dom';

describe('Component <Table/>', () => {
  const filterTeste: Countries[] = [
    {
      flags: { svg: 'teste' },
      name: { common: 'teste' },
      population: 100,
      area: 232,
      region: 'Americas',
      independent: true,
      unMember: false
    }
  ];

  it('Should render component', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Table filteredCountries={filterTeste} />
        </ThemeProvider>
      </MemoryRouter>
    );

    const table = screen.getByTestId('table-test');

    expect(table).toBeInTheDocument();
  });

  it('Should render content', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Table filteredCountries={filterTeste} />
        </ThemeProvider>
      </MemoryRouter>
    );

    const name = screen.getByText('teste');
    const population = screen.getByText('100');
    const area = screen.getByText('232');
    const region = screen.getByText('Americas');
    const flags = screen.getByRole('img');

    expect(name).toBeInTheDocument();
    expect(population).toBeInTheDocument();
    expect(area).toBeInTheDocument();
    expect(region).toBeInTheDocument();
    expect(flags).toHaveAttribute('src', 'teste');
  });
});
