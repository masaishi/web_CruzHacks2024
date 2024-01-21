import Box from '@mui/material/Box';

import Chip from '@mui/material/Chip';
import { useState, useEffect } from 'react';

function putKeywordIntoList(data) {
  let keywords = [];
  for (let i = 0; i < data.length; i++) {
    keywords.push(data[i]['word']);
  }
  return keywords;
}

function calculateAvgSentiment(element) {
  console.log('Element:', element);
  let total_num = 0;
  let sentiment = '';

  total_num += element['neutral_num'];
  total_num += element['positive_num'];
  total_num += element['negative_num'];
  let positive_ratio = element['positive_num'] / total_num;
  let negative_ratio = element['negative_num'] / total_num;
  let max_ratio = Math.max(positive_ratio, negative_ratio);

  if (max_ratio == positive_ratio) {
    sentiment = 'positive';
  } else {
    sentiment = 'negative';
  }
  return sentiment;
}

function createColoredChips(data, keywords, setSelectedWord) {
  let chip_color = [];
  let colored_chips = [];
  let sentiment = 'neutral';

  data.forEach((element) => {
    sentiment = calculateAvgSentiment(element);
    switch (sentiment) {
      case 'positive':
        chip_color.push('success');
        break;
      case 'negative':
        chip_color.push('error');
        break;
      case 'neutral':
        chip_color.push('info');
    }
  });

  for (let i = 0; i < data.length; i++) {
    colored_chips.push(
      <Chip
        key={keywords[i]}
        label={keywords[i]}
        variant='outlined'
        color={chip_color[i]}
        onClick={() => setSelectedWord(data[i])}
        clickable
      />
    );
  }
  return colored_chips;
}

export default function ColoredChips(props) {
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
        {createColoredChips(data, keywords, props.setSelectedWord)}
      </Box>
    </Box>
  );
}
