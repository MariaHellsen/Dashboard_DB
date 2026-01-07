import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { notFoundStyles } from "./NotFound.styles";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate("/");

  return (
    <Box sx={notFoundStyles.container}>
      <Container maxWidth="sm">
        <Box sx={notFoundStyles.contentBox}>
          <Typography variant="h1" sx={notFoundStyles.errorCode}>
            404
          </Typography>

          <Typography variant="h4" sx={notFoundStyles.heading}>
            Page Not Found
          </Typography>

          <Typography variant="body1" sx={notFoundStyles.description}>
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<Home size={20} />}
            onClick={handleGoHome}
            sx={notFoundStyles.button}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
