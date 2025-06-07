import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from './Button.types';
import { colors, spacing } from '../../tokens';

const Button: React.FC<ButtonProps> = ({ children, onPress, disabled = false, variant = 'primary', style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        variant === 'primary' ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.text,
        variant === 'primary' ? styles.textPrimary : styles.textSecondary,
        disabled && styles.textDisabled,
      ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: spacing.buttonRadius,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    alignSelf: 'flex-end',
    marginTop: spacing.md,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  textPrimary: {
    color: colors.textInverse,
  },
  textSecondary: {
    color: colors.primary,
  },
  textDisabled: {
    color: '#aaa',
  },
});

export default Button; 