import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import type { ChartDataPoint } from '../../models/Charts';

interface HoursChartProps {
  data: ChartDataPoint[];
}

const DateRangePicker = () => (
  <FormControl size="small">
    <Select
      defaultValue="6m"
      aria-label="Select date range for hours chart"
      sx={{
        fontSize: 11,
        height: 24,
        '& .MuiSelect-select': { py: 0.5, px: 1 },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'divider',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#173a3e',
        },
      }}
    >
      <MenuItem value="3m" sx={{ fontSize: 12 }}>
        Last 3 months
      </MenuItem>
      <MenuItem value="6m" sx={{ fontSize: 12 }}>
        Last 6 months
      </MenuItem>
      <MenuItem value="1y" sx={{ fontSize: 12 }}>
        Last year
      </MenuItem>
    </Select>
  </FormControl>
);

export const HoursChart = ({ data }: HoursChartProps) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.75rem' }}>
          Hours Tracked
        </Typography>
        <DateRangePicker />
      </Box>
      <Box sx={{ height: { xs: 100, sm: 120, lg: 100 }, ml: -2 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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
              cursor={{ fill: 'rgba(0,0,0,0.04)' }}
            />
            <Bar dataKey="value" fill="#173a3e" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
