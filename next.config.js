/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/download-reddit',
        destination: 'https://mega.nz/folder/ka52DbCY#N_bd9peiLSH4BjSMpvMugQ',
        permanent: false
      },
      {
        source: '/download-facebook',
        destination: 'https://mega.nz/folder/ka52DbCY#N_bd9peiLSH4BjSMpvMugQ',
        permanent: false
      },
      {
        source: '/download-linkedin',
        destination: 'https://mega.nz/folder/ka52DbCY#N_bd9peiLSH4BjSMpvMugQ',
        permanent: false
      },
      {
        source: '/download-discord',
        destination: 'https://mega.nz/folder/ka52DbCY#N_bd9peiLSH4BjSMpvMugQ',
        permanent: false
      }
    ];
  }

}

module.exports = nextConfig
