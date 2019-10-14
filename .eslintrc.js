module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "css-rcurlyexpected": 0,
    "no-restricted-globals": ["error", "isFinite", "isNaN"],
    "max-len": [2, {
      "ignoreComments": true,
      "ignoreUrls": true,
      "code": 120
    }],
    "no-shadow": 0,
    "class-methods-use-this": 0,
    "camelcase": 0,
    "no-underscore-dangle": "off",
    "template-curly-spacing": "off",
    "computed-property-spacing": "off",
    "import/no-unresolved": 0,
    "import/named": 0,
    "no-plusplus": 0,
    "react/jsx-curly-spacing": [2, {"when": "always", "allowMultiline": false} ],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/button-has-type": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 2,
    "indent": [
      "error",
      4,
      {
        "ignoredNodes": ["JSXElement","JSXElement > *","JSXAttribute","JSXIdentifier","JSXNamespacedName","JSXMemberExpression","JSXSpreadAttribute","JSXExpressionContainer","JSXOpeningElement","JSXClosingElement","JSXText","JSXEmptyExpression","JSXSpreadChild"]
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-case-declarations": "off",
    "jsx-a11y/label-has-for": 0
  },
};
