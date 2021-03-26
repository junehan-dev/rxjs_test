module.export = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-import',
    ],
    extends: [
        'eslint:recommanded',
        'plugin:@typescript-eslint/recommanded',
        'preetier',
    ],
};
