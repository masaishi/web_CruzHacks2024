import { useState } from 'react';
import { Typography, Button } from '@mui/material';
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

function highlight_sentence(sentence_text, sentiment, sentence_id) {
  let text_color = 'black';
  switch (sentiment) {
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
    <Typography key={sentence_id} color={text_color} display={'inline'}>
      {sentence_text}{' '}
    </Typography>
  );
}

function highlight_post(post) {
  let colored_post = [];

  post.forEach((sentence) => {
    colored_post.push(highlight_sentence(sentence['text'], sentence['label'], "post" + sentence['sentence_id'] + sentence['comment_id']));
  });

  return colored_post;
}

function PostContent(post) {
  let ResultPostContent = [];

  post.forEach((sentence) => {
    ResultPostContent.push(sentence['text'] + ' ');
  });
  return ResultPostContent;
}

export default function Post(props) {
  const [clickedContent, setClickedContent] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const ResultPostContent = PostContent(props.post);
  const MAX_LENGTH = 0.003;

  const handlePostClick = () => {
    setClickedContent(PostContent(props.post));
    props.onPostClick(clickedContent);
  };

  return (
    <Box
      w={'100%'}
      my={1}
      px={'0.5rem'}
      py={'2rem'}
      borderRadius={2}
      bgcolor={'#f5f9ff'}
      boxShadow={
        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }
      onClick={handlePostClick}
    >
      <Typography variant='p'>
      {highlight_post(props.post)}
      {ResultPostContent.slice(0, MAX_LENGTH)}
      {ResultPostContent.length > MAX_LENGTH && !showMore && (
        <>
          {'... '}
          <Button onClick={() => setShowMore(true)}>See More</Button>
        </>
      )}
      {showMore && (
        <>
          {ResultPostContent}
          <Button onClick={() => setShowMore(false)}>See Less</Button>
        </>
      )}
    </Typography>
    </Box>
  );
}
