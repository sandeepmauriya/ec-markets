import React from 'react';
import { render } from '@testing-library/react-native';
import ChartCard from './ChartCard';

describe('ChartCard', () => {
  it('renders loading state', () => {
    const { getByText } = render(<ChartCard data={{}} loading={true} />);
    expect(getByText('Loading...')).toBeTruthy();
  });
}); 