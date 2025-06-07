import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppleLogo from '../AppleLogo/AppleLogo';
import { colors, spacing } from '../../tokens';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <AppleLogo size={40} />
      <Text style={styles.title}>AAPL Market Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xl + 4,
    paddingTop: spacing.xxl + 8,
    paddingBottom: spacing.lg,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    color: colors.primary,
    marginLeft: spacing.xl,
    letterSpacing: 0,
    fontFamily: 'Actor',
  },
});

export default Header; 