module.exports = {
    extends: [
        'eslint-config-criography-vanilla',
        './extensions/react',
        './extensions/a11y',
    ].map(require.resolve),
    rules: {}
};

