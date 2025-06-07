import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from './Button.types';
import { colors, spacing } from '../../tokens';

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
    backgroundColor: colors.primary,
    borderRadius: spacing.buttonRadius,
    paddingHorizontal: spacing.xl + 8,
    paddingVertical: spacing.md + 2,
    alignSelf: 'flex-end',
    marginTop: spacing.md,
    minWidth: 120,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.textInverse,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button; 