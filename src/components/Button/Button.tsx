import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, onPress, disabled = false, style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#222',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignSelf: 'flex-end',
    marginTop: 8,
    minWidth: 120,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button; 