module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    "eslint:recommended" // 启用推荐的规则，报告一些常见的问题
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': [2, 'single'],
    'comma-dangle': 2,
    'no-unused-vars': 2,
    'space-before-function-paren': 0,
    'keyword-spacing': 2,
    'spaced-comment': 2,
    'eqeqeq': 2,
    'semi': [0, 'always'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
}
