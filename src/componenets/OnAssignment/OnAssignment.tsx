import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
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
  const uniqueMonths = new Set(invoices.map(inv => inv.month)).size;
  const totalHours = invoices.reduce((sum, inv) => sum + inv.hours, 0);
  const totalEarnings = invoices.reduce((sum, inv) => sum + inv.amountSEK, 0);

  return {
    monthsWorked: uniqueMonths,
    totalHours,
    totalEarnings,
  };
};

const generateChartData = (invoices: Invoice[]): { earnings: ChartDataPoint[]; hours: ChartDataPoint[] } => {
  const sortedInvoices = [...invoices].sort((a, b) => 
    new Date(a.month).getTime() - new Date(b.month).getTime()
  );

  const earnings = sortedInvoices.map(inv => ({
    month: formatMonthShort(inv.month),
    value: inv.amountSEK / 1000, // Convert to thousands
  }));

  const hours = sortedInvoices.map(inv => ({
    month: formatMonthShort(inv.month),
    value: inv.hours,
  }));

  return { earnings, hours };
};

export const OnAssignmentCard = () => {
  const [data, setData] = useState<ConsultantData | null>(null);
  const location = useLocation();

  const consultantId: string | null =
    location.pathname.match(/\/dashboard\/([^/]+)/)?.[1] ?? null;

  useEffect(() => {
    if (!consultantId) {
      setData(null);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/consultants/${consultantId}`);
        if (!res.ok) return;
        const consultantData = await res.json();
        setData({
          assignments: consultantData.assignments || [],
          invoices: consultantData.invoices || [],
        });
      } catch (e) {
        // ignore
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

  return (
    <Card sx={onAssignmentCardStyles.card}>
      <CardContent sx={onAssignmentCardStyles.cardContent}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          On Assignment
        </Typography>

        <Box sx={onAssignmentCardStyles.statsContainer}>
          <Box sx={onAssignmentCardStyles.statBox}>
            <Typography sx={onAssignmentCardStyles.statValue}>
              {statistics.monthsWorked}
            </Typography>
            <Typography sx={onAssignmentCardStyles.statLabel}>
              Months
            </Typography>
          </Box>
          <Box sx={onAssignmentCardStyles.statBox}>
            <Typography sx={onAssignmentCardStyles.statValue}>
              {statistics.totalHours}h
            </Typography>
            <Typography sx={onAssignmentCardStyles.statLabel}>
              Hours
            </Typography>
          </Box>
          <Box sx={onAssignmentCardStyles.statBox}>
            <Typography sx={onAssignmentCardStyles.statValue}>
              {Math.round(statistics.totalEarnings / 1000)}k
            </Typography>
            <Typography sx={onAssignmentCardStyles.statLabel}>
              SEK Total
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