const isProd = process.env.NODE_ENV === 'production';
console.log('Config - process.env.NODE_ENV', process.env.NODE_ENV);
const isDev = !isProd;

module.exports = {
  isDev,
  isProd,
};
