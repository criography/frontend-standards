module.exports = {
    extends: [
        'eslint-config-criography-vanilla',
        './extensions/base',
        './extensions/essential',
        './extensions/stronglyRecommended',
        './extensions/recommended',
        './extensions/misc',
    ].map(require.resolve),


    rules: {
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions' : [
            'error',
            'ignorePackages',
            {
                js  : 'never',
                mjs : 'never',
                jsx : 'never',
                vue : 'never',
            }
        ],
    },


    settings : {
        'import/resolver' : {
            node : {
                extensions : ['.js', '.jsx', '.vue']
            }
        },
    },


    overrides : [
        {
            files : ['*.vue'],
            rules : {
                indent : 'off'
            }
        }
    ]
};

