import Box from '@mui/material/Box';
import Post from '@/components/Post';
import dummy_data from '@/temp/message.json';

export default function PostColumn(props) {
  if (props.comments == null) {
	return (
		<h1> Please Select Word</h1>	
	)
  }
  const posts = props.comments.map((post) => {
    return (
      <Post
        key={post['post_id'] + post['comment_id']}
        post={post}
      />
    );
  });

  return <Box>{posts}</Box>;
}
