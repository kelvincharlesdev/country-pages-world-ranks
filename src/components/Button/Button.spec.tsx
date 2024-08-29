import { fireEvent, render, screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import { vi } from 'vitest';

describe('Component Button', () => {
  it('Must render component Button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Teste de renderização</Button>
      </ThemeProvider>
    );

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  it('Must render with children', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Testando Children</Button>
      </ThemeProvider>
    );

    const btn = screen.getByText('Testando Children');
    expect(btn).toBeInTheDocument();
  });

  it('Must render with isActive true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button $isActive={true}>Testando isActive true</Button>
      </ThemeProvider>
    );

    const btn = screen.getByRole('button');
    expect(btn).toHaveStyle('background-color: #6C727F');
  });

  it('Must render with styles correct', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button $isActive={true}>Testando estilos</Button>
      </ThemeProvider>
    );

    const btn = screen.getByRole('button');

    fireEvent.mouseOver(btn);

    expect(btn).toHaveStyle({
      'font-size': '0.875rem',
      color: '#D2D5DA',
      'border-radius': '0.625rem',
      'background-color': '#6C727F'
    });
  });

  it('Must click', () => {
    const click = vi.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={click}>Testando click</Button>
      </ThemeProvider>
    );

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(click).toHaveBeenCalledTimes(1);
  });
});
