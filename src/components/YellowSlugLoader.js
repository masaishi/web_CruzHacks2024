import Lottie from 'react-lottie';
import Box from '@mui/material/Box';
import yellow_slug from '@/assets/yellow_slug.json';

export default function YellowSlugLoader() {
  const yellowSlugOptions = {
    loop: true,
    autoplay: true,
    animationData: yellow_slug,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box
      border={'double'}
      borderColor={'yellow'}
      height={'11rem'}
      width={'11rem'}
      borderRadius={'50%'}
      overflow={'hidden'}
	  pb={5.5}
    >
      <Lottie options={yellowSlugOptions} />
    </Box>
  );
}
