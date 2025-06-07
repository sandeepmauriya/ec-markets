import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ChartCardProps } from './ChartCard.types';

interface ChartCardDrillProps extends ChartCardProps {
  selectedYear: number | null;
  onYearLabelClick: (year: number) => void;
}

const ChartCard: React.FC<ChartCardDrillProps> = ({ data, loading, selectedYear, onYearLabelClick }) => {
  // Handler for data point click (not used now)
  // const handleDataPointClick = (dataPoint: any) => { ... };

  // Find the latest year in the data
  let latestYear: number | null = null;
  if (data && data.labels && data.labels.length > 0) {
    const years = data.labels.map((label: string) => {
      const parts = label.split('/');
      return parseInt(parts[2], 10);
    });
    latestYear = Math.max(...years.filter((y: number) => !isNaN(y)));
  }

  const chart = (
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
        color: () => '#f5f5fa',
        labelColor: () => '#222222',
        propsForDots: {
          r: '0',
          strokeWidth: '0',
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
  );

  return (
    <View style={styles.chartCard}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        !selectedYear ? (
          <TouchableOpacity activeOpacity={0.8} onPress={() => latestYear && onYearLabelClick(latestYear)}>
            {chart}
          </TouchableOpacity>
        ) : (
          chart
        )
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
});

export default ChartCard; 