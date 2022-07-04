const withTM = require('next-transpile-modules')([
    'ui',
    'react-query',
    'manage-clients',
    "manage-insurances"
]);

module.exports = withTM({
    reactStrictMode: true,
});
