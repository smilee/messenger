import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('Root', () => {
  it('renders sidebar', () => {
    const { container } = render(<App />);

    expect(container.innerHTML).toContain('<aside');
  });

  it('renders main', () => {
    const { container } = render(<App />);

    expect(container.innerHTML).toContain('<main');
  });
});
