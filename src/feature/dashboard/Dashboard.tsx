import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import Header from '../../components/Header/Header';
import Checkbox from '../../components/Checkbox/Checkbox';
import ChartCard from '../../components/ChartCard/ChartCard';
import Button from '../../components/Button/Button';
import { fetchStockData } from '../../api/stockService';
import { StockData } from '../../type/stock';
import { StatusBar } from 'expo-status-bar';

const COLORS = {
  open: '#2D3BFF',   // blue
  high: '#3EE6B6',   // green
  low: '#A3A3A3',    // gray
  close: '#F36CB4',  // pink
};

type StockKey = 'open' | 'high' | 'low' | 'close';
const LEGEND_ORDER: StockKey[] = ['open', 'high', 'low', 'close'];
type DisplayState = Record<StockKey, boolean>;

const Dashboard: React.FC = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [display, setDisplay] = useState<DisplayState>({ open: true, high: false, low: false, close: true });
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchStockData();
    setStockData(data);
  };

  // Prepare chart data based on toggles and Figma order
  const labels = stockData.map(item => new Date(parseInt(item.timestamp) * 1000).toLocaleDateString('en-GB'));
  const datasets = [];
  for (const key of LEGEND_ORDER) {
    if (display[key]) {
      datasets.push({
        data: stockData.map(item => item[key]),
        color: () => COLORS[key],
        strokeWidth: 2,
        label: key.charAt(0).toUpperCase() + key.slice(1),
      });
    }
  }

  // Zoom logic: show only last 7 days if zoomed
  const chartLabels = zoomed ? labels.slice(-7) : labels;
  const chartDatasets = datasets.map(ds => ({ ...ds, data: zoomed ? ds.data.slice(-7) : ds.data }));

  const chartData = {
    labels: chartLabels.filter((_, i) => i % Math.ceil(chartLabels.length / 5) === 0),
    datasets: chartDatasets,
    legend: chartDatasets.map(ds => ds.label),
  };

  // Checkbox color logic to match Figma
  const checkboxProps = [
    { key: 'open' as const, label: 'Open', color: COLORS.open },
    { key: 'close' as const, label: 'Close', color: COLORS.close },
    { key: 'low' as const, label: 'Low', color: COLORS.low },
    { key: 'high' as const, label: 'High', color: COLORS.high },
  ];

  return (
    <View style={styles.screen}>
      <Header />
      <ChartCard data={chartData} loading={stockData.length === 0} />
      <View style={styles.controlsRow}>
        <View>
          <Text style={styles.displayLabel}>Display</Text>
          {checkboxProps.map(({ key, label, color }) => (
            <Checkbox
              key={key}
              label={label}
              checked={display[key]}
              color={color}
              onPress={() => setDisplay(d => ({ ...d, [key]: !d[key] }))}
            />
          ))}
        </View>
        <Button onPress={() => setZoomed(false)} variant="primary">Reset Zoom</Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 48,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 48,
    alignItems: 'flex-start',
  },
  displayLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
    fontSize: 17,
  },
});

export default Dashboard; 