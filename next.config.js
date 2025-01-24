/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheHandler: require.resolve('./cache-handler.js'), // Ruta al manejador de caché
  cacheMaxMemorySize: 50, // Tamaño máximo de la caché en MB
  env: {
    USER_POOL_CLIENT_ID: process.env.USER_POOL_CLIENT_ID,
    USER_POOL_ID: process.env.USER_POOL_ID,
    AWS_REGION: process.env.AWS_REGION,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
    URL: process.env.URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
