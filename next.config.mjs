import nextra from 'nextra';
/** @type {import('next').NextConfig} */





const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.datocms-assets.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'nextra.site',
                port: '',
                pathname: '/**',
            },
        ],
    },
};



const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

export default withNextra(nextConfig)
