module.exports = {
    rules : {
        // disable original rule
        // http://eslint.org/docs/rules/require-jsdoc
        'require-jsdoc' : ['off'],


        // enforce specific casing for the component naming style in template
        // https://github.com/MaienM/eslint-plugin-require-jsdoc-except/blob/master/README.md
        'require-jsdoc-except/require-jsdoc' : [
            'error', {
                require : {
                    FunctionDeclaration     : true,
                    MethodDefinition        : true,
                    ClassDeclaration        : true,
                    ArrowFunctionExpression : true,
                    FunctionExpression      : true
                },
                ignore  : [
                    'data',
                    'mounted',
                    'render',
                    'beforeCreate',
                    'created',
                    'beforeMount',
                    'mounted',
                    'beforeUpdate',
                    'beforeDestroy',
                    'updated',
                    'destroyed'
                ]
            }
        ]


    }
};
