/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/mega',
        destination: 'https://mega.nz/folder/ka52DbCY#N_bd9peiLSH4BjSMpvMugQ',
        permanent: false
      }
    ];
  }

}

module.exports = nextConfig
