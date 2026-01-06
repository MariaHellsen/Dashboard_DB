import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import type { ChartDataPoint } from '../../models/Charts';

interface EarningsChartProps {
  data: ChartDataPoint[];
}

const DateRangePicker = () => (
  <FormControl size="small">
    <Select
      defaultValue="6m"
      sx={{ 
        fontSize: 11, 
        height: 24,
        '& .MuiSelect-select': { py: 0.5, px: 1 }
      }}
    >
      <MenuItem value="3m" sx={{ fontSize: 12 }}>Last 3 months</MenuItem>
      <MenuItem value="6m" sx={{ fontSize: 12 }}>Last 6 months</MenuItem>
      <MenuItem value="1y" sx={{ fontSize: 12 }}>Last year</MenuItem>
    </Select>
  </FormControl>
);

export const EarningsChart = ({ data }: EarningsChartProps) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.75rem' }}>
          Earnings Over Time
        </Typography>
        <DateRangePicker />
      </Box>
      <Box sx={{ height: { xs: 100, sm: 120, lg: 100 }, ml: -2 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#173a3e" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#173a3e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" />
            <XAxis dataKey="month" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 8 }} axisLine={false} tickLine={false} width={25} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 6,
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#173a3e"
              strokeWidth={2}
              fill="url(#earningsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};