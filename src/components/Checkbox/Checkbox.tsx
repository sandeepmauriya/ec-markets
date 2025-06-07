import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { CheckboxProps } from './Checkbox.types';
import { colors, spacing } from '../../tokens';

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onPress }) => (
  <TouchableOpacity style={styles.checkboxRow} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.checkbox, {
      borderColor: colors.accent,
      backgroundColor: checked ? colors.accent : colors.background,
    }]}
    >
      {checked && (
        <View style={styles.innerBoxWrapper}>
          <View style={[styles.innerBox, { backgroundColor: colors.accent }]}
          >
            <View style={styles.checkmarkWrapper}>
              <View style={styles.checkmarkArrow} />
            </View>
          </View>
        </View>
      )}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 3,
    borderRadius: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  innerBoxWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
  },
  innerBox: {
    width: 12,
    height: 12,
    borderRadius: spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 12,
    height: 12,
  },
  checkmarkArrow: {
    width: 10,
    height: 4.5,
    borderLeftWidth: 1.2,
    borderBottomWidth: 1.2,
    borderColor: colors.textInverse,
    transform: [{ rotate: '-45deg' }],
    borderStyle: 'solid',
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Checkbox; 