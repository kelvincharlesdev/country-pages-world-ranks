import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente App', () => {
  it('Deve renderizar', () => {
    render(<App />);
    const teste = screen.getByText('Testando');
    expect(teste).toBeInTheDocument();
  });
});
