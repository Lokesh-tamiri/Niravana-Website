/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'vectorlogo.zone',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org', 
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'www.sanity.io', 
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'astro.build',
                port: '',
            }
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.html$/,
            loader: 'html-loader',
        });
        return config;
    },
};

module.exports = nextConfig;
