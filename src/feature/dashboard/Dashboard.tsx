import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
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
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchStockData();
    setStockData(data);
  };

  // Prepare all labels and years
  const allLabels = stockData.map(item => new Date(parseInt(item.timestamp) * 1000).toLocaleDateString('en-GB'));
  const allYears = stockData.map(item => new Date(parseInt(item.timestamp) * 1000).getFullYear());

  // Step for 4 points
  const step = stockData.length >= 4 ? Math.floor((stockData.length - 1) / 3) : 1;

  // Pick 4 evenly spaced years for the x-axis
  let yearLabels: string[] = [];
  let yearValues: number[] = [];
  if (allLabels.length >= 4) {
    yearLabels = [
      allLabels[0],
      allLabels[step],
      allLabels[step * 2],
      allLabels[allLabels.length - 1]
    ];
    yearValues = [
      allYears[0],
      allYears[step],
      allYears[step * 2],
      allYears[allYears.length - 1]
    ];
  } else {
    yearLabels = allLabels;
    yearValues = allYears;
  }

  // Filter data for selected year or show only 4 points
  let filteredData: StockData[] = [];
  let labels: string[] = [];
  if (selectedYear) {
    filteredData = stockData
      .filter(item => new Date(parseInt(item.timestamp) * 1000).getFullYear() === selectedYear)
      .sort((a, b) => parseInt(a.timestamp) - parseInt(b.timestamp));
    filteredData = filteredData.slice(-4); // latest 4 months
    labels = filteredData.map(item => new Date(parseInt(item.timestamp) * 1000).toLocaleDateString('en-GB'));
  } else {
    filteredData = [
      stockData[0],
      stockData[step],
      stockData[step * 2],
      stockData[stockData.length - 1]
    ].filter(Boolean);
    labels = yearLabels;
  }

  // Prepare datasets
  const datasets = [];
  for (const key of LEGEND_ORDER) {
    if (display[key]) {
      datasets.push({
        data: filteredData.map(item => item[key]),
        color: () => COLORS[key],
        strokeWidth: 2,
        label: key.charAt(0).toUpperCase() + key.slice(1),
      });
    }
  }

  const chartData = {
    labels,
    datasets,
    legend: datasets.map(ds => ds.label),
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
      <ChartCard data={chartData} loading={stockData.length === 0} selectedYear={selectedYear} onYearLabelClick={year => setSelectedYear(year)} />
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
        <Button onPress={() => setSelectedYear(null)} disabled={!selectedYear}>Reset Zoom</Button>
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
  yearLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 48,
    marginBottom: 8,
    marginTop: -12,
  },
  yearLabelTouchable: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  yearLabel: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Dashboard; 