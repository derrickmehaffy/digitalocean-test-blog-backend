module.exports = ({ env }) => ({
  url: env('STRAPI_URL'),
  admin: {
    autoOpen: false
  }
});
