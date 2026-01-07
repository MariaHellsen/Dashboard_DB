import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { useParams } from 'react-router-dom';
import type { TopMatch } from '../../models';
import { searchAssignmentStyles } from '../SearchAssignment/SearchAssignmentCard.styles.ts';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
  });
};

export const SearchAssignmentCard = () => {
  const [topMatches, setTopMatches] = useState<TopMatch[]>([]);
  const { consultantId } = useParams();

  useEffect(() => {
    const fetchTopMatches = async () => {
      if (!consultantId) {
        setTopMatches([]);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3001/consultants/${consultantId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch top matches');
        }
        
        const data = await response.json();
        setTopMatches(data.topMatches || []);
      } catch (err) {
        setTopMatches([]);
      }
    };

    fetchTopMatches();
  }, [consultantId]);

  return (
    <Card className="grid-item" sx={searchAssignmentStyles.card}>
      <CardContent sx={searchAssignmentStyles.cardContent}>
        <Typography variant="subtitle1" fontWeight={600}>
          Search Assignment
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={searchAssignmentStyles.subtitle}>
          Top matches
        </Typography>

        <Box sx={searchAssignmentStyles.matchesContainer}>
          {topMatches.map((assignment) => (
            <Box key={assignment.id} sx={searchAssignmentStyles.matchBox}>
              <Typography
                className="assignment-title"
                variant="body2"
                fontWeight={500}
                sx={searchAssignmentStyles.matchTitle}
              >
                {assignment.title}
              </Typography>
              <Box sx={searchAssignmentStyles.detailsContainer}>
                <Box sx={searchAssignmentStyles.detailRow}>
                  <Clock size={12} />
                  <Typography variant="caption">Published: {formatDate(assignment.publishedDate)}</Typography>
                </Box>
                <Box sx={searchAssignmentStyles.detailRow}>
                  <Calendar size={12} />
                  <Typography variant="caption">Starts: {formatDate(assignment.startDate)}</Typography>
                </Box>
                <Box sx={searchAssignmentStyles.detailRow}>
                  <MapPin size={12} />
                  <Typography variant="caption">{assignment.location}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Button variant="outlined" fullWidth sx={searchAssignmentStyles.button}>
          View all assignments
        </Button>
      </CardContent>
    </Card>
  );
};