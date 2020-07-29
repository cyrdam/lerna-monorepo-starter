module.exports = {
    extends: [
      '@commitlint/config-conventional',
    ],
    rules: {
      'scope-enum': [2, 'always', [
        // workspace packages
        'package1',
        'package2',
        'eslint',
        '*',
      ]]
    },
  };
