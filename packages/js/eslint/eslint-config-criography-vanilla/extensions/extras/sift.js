module.exports = {
    plugins : ['sift'],


    // https://github.com/noahgrant/eslint-plugin-sift
    rules : {
        // Whereas the original rule's {multiline: true} option only checks
        // for newlines within array elements, this rule also checks for
        // newlines between elements
        'sift/array-element-newline' : [
            'error',
            {
                multiline : true
            }
        ],


        // Whereas the original rule's multiline option checked for newlines
        // between function parameters, this rule also checks for newlines within
        // function parameters. It also falls back to consistent behavior if there
        // is just a single parameter or if any of the parameters are node types
        // that generally look good not forced onto new lines, like objects, arrays,
        // or functions blocks.
        'sift/function-paren-newline' : ['error', 'multiline'],


        // This follows the original rule of requiring spaces around operators,
        // but adds the exception of default paramters.
        'sift/space-infix-ops' : 'error',


        // The original rule allowed for any prop with the configured prefix
        // (default on) to have a function prop that also started with on, which
        // led to some undesirable linting errors for unreserved React events
        'sift/jsx-handler-names' : 'off'
    }
};
