import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  FormControlLabel, 
  Checkbox, 
  TextField,
  Box,
  Tooltip,
  IconButton
} from '@mui/material';
import { Info, Calendar } from 'lucide-react';
import { availabilityStyles } from './Availability.styles';

interface AvailabilityOption {
  id: string;
  label: string;
  checked: boolean;
  hasInfo?: boolean;
}

const DEFAULT_OPTIONS: AvailabilityOption[] = [
  { id: 'looking', label: "I'm actively looking for a new assignment", checked: true },
  { id: 'present', label: 'Feel free to present me to clients without asking', checked: true, hasInfo: true },
  { id: 'framework', label: 'Please include my profile in framework contract procurements', checked: true, hasInfo: true },
  { id: 'ongoing', label: 'I am on an ongoing contract', checked: false },
  { id: 'employment', label: "I'm open for employment", checked: false },
];

const DEFAULT_START_DATE = '2026-01-12';

export const AvailabilityCard = () => {
  // Get consultant ID from URL parameters
  const { consultantId } = useParams();
  
  // Create unique storage keys for this consultant
  const storageKeyOptions = `availability_options_${consultantId}`;
  const storageKeyDate = `availability_start_date_${consultantId}`;

    const [options, setOptions] = useState<AvailabilityOption[]>(() => {
    const saved = localStorage.getItem(storageKeyOptions);
    return saved ? JSON.parse(saved) : DEFAULT_OPTIONS;
  });

  const [startDate, setStartDate] = useState(() => {
    const saved = localStorage.getItem(storageKeyDate);
    return saved ? JSON.parse(saved) : DEFAULT_START_DATE;
  });

  // Save options to localStorage
  useEffect(() => {
    localStorage.setItem(storageKeyOptions, JSON.stringify(options));
  }, [options, storageKeyOptions]);

  // Save start date to localStorage
  useEffect(() => {
    localStorage.setItem(storageKeyDate, JSON.stringify(startDate));
  }, [startDate, storageKeyDate]);

  const toggleOption = (id: string) => {
    setOptions(options.map((opt) => (opt.id === id ? { ...opt, checked: !opt.checked } : opt)));
  };

  return (
    <Card sx={availabilityStyles.card}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Availability
        </Typography>

        <Box sx={availabilityStyles.optionsContainer}>
          {options.map((option) => (
            <Box key={option.id} sx={availabilityStyles.optionBox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={option.checked}
                    onChange={() => toggleOption(option.id)}
                    size="small"
                    sx={availabilityStyles.checkbox}
                  />
                }
                label={
                  <Box sx={availabilityStyles.labelBox}>
                    <Typography variant="body2" sx={availabilityStyles.labelText}>
                      {option.label}
                    </Typography>
                    {option.hasInfo && (
                      <Tooltip title="More information">
                        <IconButton size="small" sx={availabilityStyles.infoButton}>
                          <Info size={14} color="#6b7280" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                }
                sx={availabilityStyles.formControlLabel}
              />
            </Box>
          ))}
        </Box>

        <Box sx={availabilityStyles.dateSection}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            When are you ready to start a new assignment?
          </Typography>
          <TextField
            label="Start date"
            size="small"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputProps={{endAdornment: <Calendar size={18} color="#6b7280" />}}
            sx={availabilityStyles.dateField}
          />
        </Box>
      </CardContent>
    </Card>
  );
};