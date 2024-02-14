module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}',
                '*.ts', '*.tsx'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'project': './tsconfig.json'
    },
    'plugins': [
        '@typescript-eslint',
        'react'
    ],
    'rules': {
        'react/react-in-jsx-scope': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-shadow': 0,
        'react/jsx-no-target-blank': 0,
        'react/button-has-type': 0,
        'import/no-absolute-path': 0,
    }
};
