import { render, screen } from '@testing-library/react';
import { SpinnerCircular } from './SpinnerCircular';

describe('component <SpinnerCircular/>', () => {
  it('Should render component', () => {
    render(<SpinnerCircular $borderColor="" />);

    const spinner = screen.getByTestId('spinner-circular');
    expect(spinner).toBeInTheDocument();
  });

  it('Should render with default styles', () => {
    render(<SpinnerCircular $borderColor="" borderTopColor="" />);
    const spinner = screen.getByTestId('spinner-circular');

    expect(spinner).toHaveStyle({
      border: '0.2rem solid #ffffff',
      borderTop: '0.4rem solid transparent',
      borderRadius: '50%'
    });
  });
  it('Should render with correct styles passed via props', () => {
    render(<SpinnerCircular $borderColor="#054789" borderTopColor="#985456" />);
    const spinner = screen.getByTestId('spinner-circular');

    expect(spinner).toHaveStyle({
      border: '0.2rem solid #054789',
      borderTop: '0.4rem solid #985456'
    });
  });
});
