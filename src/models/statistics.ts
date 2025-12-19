export interface DashboardStatistics {
  monthsWorked: number;
  totalHours: number;
  totalEarnings: number;
}

export interface ChartDataPoint {
  month: string; // "Jan 25", "Feb 25", etc.
  value: number;
}

export interface EarningsChartData {
  dataPoints: ChartDataPoint[]; 
  maxValue: number;
  minValue: number;
}