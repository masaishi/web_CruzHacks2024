'use client';
import React, { useEffect, useState } from 'react';
import { Avatar, CssBaseline, Box, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { isMobile } from 'react-device-detect';

import GoogleSearchBar from '@/components/GoogleSearchBar';
import ColoredChips from '@/components/ColoredChips';
import PostColumn from '@/components/PostColumn';
import PieChart from '@/components/PieChart';
import Copyright from '@/components/Copyright';
import YellowSlugLoader from '@/components/YellowSlugLoader';
import AskGPT from '@/components/AskGPT';
import yellow_slug from '@/assets/yellow_slug.json';

// const defaultTheme = createTheme();

function Dashboard() {
  const [searchWord, setSearchWord] = useState('');
  const [selectedWord, setSelectedWord] = useState({});
  const [isCommentsLoading, setIsCommentsLoaded] = useState(false);
  const [comments, setComments] = useState([]);
  const [clickedContentDashboard, setClickedContentDashboard] = useState(null);

  const handleContentClick = (clickedContentDashboard) => {
    setClickedContentDashboard(clickedContentDashboard);
  };

  useEffect(() => {
    console.log('selectedWord', selectedWord);
    if (selectedWord.length === 0) {
      return;
    }
    if (isCommentsLoading) {
      return;
    }
    setIsCommentsLoaded(true);
    try {
      (async () => {
        const response = await fetch(
          `https://api-cruzhacks2024.onrender.com/examples/${selectedWord['word']}`
        );
        const data = await response.json();
        setComments(data['examples']);

        setIsCommentsLoaded(false);
      })();
    } catch (error) {
      console.log(error);
      setIsCommentsLoaded(false);
    }

  }, [selectedWord]);

  const search = async () => {
    const response = await fetch(
      `https://api-cruzhacks2024.onrender.com/word/${searchWord}`
    );
    const data = await response.json();
    setSelectedWord(data);
  }

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
            width={isMobile ? '80%' : '80%'}
            height={'75%'}
            sx={{
              flexDirection: isMobile ? 'row' : 'column',
            }}
          >
            <GoogleSearchBar search={search} searchWord={searchWord} setSearchWord={setSearchWord} />
            <ColoredChips setSelectedWord={setSelectedWord} />
          </Box>

          {/* Posts */}
          <Box width={'100%'} height={'100vh'} className='component' sx={{ overflowY: 'auto' }}>
            <Typography component='h1' variant='h5'>
              {selectedWord['word'] ? "Selected `" + selectedWord['word'] + "`" : 'Please select a word'}
            </Typography>
            {isCommentsLoading || comments.length === 0 ? (
              <YellowSlugLoader />
            ) : (
              <PostColumn comments={comments} clickedContentDashboard={handleContentClick} />
            )}
          </Box>

          {/* PieChart */}
          <Box
            width={isMobile ? '100%' : '100%'}
            sx={{
              flexDirection: isMobile ? 'row' : 'column',
            }}
          >
			      <PieChart selectedWord={selectedWord} />
            
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
