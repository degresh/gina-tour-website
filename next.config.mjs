/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'm4odkdecwcrfutng.public.blob.vercel-storage.com',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'tecdn.b-cdn.net',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'mdbcdn.b-cdn.net',
                pathname: '/**'
            }
        ],
    },
};

export default nextConfig;
