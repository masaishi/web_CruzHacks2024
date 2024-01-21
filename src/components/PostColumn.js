import Box from '@mui/material/Box';
import Post from '@/components/Post';

export default function PostColumn(props) {
  if (props.comments == null) {
    return <Box></Box>;
  }
  const posts = props.comments.map((post) => {
    return (
      <Post
        key={post['post_id'] + post['comment_id']}
        post={post}
        onPostClick={props.clickedContentDashboard} // Pass the prop here
      />
    );
  });

  return (
    <Box
      width={'100%'}
      // height={'80%'}
      maxWidth={'28vw'}
      // maxHeight={'60vh'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      {posts}
    </Box>
  );
}
