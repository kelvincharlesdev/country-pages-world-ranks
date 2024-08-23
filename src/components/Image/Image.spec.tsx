// Image.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Image } from './Image';

describe('Image Component', () => {
  const imageSrc = 'https://via.placeholder.com/150';
  const imageAlt = 'Placeholder Image';

  it('should render the image with the correct src and alt attributes', () => {
    render(<Image src={imageSrc} alt={imageAlt} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', imageSrc);
    expect(imgElement).toHaveAttribute('alt', imageAlt);
  });

  it('should apply the correct styles', () => {
    render(<Image src={imageSrc} alt={imageAlt} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveStyle({
      width: '100%',
      height: '100%'
    });
  });
});
