module.exports = {
    extends : [
        './extensions/core/strict',
        './extensions/core/bestPractices',
        './extensions/core/possibleErrors',
        './extensions/core/style',
        './extensions/core/variables',
        './extensions/core/es6',
        './extensions/extras/imports',
        './extensions/extras/imports-arca',
        './extensions/extras/regex',
        './extensions/extras/promises',
        './extensions/extras/babel'
    ].map(require.resolve),

    parser : 'babel-eslint',

    parserOptions : {
        ecmaVersion : 2017,
        sourceType  : 'module',
        ecmaFeatures: {
            modules                     : true,
            experimentalObjectRestSpread: true
        }
    },


    env : {
        browser: true,
        node   : true,
        es6    : true
    },

    globals : {
        sleep : 1
    },

    rules : {}
};
