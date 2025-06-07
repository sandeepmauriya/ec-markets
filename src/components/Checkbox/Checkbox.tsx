import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { CheckboxProps } from './Checkbox.types';

const BLUE = '#2D3BFF';

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onPress }) => (
  <TouchableOpacity style={styles.checkboxRow} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.checkbox, {
      borderColor: BLUE,
      backgroundColor: checked ? BLUE : '#fff',
    }]}
    >
      {checked && (
        <View style={styles.innerBoxWrapper}>
          <View style={[styles.innerBox, { backgroundColor: BLUE }]}
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
    marginBottom: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 3,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
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
    borderRadius: 3,
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
    borderColor: '#fff',
    transform: [{ rotate: '-45deg' }],
    borderStyle: 'solid',
  },
  label: {
    color: '#222',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Checkbox; 