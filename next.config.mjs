const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
    basePath: isProd ? "/impulzze" : "",
    assetPrefix: isProd ? "/impulzze/" : "",
};

export default nextConfig;
