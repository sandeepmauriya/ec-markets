import React from 'react';
import { render } from '@testing-library/react-native';
import Header from './Header';

describe('Header', () => {
  it('renders the title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('AAPL Market Data')).toBeTruthy();
  });
}); 