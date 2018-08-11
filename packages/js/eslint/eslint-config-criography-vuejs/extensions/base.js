module.exports = {
    rules : {
        // Support comment-directives in <template>
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/comment-directive.md
        'vue/comment-directive' : 'error',


        // prevent variables used in JSX to be marked as unused
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/jsx-uses-vars.md
        'vue/jsx-uses-vars' : 'error',

    }
};
