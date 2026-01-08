import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useParams } from 'react-router-dom';
import type { Assignment, Invoice } from '../../models/dashboardSections';
import type { DashboardStatistics, ChartDataPoint } from '../../models/Charts';
import { onAssignmentCardStyles } from './OnAssignment.styles';
import { EarningsChart } from './EarningsChart.tsx';
import { HoursChart } from './HoursChart.tsx';

interface ConsultantData {
  assignments: Assignment[];
  invoices: Invoice[];
}

const formatMonthShort = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: '2-digit',
  });
};

const calculateStatistics = (invoices: Invoice[]): DashboardStatistics => {
  const uniqueMonths = new Set(invoices.map((inv) => inv.month)).size;
  const totalHours = invoices.reduce((sum, inv) => sum + inv.hours, 0);
  const totalEarnings = invoices.reduce((sum, inv) => sum + inv.amountSEK, 0);

  return {
    monthsWorked: uniqueMonths,
    totalHours,
    totalEarnings,
  };
};

const generateChartData = (
  invoices: Invoice[]
): { earnings: ChartDataPoint[]; hours: ChartDataPoint[] } => {
  const sortedInvoices = [...invoices].sort(
    (a, b) => new Date(a.month).getTime() - new Date(b.month).getTime()
  );

  const earnings = sortedInvoices.map((inv) => ({
    month: formatMonthShort(inv.month),
    value: inv.amountSEK / 1000, // Convert to thousands
  }));

  const hours = sortedInvoices.map((inv) => ({
    month: formatMonthShort(inv.month),
    value: inv.hours,
  }));

  return { earnings, hours };
};

export const OnAssignmentCard = () => {
  const [data, setData] = useState<ConsultantData | null>(null);
  const { consultantId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!consultantId) {
        setData(null);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3001/consultants/${consultantId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const consultantData = await response.json();
        setData({
          assignments: consultantData.assignments || [],
          invoices: consultantData.invoices || [],
        });
      } catch (err) {
        setData(null);
      }
    };

    fetchData();
  }, [consultantId]);

  // If there are no assignments
  if (!data || data.assignments.length === 0) {
    return null;
  }

  const statistics = calculateStatistics(data.invoices);
  const { earnings, hours } = generateChartData(data.invoices);
  const assignment = data.assignments[0];

  return (
    <Card sx={onAssignmentCardStyles.card}>
      <CardContent sx={onAssignmentCardStyles.cardContent}>
        <Typography variant="subtitle1" fontWeight={600}>
          On Assignment
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={onAssignmentCardStyles.subtitle}>
          {assignment.client}
        </Typography>

        <Box sx={onAssignmentCardStyles.statsContainer}>
          <Box sx={onAssignmentCardStyles.statBox}>
            <CalendarMonthIcon sx={onAssignmentCardStyles.statIcon} />
            <Typography sx={onAssignmentCardStyles.statLabel}>Total months</Typography>
            <Typography sx={onAssignmentCardStyles.statValue}>{statistics.monthsWorked}</Typography>
          </Box>
          <Box sx={onAssignmentCardStyles.statBox}>
            <AccessTimeIcon sx={onAssignmentCardStyles.statIcon} />
            <Typography sx={onAssignmentCardStyles.statLabel}>Time spent</Typography>
            <Typography sx={onAssignmentCardStyles.statValue}>{statistics.totalHours}h</Typography>
          </Box>
          <Box sx={onAssignmentCardStyles.statBox}>
            <BarChartIcon sx={onAssignmentCardStyles.statIcon} />
            <Typography sx={onAssignmentCardStyles.statLabel}>Total revenue</Typography>
            <Typography sx={onAssignmentCardStyles.statValue}>
              {Math.round(statistics.totalEarnings / 1000)}k SEK
            </Typography>
          </Box>
        </Box>

        <Box sx={onAssignmentCardStyles.chartsContainer}>
          <Box sx={onAssignmentCardStyles.chartBox}>
            <EarningsChart data={earnings} />
          </Box>
          <Box sx={onAssignmentCardStyles.chartBox}>
            <HoursChart data={hours} />
          </Box>
        </Box>

        <Button variant="outlined" fullWidth sx={onAssignmentCardStyles.button}>
          View Time Reporting
        </Button>
      </CardContent>
    </Card>
  );
};
