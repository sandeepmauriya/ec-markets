import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../../tokens';
import AppleLogo from '../AppleLogo';

const Header: React.FC = () => (
  <View style={styles.header}>
    <AppleLogo/>
    <Text style={styles.headerTitle}>AAPL Market Data</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: spacing.sm,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
});

export default Header; 