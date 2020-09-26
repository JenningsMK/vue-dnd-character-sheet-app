module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'vue/attributes-order': 'warn',
    'vue/no-confusing-v-for-v-if': 'warn',
    'vue/no-v-html': 'warn',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'warn',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1
      }
    ],
    'vue/html-indent': [ 'error', 'tab'],
    'vue/html-self-closing': [ 'warn', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      }
    }]
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],

  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript'
  ]
};
