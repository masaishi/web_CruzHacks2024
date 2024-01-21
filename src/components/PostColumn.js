import Box from '@mui/material/Box';
import Post from '@/components/Post';
import dummy_data from '@/temp/message.json';

export default function PostColumn(props) {
  const posts = dummy_data.map((post) => {
    console.log(post);
    return (
      <Post
        key={post['post_id'] + post['comment_id']}
        post={post['sentences']}
      />
    );
  });

  return <Box>{posts}</Box>;
}
