import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppleLogo from '../AppleLogo/AppleLogo';

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
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 16,
  },
  title: {
    fontSize: 32,
    lineHeight:48,
    fontWeight:400,
    letterSpacing:0,
    fontFamily:'Actor',
    marginLeft: 16,
  },
});

export default Header; 