import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { CheckboxProps } from './Checkbox.types';
import { colors, spacing } from '../../tokens';

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, color, onPress }) => (
  <TouchableOpacity style={styles.checkboxRow} onPress={onPress}>
    <View style={[styles.checkbox, { borderColor: color, backgroundColor: checked ? color : colors.background }]}> 
      {checked && <View style={styles.checkboxTick} />}
    </View>
    <Text style={{ color: colors.text, marginLeft: spacing.sm }}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  checkboxTick: {
    width: 10,
    height: 10,
    backgroundColor: colors.textInverse,
    borderRadius: 2,
  },
});

export default Checkbox; 