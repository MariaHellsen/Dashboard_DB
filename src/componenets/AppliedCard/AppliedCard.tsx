import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Calendar, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import type { Application } from '../../models';
import { appliedCardStyles } from './AppliedCard.styles';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
  });
};

export const AppliedCard = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const location = useLocation();

  const consultantId: string | null =
    location.pathname.match(/\/dashboard\/([^/]+)/)?.[1] ?? null;

  useEffect(() => {
    if (!consultantId) {
      setApplications([]);
      return;
    }

    const fetchApplications = async () => {
      try {
        const res = await fetch(`http://localhost:3001/consultants/${consultantId}`);
        if (!res.ok) return;
        const data = await res.json();
        setApplications(data.applications || []);
      } catch (e) {
        // ignore
      }
    };
    fetchApplications();
  }, [consultantId]);

  // If no applications
  if (applications.length === 0) {
    return null;
  }

  return (
    <Card sx={appliedCardStyles.card}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Applied
        </Typography>

        <Box sx={appliedCardStyles.applicationsContainer}>
          {applications.map((app) => (
            <Box key={app.id} sx={appliedCardStyles.applicationBox}>
              <Typography
                className="app-title"
                variant="body2"
                fontWeight={500}
                sx={appliedCardStyles.applicationTitle}
              >
                {app.title}
              </Typography>
              <Box sx={appliedCardStyles.detailsRow}>
                <Box sx={appliedCardStyles.detailItem}>
                  <Calendar size={12} />
                  <Typography variant="caption">Starts: {formatDate(app.startDate)}</Typography>
                </Box>
                <Box sx={appliedCardStyles.detailItem}>
                  <MapPin size={12} />
                  <Typography variant="caption">
                    {app.remote ? 'Remote' : app.location}
                  </Typography>
                </Box>
              </Box>
              <Chip
                label={app.result}
                size="small"
                sx={appliedCardStyles.statusChip}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};