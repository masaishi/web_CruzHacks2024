'use client';
import * as React from 'react';
import { Grid, Avatar, CssBaseline, Link, Box, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import GoogleSearchBar from '@/components/GoogleSearchBar';

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

// const defaultTheme = createTheme();

function Dashboard() {

  return (
    <Container >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center the content horizontally
          textAlign: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cruz Hack 2024
        </Typography>

        <Box
        width={'100%'}
        height={'75%'}
        marginTop={5}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '30%'
          }}
        >
          <Box width={'100%'} height={'75%'}>
            <Typography>Section </Typography>
          </Box>

          <Box width={'100%'} height={'75%'}>
            <Typography>Section </Typography>
          </Box>

          <Box width={'100%'} height={'75%'}>
            <Typography>Section </Typography>
          </Box>
        </Box>
        
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <Copyright />
      </Box>
    </Container>
  );
}

export default Dashboard;