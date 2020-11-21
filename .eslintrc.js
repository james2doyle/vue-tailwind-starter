module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs', {
      allowSingleLine: false
    }],
    'prefer-const': [2, {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    'object-shorthand': [2, 'always', {
      avoidQuotes: true,
      avoidExplicitReturnArrows: true
    }],
    camelcase: 1,
    complexity: [2, { max: 10 }],
    'computed-property-spacing': [2, 'never'],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-debugger': 1,
    curly: 2,
    'eol-last': 2,
    eqeqeq: [2, 'smart'],
    indent: [2, 2, {
      MemberExpression: 1,
      ObjectExpression: 1
    }],
    'max-depth': [1, 3],
    'max-len': 0,
    'max-statements': [1, 60],
    'max-nested-callbacks': [2, 3],
    'new-cap': 1,
    'no-else-return': 2,
    'no-plusplus': 0,
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-unreachable': 2,
    'no-unexpected-multiline': 2,
    'no-unused-vars': [2, { ignoreRestSiblings: true }],
    'no-empty-function': [1, { allow: ['arrowFunctions'] }],
    'no-use-before-define': [2, 'nofunc'],
    'no-var': 2,
    'object-curly-spacing': [1, 'always', { objectsInObjects: true }],
    'padding-line-between-statements': [
      1,
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    quotes: [1, 'single', 'avoid-escape'],
    'quote-props': [1, 'as-needed'],
    semi: [2, 'always'],
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    'space-unary-ops': 2,
    'space-in-parens': [1, 'never'],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {
      anonymous: 'never',
      named: 'never'
    }],
    'no-unused-labels': 1,
    'no-restricted-imports': 0,
    // Vue rules:
    'vue/require-name-property': 2,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-useless-v-bind': 2,
    'vue/no-useless-mustaches': [2, {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/no-bare-strings-in-template': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
