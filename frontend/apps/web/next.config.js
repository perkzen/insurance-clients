const withTM = require('next-transpile-modules')([
    'ui',
    'react-query',
    'manage-clients',
    "manage-insurances",
    "manage-damage-claims"
]);

module.exports = withTM({
    reactStrictMode: true,
});
