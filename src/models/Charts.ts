export interface DashboardStatistics {
  monthsWorked: number;
  totalHours: number;
  totalEarnings: number;
}

export interface ChartDataPoint {
  month: string; 
  value: number;
}

export interface EarningsChartData {
  dataPoints: ChartDataPoint[]; 
  amountSEK: number;
  }

export interface HoursChartData {
  dataPoints: ChartDataPoint[];  
  amountHours: number;              
  }