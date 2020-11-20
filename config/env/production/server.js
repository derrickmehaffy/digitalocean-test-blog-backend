console.log('URL: ', process.env.STRAPI_URL);

module.exports = ({ env }) => ({
  url: env('STRAPI_URL')
});
