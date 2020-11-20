console.log('URL: ', process.env.STRAPI_URL);
console.log('ADMIN: ', process.env.STRAPI_ADMIN_URL);

module.exports = ({ env }) => ({
  url: env('STRAPI_URL'),
  admin: {
    url: env('STRAPI_ADMIN_URL')
  }
});
