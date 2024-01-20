'use client';
import * as React from 'react';
import { Avatar, CssBaseline, Box, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { isMobile } from 'react-device-detect';

import GoogleSearchBar from '@/components/GoogleSearchBar';
import ColoredChips from '@/components/ColoredChips';
import PostColumn from '@/components/PostColumn';
import PieChart from '@/components/PieChart';
import Copyright from '@/components/Copyright';

function Dashboard() {
  return (
    <Container>
      <CssBaseline />
      <Box
        width={'100%'}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <SearchIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Cruz Hack 2024
        </Typography>
        <Box
          width={isMobile ? '80%' : '100%'}
          marginTop={isMobile ? 0: 5}
          className='flex-container'
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '5%',
          }}
        >
          {/* GoogleSearchBar */}
          <Box
            marginTop={5}
            width={isMobile ? "80%" : "100%"}
            height={"75%"}
            
            sx={{
              flexDirection: isMobile ? 'row' : 'column',
            }}
          >
            <GoogleSearchBar />
            <ColoredChips />
          </Box>

          {/* Posts */}
          <Box width={'100%'} height={'75%'} className='component'>
            <PostColumn />

          </Box>

          {/* PieChart */}
          <Box
            width={isMobile ? "120%" : "100%"}
            
            sx={{
              flexDirection: isMobile ? 'row' : 'column',
            }}
          >
            <PieChart />
          </Box>
        </Box>
        {/* <Box
          sx={{
            flexShrink: 0,
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          <Copyright />
        </Box> */}
      </Box>
    </Container>
  );
}

export default Dashboard;
