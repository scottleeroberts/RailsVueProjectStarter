module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    strict: 0,
    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['warn', 'never'],
    eqeqeq: ['warn', 'always'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
