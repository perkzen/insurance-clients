const withTM = require('next-transpile-modules')([
  'ui',
  'utils',
  'manage-clients',
]);

module.exports = withTM({
  reactStrictMode: true,
});
