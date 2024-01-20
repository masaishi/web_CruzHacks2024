'use client';

import SignIn from "@/pages/Dashboard";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/post/abc');
  };

  return (
    <div>
      
      <SignIn />
    </div>
  );
}
