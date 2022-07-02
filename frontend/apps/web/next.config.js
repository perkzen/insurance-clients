const withTM = require('next-transpile-modules')([
  'ui',
  'utils',
  'micro-frontends/manage-clients',
]);

module.exports = withTM({
  reactStrictMode: true,
});
