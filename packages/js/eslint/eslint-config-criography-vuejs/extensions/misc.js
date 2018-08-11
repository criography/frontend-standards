module.exports = {
    rules : {
        // enforce specific casing for the component naming style in template
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/component-name-in-template-casing.md
        'vue/component-name-in-template-casing' : [
            "error",
            "PascalCase",
            {
                "ignores" : [
                    'router-link',
                    'router-view'
                ]
            }
        ],


        // enforce consistent indentation in `<script>`
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
        'vue/script-indent' : [ "error", 4, {
            "baseIndent" : 1,
            "switchCase" : 1,
            "ignores"    : []
        }],


    }
};
