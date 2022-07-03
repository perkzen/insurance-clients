const withTM = require('next-transpile-modules')([
  'ui',
  'react-query',
  'manage-clients',
]);

module.exports = withTM({
  reactStrictMode: true,
});
