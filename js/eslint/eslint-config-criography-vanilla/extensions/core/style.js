module.exports = {
    rules: {
        // enforce line breaks after opening and before closing array brackets
        // http://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': ["error", { 
            multiline : true,
            minItems  : 3
        }],

        // enforce spacing inside array brackets
        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': ['error', 'never'],
        
        // enforce line breaks between array elements
        // http://eslint.org/docs/rules/array-element-newline
        'array-element-newline': ['error', {
            multiline: true,
            minItems: 3

        }],

        // enforce spacing inside single-line blocks
        // http://eslint.org/docs/rules/block-spacing
        'block-spacing': ['error', 'always'],

        // enforce one true brace style
        // https://eslint.org/docs/rules/brace-style
        'brace-style': ['error', '1tbs', { 
            allowSingleLine: true 
        }],

        // require camel case names
        // https://eslint.org/docs/rules/camelcase
        camelcase: ['error', {
            properties: 'always'
        }],

        // enforce or disallow capitalization of the first letter of a comment
        // http://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': ['off', 'never', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],

        // require trailing commas in multiline object literals
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'never'],

        // enforce spacing before and after comma
        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': ['error', {
            before: false, 
            after: true
        }],

        // enforce one true comma style
        // https://eslint.org/docs/rules/comma-style
        'comma-style': ['error', 'last'],

        // disallow padding inside computed properties
        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': ['error', 'always'],

        // enforces consistent naming when capturing the current execution context
        // https://eslint.org/docs/rules/consistent-this
        'consistent-this': ['error', '_this'],

        // enforce newline at the end of file, with no multiple empty lines
        // https://eslint.org/docs/rules/eol-last
        'eol-last': ['error', 'always'],

        // enforce spacing between functions and their invocations
        // http://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': ['error', 'never'],

        // requires function names to match the name of the variable or property to 
        // which they are assigned
        // http://eslint.org/docs/rules/func-name-matching
        'func-name-matching': ['off', 'always', {
            includeCommonJSModuleExports: false
        }],

        // require function expressions to have a name
        // http://eslint.org/docs/rules/func-names
        'func-names': ['error', 'as-needed'],

        // enforces use of function declarations or expressions
        // http://eslint.org/docs/rules/func-style
        'func-style': ['error', 'expression', { 
            allowArrowFunctions: true 
        }],

        // enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': ['error', 'multiline'],

        // Blacklist certain identifiers to prevent them being used
        // http://eslint.org/docs/rules/id-blacklist
        'id-blacklist': ['error', 'e', 'cb'],

        // this option enforces minimum and maximum identifier lengths
        // (variable names, property names etc.)
        // https://eslint.org/docs/rules/id-length
        'id-length': ['error', {
            min        : 2,
            exceptions : ['x', 'y', 'z', 'r']
        }],

        // require identifiers to match the provided regular expression
        // https://eslint.org/docs/rules/id-match
        'id-match': 'off',

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': ['error', 'beside'],
        
        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        indent: ['error', 2, {
            SwitchCase: 2,
            VariableDeclarator: { 
                'var'   : 2, 
                'let'   : 2, 
                'const' : 3 
            },
            outerIIFEBody: 2,
            MemberExpression: 2,
            FunctionDeclaration: {
                parameters: 2,
                body: 2
            },
            FunctionExpression: {
                parameters: 2,
                body: 2
            },
            CallExpression: {
                arguments: 2
            },
            ArrayExpression: 2,
            ObjectExpression: 2,
            ImportDeclaration: 2,
            flatTernaryExpressions: false,
            ignoredNodes: ['JSXElement', 'JSXElement *']
        }],

        // specify whether double or single quotes should be used in JSX attributes
        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['error', 'prefer-single'],

        // enforces spacing between keys and values in object literal properties
        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': ['error', {
            singleLine: {
                beforeColon: true,
                afterColon : true
            },
            multiLine: {
                beforeColon : true,
                afterColon  : true

            },
            align: {
                beforeColon : false,
                afterColon  : true,
                on          : "colon",
                mode        : "strict"
            }
        }],

        // require a space before & after certain keywords
        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],

        // enforce position of line comments
        // http://eslint.org/docs/rules/line-comment-position
        'line-comment-position': 'off',

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // http://eslint.org/docs/rules/linebreak-style
        'linebreak-style': ['error', 'unix'],

        // enforces empty lines around comments
        'lines-around-comment': ['error', {
            beforeBlockComment: true,
            afterBlockComment : false,
            beforeLineComment : true,
            afterLineComment  : false,
            allowBlockStart   : true,
            allowBlockEnd     : true,
            allowObjectStart  : true,
            allowObjectEnd    : true,
            allowArrayStart   : true,
            allowArrayEnd     : true,
            allowClassStart   : true,
            allowClassEnd     : true
        }],
        
        // require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': ['error', 'always', { 
            exceptAfterSingleLine: false 
        }],

        // specify the maximum depth that blocks can be nested
        // https://eslint.org/docs/rules/lines-around-directive
        'max-depth': ['error', 4],

        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        'max-len': ['error', {
            code                  : 100,
            tabWidth              : 4,
            comments              : 92,
            ignoreComments        : false,
            ignoreTrailingComments: false,
            ignoreUrls            : true,
            ignoreStrings         : true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals  : true
        }],

        // specify the max number of lines in a file
        // http://eslint.org/docs/rules/max-lines
        'max-lines': ['error', {
            max           : 300,
            skipBlankLines: false,
            skipComments  : false
        }],

        // specify the maximum depth callbacks can be nested
        // https://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': ['error', 4],

        // limits the number of parameters that can be used in the function declaration.
        // https://eslint.org/docs/rules/max-params
        'max-params': ['error', 3],

        // specify the maximum number of statement allowed in a function
        // https://eslint.org/docs/rules/max-statements
        'max-statements': ['error', 5],

        // restrict the number of statements per line
        // http://eslint.org/docs/rules/max-statements-per-line
        'max-statements-per-line': ['error', {max: 1}],

        // enforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': ['off', 'starred-block'],

        // require multiline ternary
        // http://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': ['error', 'always-multiline'],

        // require a capital letter for constructors
        // https://eslint.org/docs/rules/new-cap
        // overwritten by `babel/new-cap`
        'new-cap': ['off', {
            newIsCap          : true,
            newIsCapExceptions: [],
            capIsNew          : false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
        }],

        // disallow the omission of parentheses when invoking a constructor with no arguments
        // http://eslint.org/docs/rules/new-parens
        'new-parens': 'error',

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // http://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': ['error', { 
            ignoreChainWithDepth: 2 
        }],

        // disallow use of the Array constructor
        'no-array-constructor': 'error',

        // disallow use of bitwise operators
        // http://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'error',

        // disallow use of the continue statement
        // http://eslint.org/docs/rules/no-continue
        'no-continue': 'error',

        // disallow comments inline after code
        // https://eslint.org/docs/rules/no-inline-comments
        'no-inline-comments': 'off',

        // disallow if as the only statement in an else block
        // http://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'error',

        // disallow un-paren'd mixes of different operators
        // http://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': ['error', {
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: true
        }],

        // disallow mixed spaces and tabs for indentation
        // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': 'error',

        // disallow use of chained assignment expressions
        // http://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': 'error',

        // disallow multiple empty lines and only one newline at the end
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['error', { 
            max    : 6, 
            maxEOF : 1 
        }],

        // disallow negated conditions
        // http://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'off',

        // disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'error',

        // disallow use of the Object constructor
        // https://eslint.org/docs/rules/no-new-object
        'no-new-object': 'error',

        // disallow use of unary operators, ++ and --
        // http://eslint.org/docs/rules/no-plusplus
        'no-plusplus': ['error',{ 
            allowForLoopAfterthoughts: true 
        }],

        // disallow certain syntax forms
        // http://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // disallow tab characters entirely
        // https://eslint.org/docs/rules/no-tabs
        'no-tabs': 'error',

        // disallow the use of ternary operators
        // https://eslint.org/docs/rules/no-ternary
        'no-ternary': 'off',

        // disallow trailing whitespace at the end of lines
        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],

        // disallow dangling underscores in identifiers
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': ['error', {
            allow: ['_this'],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: false,
        }],

        // disallow the use of Boolean literals in conditional expressions
        // also, prefer `a || b` over `a ? a : b`
        // http://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': ['error', { 
            defaultAssignment: false 
        }],

        // disallow whitespace before properties
        // http://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // enforce the location of single-line statements
        // http://eslint.org/docs/rules/nonblock-statement-body-position
        // overridden by `bestPractices/curly`
        'nonblock-statement-body-position': 'off',

        // enforce line breaks between braces
        // http://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': ['error', {
            ObjectExpression : {multiline: true, minProperties: 3, consistent:true},
            ObjectPattern    : {multiline: true, minProperties: 3, consistent:true},
            ImportDeclaration: {multiline: true, minProperties: 3, consistent:true},
            ExportDeclaration: {multiline: true, minProperties: 3, consistent:true}
        }],
        
        // require padding inside curly braces
        // https://eslint.org/docs/rules/object-curly-spacing
        // overwritten by `babel/object-curly-spacing`
        'object-curly-spacing': ['off', 'never'],

        // enforce "same line" or "multiple line" on object properties.
        // http://eslint.org/docs/rules/object-property-newline
        'object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: true,
        }],

        // allow just one var statement per function
        // https://eslint.org/docs/rules/one-var
        'one-var': ['error', 'never'],

        // require a newline around variable declaration
        // http://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': ['error', 'always'],

        // require assignment operator shorthand where possible or prohibit it entirely
        // http://eslint.org/docs/rules/operator-assignment
        'operator-assignment': ['error', 'always'],

        // enforce operators to be placed before or after line breaks
        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': ['error', 'before'],

        // disallow padding within blocks
        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': ['error', {
            blocks  : 'never',
            classes : 'always',
            switches: 'never' 
        }],

        // Require or disallow padding lines between statements
        // http://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': ['error',
            // ensure lb after var declarations
            {blankLine: 'always', prev: ['import'], next: '*'},
            {blankLine: 'any', prev: ['import'], next: ['import']},    
            
            // ensure lb after var declarations
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},

            // ensure lb before `return`
            {blankLine: 'always', prev: '*', next: 'return'},
            
            // ensure lb after `break`
            {blankLine: 'always', prev: 'break', next: '*'},    
            
            // ensure lb after `multiline-block-like`
            {blankLine: 'always', prev: 'multiline-block-like', next: '*'},
            {blankLine: 'always', prev: '*', next: 'multiline-block-like'}, 
            
            // ensure lb after `multiline-block-like`
            {blankLine: 'always', prev: 'multiline-expression', next: '*'},
            {blankLine: 'always', prev: '*', next: 'multiline-expression'},
        ],

        // require quotes around object literal property names
        // http://eslint.org/docs/rules/quote-props.html
        'quote-props': ['error', 'as-needed', { 
            keywords: false, 
            unnecessary: true, 
            numbers: false 
        }],

        // specify whether double or single quotes should be used
        // https://eslint.org/docs/rules/quotes
        // overwritten by `babel/quotes`
        quotes: ['off', 'single', {
            avoidEscape          : true,
            allowTemplateLiterals: true
        }],

        // do not require jsdoc
        // http://eslint.org/docs/rules/require-jsdoc
        'require-jsdoc': ['error', {
            require : {
                'FunctionDeclaration'    : true,
                'MethodDefinition'       : true,
                'ClassDeclaration'       : true,
                'ArrowFunctionExpression': true,
                'FunctionExpression'     : true
            }  
        }],

        // require or disallow use of semicolons instead of ASI
        // https://eslint.org/docs/rules/semi
        semi: ['error', 'always'],

        // enforce spacing before and after semicolons
        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': ['error', { before: false, after: true }],

        // Enforce location of semicolons
        // http://eslint.org/docs/rules/semi-style
        'semi-style': ['error', 'last'],

        // requires object keys to be sorted
        // https://eslint.org/docs/rules/sort-keys
        'sort-keys': ['off', 'asc', { 
            caseSensitive: false, 
            natural: true 
        }],

        // sort variables within the same declaration block
        // https://eslint.org/docs/rules/sort-vars
        'sort-vars': 'off',

        // require or disallow space before blocks
        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': ['error', 'always'],

        // require or disallow space before function opening parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
            anonymous : 'never',
            named     : 'never',
            asyncArrow: 'always'
        }],

        // require or disallow spaces inside parentheses
        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': ['error', 'never'],

        // require spaces around operators
        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // http://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': ['error', {
            words    : true,
            nonwords : false,
            overrides: {}
        }],

        // require or disallow a space immediately following the // or /* in a comment
        // http://eslint.org/docs/rules/spaced-comment
        'spaced-comment': ['error', 'always', {
            line : {
                exceptions: ['-', '+'],
                markers   : ['=', '!']
            },
            block: {
                exceptions: ['-', '+'],
                markers   : ['=', '!'],
                balanced  : true
            }
        }],

        // Enforce spacing around colons of switch statements
        // http://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': ['error', { after: true, before: false }],

        // Require or disallow spacing between template tags and their literals
        // http://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': ['error', 'never'],

        // require or disallow the Unicode Byte Order Mark
        // http://eslint.org/docs/rules/unicode-bom
        'unicode-bom': ['error', 'never'],

        // require regex literals to be wrapped in parentheses
        // https://eslint.org/docs/rules/wrap-regex
        'wrap-regex': 'off'
    }
};
