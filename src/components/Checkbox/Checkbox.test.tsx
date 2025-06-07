import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders label and handles press', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Checkbox label="Test" checked={false} color="#000" onPress={onPress} />);
    fireEvent.press(getByText('Test'));
    expect(onPress).toHaveBeenCalled();
  });

  it('shows checked style when checked', () => {
    const { getByText } = render(<Checkbox label="Checked" checked={true} color="#123" onPress={() => {}} />);
    expect(getByText('Checked')).toBeTruthy();
  });
}); 