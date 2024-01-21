/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        GPT_Secret: process.env.GPT_Secret,
        GPT_Name: process.env.GPT_Name,
    },
  };
  
  export default nextConfig;
  