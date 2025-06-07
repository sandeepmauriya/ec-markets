import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, color, onPress }) => (
  <TouchableOpacity style={styles.checkboxRow} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.checkbox, { borderColor: color }]}> 
      {checked && <View style={[styles.checkboxTick, { backgroundColor: color }]} />}
    </View>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 3,
    borderRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxTick: {
    width: 12,
    height: 12,
    borderRadius: 3,
  },
  label: {
    color: '#222',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Checkbox; 