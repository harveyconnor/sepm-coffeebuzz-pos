module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        projectName: 'app',
      },
    ],
    'import/no-extraneous-dependencies': 0
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  plugins: [
    'graphql',
  ],
};
