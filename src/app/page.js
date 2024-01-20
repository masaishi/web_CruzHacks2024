'use client';

import Image from "next/image";
import styles from "./page.module.css";
import SignIn from "@/pages/Dashboard";
import { useRouter } from 'next/navigation';
import { Link } from "@mui/material";

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
