import { StockData } from '../type/stock';
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig?.extra?.API_URL || process.env.API_URL;

export async function fetchStockData(): Promise<StockData[]> {
  if (!API_URL) {
    console.error('API_URL is not set in environment variables');
    return [];
  }
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data.slice(-30); // Last 30 days for better chart
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
} 