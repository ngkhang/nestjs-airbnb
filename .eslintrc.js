module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      }
    ],
    'arrow-body-style': [
      2,
      'as-needed',
      {
        'requireReturnForObjectLiteral': true
      }
    ],
    'no-unused-vars': [
      1,
      {
        'args': 'after-used',
        'argsIgnorePattern': '^_'
      }
    ],
    'no-console': 1,
    'no-lonely-if': 1,
    'no-undefined': 2,
    'consistent-return': 0,
    'no-nested-ternary': 1,
    'no-unexpected-multiline': 'warn',
    'prefer-const': 2
  },
};
