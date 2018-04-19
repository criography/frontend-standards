module.exports = {
    plugins : ['arca'],

    rules : {

        // ensure that curly braces keep the code flow easy to read
        // https://github.com/arcanis/eslint-plugin-arca/blob/master/docs/rules/curly.md
        'arca/curly' : 'off',


        // require from keywords to be aligned
        // https://github.com/arcanis/eslint-plugin-arca/blob/master/docs/rules/import-align.md
        'arca/import-align' : 'error',


        // ensure that each import in the file is correctly ordered relative to the others
        // https://github.com/arcanis/eslint-plugin-arca/blob/master/docs/rules/import-ordering.md
        'arca/import-ordering' : 'off',


        // enforce the use of melted constructs when possible
        // https://github.com/arcanis/eslint-plugin-arca/blob/master/docs/rules/melted-constructs.md
        'arca/melted-constructs' : 'off',


        // require an empty newline after an import section
        // https://github.com/arcanis/eslint-plugin-arca/blob/master/docs/rules/newline-after-import-section.md
        'arca/newline-after-import-section' : 'off',


        // disallow default exports
        // https://github.com/arcanis/eslint-plugin-arca/blob/master/docs/rules/no-default-export.md
        'arca/no-default-export' : 'off'
    }
};
