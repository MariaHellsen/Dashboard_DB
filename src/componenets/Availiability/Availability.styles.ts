import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const availabilityStyles = {
  card: {
    height: '100%',
  } as SxProps<Theme>,

  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
  } as SxProps<Theme>,

  optionBox: {
    display: 'flex',
    alignItems: 'flex-start',
  } as SxProps<Theme>,

  checkbox: {
    color: 'rgba(0, 0, 0, 0.23)',
    '&.Mui-checked': {
      color: '#173a3e',
    },
  } as SxProps<Theme>,

  labelBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
  } as SxProps<Theme>,

  labelText: {
    lineHeight: 1.3,
  } as SxProps<Theme>,

  infoButton: {
    p: 0,
  } as SxProps<Theme>,

  formControlLabel: {
    alignItems: 'center',
    m: 0,
    '& .MuiFormControlLabel-label': { pt: 0 },
  } as SxProps<Theme>,

  dateSection: {
    mt: 2,
    pt: 2,
    borderTop: 1,
    borderColor: 'divider',
  } as SxProps<Theme>,

  dateCaption: {
    mb: 1,
  } as SxProps<Theme>,

  dateFieldContainer: {
    position: 'relative',
  } as SxProps<Theme>,

  dateInput: {
    pr: 5,
    fontSize: 14,
  } as SxProps<Theme>,

  calendarIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#6b7280',
  } as React.CSSProperties,
};
