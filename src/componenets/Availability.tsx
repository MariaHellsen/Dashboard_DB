import { useState } from 'react';
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

interface AvailabilityOption {
  id: string;
  label: string;
  checked: boolean;
  hasInfo?: boolean;
}

const initialOptions: AvailabilityOption[] = [
  { id: 'looking', label: "I'm actively looking for a new assignment", checked: true },
  { id: 'present', label: 'Feel free to present me to clients without asking', checked: true, hasInfo: true },
  { id: 'framework', label: 'Please include my profile in framework contract procurements', checked: true, hasInfo: true },
  { id: 'ongoing', label: 'I am on an ongoing contract', checked: false },
  { id: 'employment', label: "I'm open for employment", checked: false },
];

export const AvailabilityCard = () => {
  const [options, setOptions] = useState(initialOptions);
  const [startDate, setStartDate] = useState('2026-01-12');

  const toggleOption = (id: string) => {
    setOptions(options.map((opt) => (opt.id === id ? { ...opt, checked: !opt.checked } : opt)));
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Availability
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {options.map((option) => (
            <Box key={option.id} sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={option.checked}
                    onChange={() => toggleOption(option.id)}
                    size="small"
                sx={{
                    color: 'rgba(0, 0, 0, 0.23)', 
                    '&.Mui-checked': {
                    color: '#173a3e',
                  },
                }}
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2" sx={{ lineHeight: 1.3 }}>
                      {option.label}
                    </Typography>
                    {option.hasInfo && (
                      <Tooltip title="More information">
                        <IconButton size="small" sx={{ p: 0 }}>
                          <Info size={14} color="#6b7280" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                }
                sx={{ 
                  alignItems: 'flex-start', 
                  m: 0,
                  '& .MuiFormControlLabel-label': { pt: 0.5 }
                }}
              />
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            When are you ready to start a new assignment?
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
            Start date
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <TextField
              size="small"
              fullWidth
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputProps={{
                sx: { pr: 5, fontSize: 14 },
              }}
            />
            <Calendar
              size={16}
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6b7280',
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};