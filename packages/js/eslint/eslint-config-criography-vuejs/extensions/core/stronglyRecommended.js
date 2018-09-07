module.exports = {
    rules : {
        // enforce attribute naming style on custom components in template
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md
        'vue/attribute-hyphenation' : 'error',


        // require or disallow a line break before tag's closing brackets
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-newline.md
        'vue/html-closing-bracket-newline' : [
            "error", {
                "singleline" : "never",
                "multiline"  : "always"
            }
        ],


        // require or disallow a space before tag's closing brackets
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-spacing.md
        'vue/html-closing-bracket-spacing' : [
            "error", {
                "startTag"       : "never",
                "endTag"         : "never",
                "selfClosingTag" : "always"
            }
        ],


        // enforce end tag style
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md
        'vue/html-end-tags' : 'error',


        // enforce consistent indentation in `<template>`
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md
        'vue/html-indent' : [
            "error", 4, {
                "attribute"                 : 1,
                "closeBracket"              : 0,
                "alignAttributesVertically" : true,
                "ignores"                   : []
            }
        ],


        // enforce self-closing style
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md
        'vue/html-self-closing' : [
            "error", {
                "html" : {
                    "void"      : "always",
                    "normal"    : "always",
                    "component" : "always"
                },
                "svg"  : "always",
                "math" : "always"
            }
        ],


        // enforce the maximum number of attributes per line
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
        'vue/max-attributes-per-line' : [
            'error', {
                "singleline" : 2,
                "multiline"  : {
                    "max"            : 1,
                    "allowFirstLine" : false
                }
            }
        ],


        // enforce unified spacing in mustache interpolations
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md
        'vue/mustache-interpolation-spacing' : ['error', 'always'],


        // enforce specific casing for the name property in Vue components
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md
        'vue/name-property-casing' : ["error", "PascalCase"],


        // disallow multiple spaces
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-multi-spaces.md
        'vue/no-multi-spaces' : 'error',


        // disallow variable declarations from shadowing variables declared in the outer scope
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-shadow.md
        'vue/no-template-shadow' : 'error',


        // enforce specific casing for the Prop name in Vue components
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/prop-name-casing.md
        'vue/prop-name-casing' : ["error", "camelCase"],


        // require default value for props
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-default-prop.md
        'vue/require-default-prop' : 'error',


        // require type definitions in props
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md
        'vue/require-prop-types' : 'error',


        // enforce `v-bind` directive style
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md
        'vue/v-bind-style' : ['error', 'shorthand'],


        // enforce `v-on` directive style
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md
        'vue/v-on-style' : ['error', 'shorthand'],


    }
};
