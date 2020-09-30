import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('Root', () => {
  it('renders sidebar', () => {
    const { container } = render(<App />);

    expect(container.innerHTML).toContain('<aside');
  });

  describe('when a new channel is created', () => {
    it('renders main', () => {
      const { container, getByText } = render(<App />);

      fireEvent.click(getByText('New chat'));

      expect(container.innerHTML).toContain('<main');
    });
  });

  describe('when user inputs a new message', () => {
    it('appends message', () => {
      const { getByLabelText, getByText, container } = render(<App />);

      fireEvent.click(getByText('New chat'));

      fireEvent.change(getByLabelText('Draft'), {
        target: { value: 'Hi!' },
      });

      fireEvent.click(getByText('Send'));

      expect(container.innerHTML).toContain('Hi!</li>');
    });
  });
});
