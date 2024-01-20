import * as React from 'react';
import { Link, Box, Typography } from '@mui/material';

function Copyright(props) {
  return (
    <Box marginBottom={1}>
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default Copyright;