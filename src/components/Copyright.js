import * as React from 'react';
import { Link, Box, Typography } from '@mui/material';


const styles = {
  copyright: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    padding: '1rem',
  },
};

function Copyright(props) {
  return (
    <Box sx={styles.copyright}>
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