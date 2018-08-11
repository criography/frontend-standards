module.exports = {
    rules : {
        // disallow asynchronous actions in computed properties
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md
        'vue/no-async-in-computed-properties' : 'error',


        // disallow duplication of field names
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-dupe-keys.md
        'vue/no-dupe-keys' : 'error',


        // disallow duplication of attributes
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-duplicate-attributes.md
        'vue/no-duplicate-attributes' : 'error',


        // disallow parsing errors in `<template>`
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md
        'vue/no-parsing-error' : [
            'error', {
                "abrupt-closing-of-empty-comment"                       : true,
                "absence-of-digits-in-numeric-character-reference"      : true,
                "cdata-in-html-content"                                 : true,
                "character-reference-outside-unicode-range"             : true,
                "control-character-in-input-stream"                     : true,
                "control-character-reference"                           : true,
                "eof-before-tag-name"                                   : true,
                "eof-in-cdata"                                          : true,
                "eof-in-comment"                                        : true,
                "eof-in-tag"                                            : true,
                "incorrectly-closed-comment"                            : true,
                "incorrectly-opened-comment"                            : true,
                "invalid-first-character-of-tag-name"                   : true,
                "missing-attribute-value"                               : true,
                "missing-end-tag-name"                                  : true,
                "missing-semicolon-after-character-reference"           : true,
                "missing-whitespace-between-attributes"                 : true,
                "nested-comment"                                        : true,
                "noncharacter-character-reference"                      : true,
                "noncharacter-in-input-stream"                          : true,
                "null-character-reference"                              : true,
                "surrogate-character-reference"                         : true,
                "surrogate-in-input-stream"                             : true,
                "unexpected-character-in-attribute-name"                : true,
                "unexpected-character-in-unquoted-attribute-value"      : true,
                "unexpected-equals-sign-before-attribute-name"          : true,
                "unexpected-null-character"                             : true,
                "unexpected-question-mark-instead-of-tag-name"          : true,
                "unexpected-solidus-in-tag"                             : true,
                "unknown-named-character-reference"                     : true,
                "end-tag-with-attributes"                               : true,
                "duplicate-attribute"                                   : true,
                "end-tag-with-trailing-solidus"                         : true,
                "non-void-html-element-start-tag-with-trailing-solidus" : false,
                "x-invalid-end-tag"                                     : true,
                "x-invalid-namespace"                                   : true
            }
        ],


        // disallow overwriting reserved keys
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-reserved-keys.md
        'vue/no-reserved-keys' : 'error',


        // enforce component's data property to be a function
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-shared-component-data.md
        'vue/no-shared-component-data' : 'error',


        // disallow side effects in computed properties
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-side-effects-in-computed-properties.md
        'vue/no-side-effects-in-computed-properties' : 'error',


        // disallow `key` attribute on `<template>`
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-key.md
        'vue/no-template-key' : 'error',


        // disallow mustaches in `<textarea>`
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md
        'vue/no-textarea-mustache' : 'error',


        // disallow unused variable definitions of v-for directives or scope attributes
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-vars.md
        'vue/no-unused-vars' : 'error',


        // require `v-bind:is` of `<component>` elements
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-component-is.md
        'vue/require-component-is' : 'error',


        // enforce render function to always return value
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-render-return.md
        'vue/require-render-return' : 'error',


        // require `v-bind:key` with `v-for` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md
        'vue/require-v-for-key' : 'error',


        // enforce props default values to be valid
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-valid-default-prop.md
        'vue/require-valid-default-prop' : 'error',


        // enforce that a return statement is present in computed property
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md
        'vue/return-in-computed-property' : 'error',


        // enforce valid template root
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md
        'vue/valid-template-root' : 'error',


        // enforce valid `v-bind` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md
        'vue/valid-v-bind' : 'error',


        // enforce valid `v-cloak` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md
        'vue/valid-v-cloak' : 'error',


        // enforce valid `v-else-if` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md
        'vue/valid-v-else-if' : 'error',


        // enforce valid `v-else` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md
        'vue/valid-v-else' : 'error',


        // enforce valid `v-for` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md
        'vue/valid-v-for' : 'error',


        // enforce valid `v-html` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md
        'vue/valid-v-html' : 'error',


        // enforce valid `v-if` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md
        'vue/valid-v-if' : 'error',


        // enforce valid `v-model` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md
        'vue/valid-v-model' : 'error',


        // enforce valid `v-on` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md
        'vue/valid-v-on' : 'error',


        // enforce valid `v-once` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md
        'vue/valid-v-once' : 'error',


        // enforce valid `v-pre` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md
        'vue/valid-v-pre' : 'error',


        // enforce valid `v-show` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md
        'vue/valid-v-show' : 'error',


        // enforce valid `v-text` directives
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md
        'vue/valid-v-text' : 'error'


    }
};
