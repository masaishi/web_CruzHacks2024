import Box from '@mui/material/Box';
import Post from '@/components/Post';
import dummy_data from '@/temp/message.json';

export default function PostColumn(props) {
  const posts = dummy_data.map((post) => {
    return <Post
              post={post['sentences']}
              clickedContentDashboard={props.clickedContentDashboard}
            />
  });

  return <Box>{posts}</Box>;
}
