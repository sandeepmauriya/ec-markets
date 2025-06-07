import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ChartCardProps } from './ChartCard.types';
import { colors, spacing } from '../../tokens';

const LEGEND_COLORS: Record<string, string> = {
  Open: '#2D3BFF',
  Close: '#F36CB4',
  Low: '#A3A3A3',
  High: '#3EE6B6',
};

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
              r: '4',
              strokeWidth: '2',
              stroke: '#fff',
            },
            propsForBackgroundLines: {
              stroke: '#d3d3d3',
              strokeDasharray: '4',
            },
            style: {
              borderRadius: 20,
            },
          }}
          bezier
          style={{ borderRadius: 20, marginTop: 8 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chartCard: {
    backgroundColor: '#f5f5fa',
    borderRadius: 20,
    padding: 12,
    marginBottom: 32,
    width: Dimensions.get('window').width - 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
    marginLeft: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  legendDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
  legendLabel: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
});

export default ChartCard; 