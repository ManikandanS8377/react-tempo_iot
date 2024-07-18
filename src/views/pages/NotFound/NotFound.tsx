import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import  image_not_found  from '../../../assets/images/page_not_found.gif'

export default function NotFound() {
    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate('/');
    };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
        <img
        src={image_not_found}
        alt="404 Not Found"
        style={{ maxWidth: '30rem', height: '20rem', marginBottom: '2rem' }}
      />
      {/* <Typography variant="h1" gutterBottom>
        404
      </Typography> */}
      <Typography variant="h4" gutterBottom>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Home
      </Button>
    </Box>
  );
}
