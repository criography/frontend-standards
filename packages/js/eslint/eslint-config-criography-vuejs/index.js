module.exports = {
    extends: [
        'eslint-config-criography-vanilla',
        './extensions/base',
        './extensions/essential',
        './extensions/stronglyRecommended',
        './extensions/recommended',
        './extensions/misc',
    ].map(require.resolve),
    rules: {}
};

