/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'default',
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tecdn.b-cdn.net',
          pathname: '/img/new/standard/nature/**',
        },
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'readymadeui.com', 
          pathname: '/images/**',      
        },
      ],
    },
  };
  
  export default nextConfig;
  