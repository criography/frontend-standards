module.exports = {
    parser: 'babel-eslint',
    
    plugins: [
        'babel'
    ],
    
    rules: {
        // require a capital letter for constructors
        // https://eslint.org/docs/rules/new-cap
        // babel/new-cap: Ignores capitalized decorators (@Decorator)
        'babel/new-cap': ['error', {
            newIsCap          : true,
            newIsCapExceptions: [],
            capIsNew          : false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
        }],

        
        // disallow this keywords outside of classes or class-like objects
        // https://eslint.org/docs/rules/no-invalid-this
        // babel/no-invalid-this: doesn't fail when inside class properties:
        // ``` 
        // class A { 
        //     a = this.b; 
        // }) 
        // ```
        'babel/no-invalid-this'     : 'error',
        

        // require padding inside curly braces
        // https://eslint.org/docs/rules/object-curly-spacing
        // babel/object-curly-spacing: doesn't complain about: 
        // `export x from 'mod';`       or 
        // `export * as x from 'mod';`
        'babel/object-curly-spacing': ['error', 'never'],

        
        // specify whether double or single quotes should be used
        // https://eslint.org/docs/rules/quotes
        // babel/quotes: doesn't complain about JSX fragment shorthand syntax
        'babel/quotes'              : ['error', 'single', {
            avoidEscape          : true,
            allowTemplateLiterals: true
        }],


        // require or disallow use of semicolons instead of ASI
        // https://eslint.org/docs/rules/semi
        // babel/semi: doesn't fail when using 
        // ` for await (let something of {}) `
        // Includes class properties
        'babel/semi' : ['off', 'always'],
    }
};
