/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/facebook',
                destination: 'http://facebook.com/SarasaviGeeSisilaOfficial',
                permanent: true,
            },
            {
                source: '/instagram',
                destination: 'https://www.instagram.com/_sarasavigeesisila_',
                permanent: true,
            },
            {
                source: '/youtube',
                destination: 'http://youtube.com/@bess_official',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig

