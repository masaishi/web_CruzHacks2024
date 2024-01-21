import Box from '@mui/material/Box';

import Chip from '@mui/material/Chip';
import { useState, useEffect } from 'react';

const samples = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];
function putKeywordIntoList(data) {
  let keywords = [];
  for (let i = 0; i < data.length; i++) {
    keywords.push(data[i]['word']);
  }
  return keywords;
}

function createColoredChips(keywords) {
  let chip_color = [];
  let colored_chips = [];

  keywords.forEach((element) => {
    switch (element) {
      case 'positive':
        chip_color.push('success');
        break;
      case 'negative':
        chip_color.push('error');
        break;
      default:
        chip_color.push('info');
    }
  });

  for (let i = 0; i < keywords.length; i++) {
    colored_chips.push(
      <Chip
        key={keywords[i]}
        label={keywords[i]}
        variant='outlined'
        color={chip_color[i]}
        onClick={() => console.log('clicked')}
        clickable
      />
    );
  }
  return colored_chips;
}

export default function ColoredChips() {
  const [data, setData] = useState([]);
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api-cruzhacks2024.onrender.com/word_freq?limit=30'
      );
      const data = await response.json();
      setData(data);
      setKeywords(putKeywordIntoList(data));
    })();
  }, []);

  return (
    <Box m='0.50rem'>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          alignContent: 'space-between',
          gap: 1,
        }}
      >
        {createColoredChips(keywords)}
      </Box>
    </Box>
  );
}
