module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
      },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "no-case-declarations": 0
      }
};
