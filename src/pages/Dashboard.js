'use client';
import React, { useState } from 'react'
import { Avatar, CssBaseline, Box, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { isMobile } from 'react-device-detect';

import GoogleSearchBar from '@/components/GoogleSearchBar';
import ColoredChips from '@/components/ColoredChips';
import PostColumn from '@/components/PostColumn';
import PieChart from '@/components/PieChart';
import Copyright from '@/components/Copyright';
import AskGPT from '@/components/AskGPT';


function Dashboard() {
  const content = 'Hi, how are you';
  const [clickedContentDashboard, setClickedContentDashboard] = useState(null);
  
  const handleContentClick = (clickedContentDashboard) => {
    setClickedContentDashboard(clickedContentDashboard);
    // console.log(clickedContentDashboard);
  };
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
          width={isMobile ? '70%' : '110%'}
          marginTop={5}
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
            width={isMobile ? "80%" : "80%"}
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
            <PostColumn clickedContentDashboard={handleContentClick} />
          </Box>

          {/* PieChart */}
          <Box
            width={isMobile ? "120%" : "100%"}
            
            sx={{
              flexDirection: isMobile ? 'row' : 'column',
            }}
          >
            <PieChart />
            
            <AskGPT prmpt={clickedContentDashboard} />
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
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}

export default Dashboard;
