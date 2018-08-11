module.exports = {
    extends: [
        'eslint-config-criography-vanilla',
        './extensions/base',
        './extensions/react',
        './extensions/essentials',
        './extensions/stronglyRequired',
        './extensions/required',
        './extensions/misc',
    ].map(require.resolve),
    rules: {}
};

