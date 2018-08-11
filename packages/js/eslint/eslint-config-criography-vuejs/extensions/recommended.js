module.exports = {
    rules : {
        // enforce order of attributes
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attributes-order.md
        'vue/attributes-order' : [
            'error', {
                order : [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    ['BINDING', 'OTHER_ATTR'],
                    'EVENTS',
                    'CONTENT'
                ]
            }
        ],


        // enforce quotes style of HTML attributes
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-quotes.md
        'vue/html-quotes' : ['error', 'single'],


        // disallow use of v-html to prevent XSS attack
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-v-html.md
        'vue/no-v-html' : 'error',


        // enforce order of properties in components
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md
        'vue/order-in-components' : [
            "error", {
                "order" : [
                    "el",
                    "name",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    "inheritAttrs",
                    "model",
                    ["props", "propsData"],
                    "data",
                    "computed",
                    "watch",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    ["template", "render"],
                    "renderError"
                ]
            }
        ],


        // enforce usage of `this` in template
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/this-in-template.md
        'vue/this-in-template' : [2, 'never']




    }
};
