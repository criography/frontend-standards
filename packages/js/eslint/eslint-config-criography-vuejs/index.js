module.exports = {
    extends: [
        'eslint-config-criography-vanilla',
        './extensions/base',
        './extensions/essential',
        './extensions/stronglyRequired',
        './extensions/required',
        './extensions/misc',
    ].map(require.resolve),
    rules: {}
};

