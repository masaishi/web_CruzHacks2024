'use client';
import * as React from 'react';
import { Avatar, CssBaseline, Link, Box, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import GoogleSearchBar from '@/component/GoogleSearchBar';

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
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cruz Hack 2024
        </Typography>
        <Box margin={10}>
          <GoogleSearchBar />
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