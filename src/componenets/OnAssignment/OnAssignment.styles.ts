import type { SxProps } from "@mui/system";
import type { Theme } from "@mui/material/styles";

export const onAssignmentCardStyles = {
  // Card wrapper
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    animation: "fadeUp 0.5s ease-out 0.2s both",
  } as SxProps<Theme>,

  // Card content
  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    p: 2,
    "&:last-child": { pb: 2 },
  } as SxProps<Theme>,

  subtitle: {
    mb: 2,
  } as SxProps<Theme>,

  // Statistics container
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    mb: 2,
  } as SxProps<Theme>,

  // Individual stat box
  statBox: {
    flex: 1,
    minWidth: 0,
    textAlign: "center",
    p: 1,
    borderRadius: 1,
    border: 1,
    borderColor: "divider",
    transition: "all 0.25s ease",
    "&:hover": {
      borderColor: "rgba(23, 58, 62, 0.3)",
    },
  } as SxProps<Theme>,

  // Stat value text
  statValue: {
    fontWeight: 700,
    color: "#173a3e",
    fontSize: "0.95rem",
    mb: 0.25,
    lineHeight: 1.2,
  } as SxProps<Theme>,

  // Stat label text
  statLabel: {
    fontSize: "0.7rem",
    color: "text.secondary",
    lineHeight: 1.2,
  } as SxProps<Theme>,

  // Charts container
  chartsContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
  } as SxProps<Theme>,

  // Individual chart box
  chartBox: {
    p: 1.5,
    borderRadius: 1,
    border: 1,
    borderColor: "divider",
    transition: "all 0.25s ease",
    "&:hover": {
      borderColor: "rgba(23, 58, 62, 0.3)",
    },
  } as SxProps<Theme>,

  // Action button
  button: {
    mt: 2,
    borderColor: "#173a3e",
    color: "#173a3e",
    fontWeight: 600,
    fontSize: "0.875rem",
    py: 1,
    borderRadius: "6px",
    transition: "all 0.25s ease",
    "&:hover": {
      bgcolor: "#173a3e",
      color: "white",
      borderColor: "#173a3e",
      transform: "translateY(-1px)",
    },
  } as SxProps<Theme>,
};
