module.exports = {
    extends: [
        './react/general',
        './react/jsx',
    ].map(require.resolve),
    
    plugins: [
        'react'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },

    // View link below for react rules documentation
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    rules : {},

    settings: {
        'import/resolver'   : {
            node: {
                extensions: ['.js', '.jsx', '.json']
            }
        },
        react               : {
            pragma : 'React',
            version: '16.3'
        },
        propWrapperFunctions: [
            'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
            'exact',            // https://www.npmjs.com/package/prop-types-exact
            'Object.freeze'     // https://tc39.github.io/ecma262/#sec-object.freeze
        ]
    }
};
