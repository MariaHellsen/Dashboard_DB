import type { SxProps } from "@mui/system";
import type { Theme } from "@mui/material/styles";

export const availabilityStyles = {
  card: {
    height: "100%",
  } as SxProps<Theme>,

  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
  } as SxProps<Theme>,

  optionBox: {
    display: "flex",
    alignItems: "flex-start",
  } as SxProps<Theme>,

  checkbox: {
    color: "rgba(0, 0, 0, 0.23)",
    "&.Mui-checked": {
      color: "#173a3e",
    },
  } as SxProps<Theme>,

  labelBox: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
  } as SxProps<Theme>,

  labelText: {
    lineHeight: 1.3,
    color: "text.secondary",
  } as SxProps<Theme>,

  infoButton: {
    p: 0,
  } as SxProps<Theme>,

  formControlLabel: {
    alignItems: "center",
    m: 0,
    "& .MuiFormControlLabel-label": { pt: 0 },
  } as SxProps<Theme>,

  dateSection: {
    mt: 2,
    pt: 2,
    borderTop: 1,
    borderColor: "divider",
  } as SxProps<Theme>,

  dateField: {
    mt: 2,
    "& .MuiInputLabel-root": {
      fontSize: "1rem",
      color: "text.secondary",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "0.95rem",
    },
  } as SxProps<Theme>,
};
