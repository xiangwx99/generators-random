modules.export = {
  extends: 'airbnb-base',
  env: { node: true },
  globals: {},
  rules: {
    semi: [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': [0],
    'func-names': [0],
    'import/no-extraneous-dependencies': [0],
    'import/extensions': [2, 'never']
  }
}
