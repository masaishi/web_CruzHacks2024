import Lottie from 'react-lottie';
import yellow_slug from '@/assets/yellow_slug.json';

export default function YellowSlugLoader() {
	const yellowSlugOptions = {
		loop: true,
		autoplay: true,
		animationData: yellow_slug,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

  return (
    <Lottie
      options={yellowSlugOptions}
      height={'100%'}
      width={'100%'}
    />
  );
}