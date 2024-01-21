import { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

/**
 * Post component.
 *
 * @param {Object} props The properties passed to the component.
 * @param {Object} props.post The post data containing sentence_id, sentiment, sentiment_score, and sentence_text.
 *
 * @returns {JSX.Element} The rendered Post component.
 */

let sentiment_map = {
  joy: 'positive',
  surprise: 'positive',
  neutral: 'neutral',
  sadness: 'negative',
  fear: 'negative',
  disgust: 'negative',
};

function highlight_sentence(sentence_text, sentiment) {
  let text_color = 'black';
  switch (sentiment_map[sentiment]) {
    case 'positive':
      text_color = 'green';
      break;
    case 'neutral':
      text_color = 'black';
      break;
    case 'negative':
      text_color = 'red';
      break;
  }
  return (
    <Typography color={text_color} display={'inline'}>
      {sentence_text}
    </Typography>
  );
}

function highlight_post(post) {
  let colored_post = [];

  post.forEach((sentence) => {
    const sentence_id = sentence[0];
    const sentiment = sentence[1];
    const sentiment_score = sentence[2];
    const sentence_text = sentence[3] + ' ';

    colored_post.push(highlight_sentence(sentence_text, sentiment));
  });

  return colored_post;
}

function PostContent(post) {
  let ResultPostContent = [];

  post.forEach((sentence) => {
    const sentence_text = sentence[3] + ' ';
    ResultPostContent.push(sentence_text);
  });
  return ResultPostContent;
}

export default function Post(props) {
  const [clickedContent, setClickedContent] = useState(null);
  
  const handlePostClick = () => {
    // console.log("Clicked");
    setClickedContent(PostContent(props.post));
    // console.log(clickedContent);
    if (typeof props.clickedContentDashboard === 'function') {
      props.clickedContentDashboard(clickedContent);
    }
  };

  return (
    <Box
      w={'100%'}
      my={1}
      p={'0.5rem'}
      borderRadius={2}
      bgcolor={'#f5f9ff'}
      boxShadow={
        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }
      onClick={handlePostClick}
    >
      <Typography variant='p'>{highlight_post(props.post)}</Typography>
    </Box>
  );
}
