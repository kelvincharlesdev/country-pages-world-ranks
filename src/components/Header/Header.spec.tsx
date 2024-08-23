import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('Component Header', () => {
  it('', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const haeder = screen.getByRole('banner');

    expect(haeder).toBeInTheDocument();
  });
});
