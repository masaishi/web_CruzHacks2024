'use client';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Avatar, CssBaseline, Box, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import GoogleSearchBar from '@/components/GoogleSearchBar';
import ColoredChips from '@/components/ColoredChips';
import PostColumn from '@/components/PostColumn';
import PieChart from '@/components/PieChart';
import YellowSlugLoader from '@/components/YellowSlugLoader';
import AskGPT from '@/components/AskGPT';

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
  };

  return (
    <Container>
      <CssBaseline />
      <Box pt={5} display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Box ml={'4rem'}>
          <Avatar
            alt='Sitegeist Logo'
            src='https://web-cruz-hacks2024.vercel.app/Sitegeist_icon.png'
            sx={{
              width: '3.5rem',
              height: '3.5rem',
            }}
          />
        </Box>
        <Typography component='h1' variant='h5' sx={{ ml: '1.5rem' }}>
          Sitegeist
        </Typography>
      </Box>
      <Box
        width={'100%'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          marginLeft={5} //FIXME
          width={isMobile ? '70%' : '100%'}
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
            <GoogleSearchBar
              search={search}
              searchWord={searchWord}
              setSearchWord={setSearchWord}
            />
            <ColoredChips setSelectedWord={setSelectedWord} />
          </Box>

          {/*     <Box
      boxShadow={
        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }
      outline={'solid'}
      outlineColor={'#f5f9ff'}
    > */}

          {/* Posts */}
          <Box width={'100%'} height={'100%'} className='component' mt='2.5rem'>
            <Typography component='h1' variant='h5'>
              {selectedWord['word']
                ? 'Selected `' + selectedWord['word'] + '`'
                : 'Please select a word'}
            </Typography>
            <Box
              height={'130vh'}
              sx={{ overflowY: 'auto', mt: '1.5rem' }}
            >
              {isCommentsLoading || comments.length === 0 ? (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  pt={5}
                  gap={3}
                >
                  <YellowSlugLoader />
                </Box>
              ) : (
                <PostColumn
                  comments={comments}
                  clickedContentDashboard={handleContentClick}
                />
              )}
            </Box>
          </Box>

          {/* PieChart */}
          <Box
            width={isMobile ? '100%' : '100%'}
            sx={{
              flexDirection: isMobile ? 'row' : 'column',
              mt: '3rem',
            }}
          >
            <Box sx={{ mb: '3rem' }}>
              <PieChart selectedWord={selectedWord} />
            </Box>
            <Typography component='h1' variant='h5'>Suggestions</Typography>
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
