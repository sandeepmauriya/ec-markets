import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ChartCardProps } from './ChartCard.types';
import { colors, spacing } from '../../tokens';

const ChartCard: React.FC<ChartCardProps> = ({ data, loading }) => {
  return (
    <View style={styles.chartCard}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 48}
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: '#f5f5fa',
            backgroundGradientFrom: '#f5f5fa',
            backgroundGradientTo: '#f5f5fa',
            decimalPlaces: 2,
            color: () => '#2D3BFF',
            labelColor: () => '#222222',
            propsForDots: {
              r: '2',
              strokeWidth: '2',
              stroke: '#ffffff',
            },
            propsForBackgroundLines: {
              stroke: '#d3d3d3',
              strokeDasharray: '4',
            },
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{ borderRadius: spacing.cardRadius }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: colors.secondary,
    borderRadius: spacing.cardRadius,
    padding: spacing.md,
    marginBottom: spacing.xxl,
    width: Dimensions.get('window').width - 32,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default ChartCard; 