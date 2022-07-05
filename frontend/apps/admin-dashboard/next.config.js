const withTM = require('next-transpile-modules')([
    'ui',
    'react-query',
    "shared-types",
    'manage-clients',
    "manage-insurances",
    "manage-damage-claims"
]);

module.exports = withTM({
    reactStrictMode: true,
});
