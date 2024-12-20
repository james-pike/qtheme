import { FlatCompat } from "@eslint/eslintrc";
import path from "path";

const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname), // Required for loading plugins
});

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      qwik: require("eslint-plugin-qwik"),
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prefer-spread": "off",
      "no-case-declarations": "off",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
    },
  },
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:qwik/recommended"),
];
