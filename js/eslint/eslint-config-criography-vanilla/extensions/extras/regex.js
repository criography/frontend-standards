module.exports = {
    plugins : ['optimize-regex'],


    rules : {

        // This rule enforces an idiomatic and sometimes clearer usage of regexes.
        // https://github.com/BrainMaestro/eslint-plugin-optimize-regex/blob/master/docs/rules/optimize-regex.md
        'optimize-regex/optimize-regex' : 'error'

    }
};
