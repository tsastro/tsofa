import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    files: ["src/**/*.ts"],
    // these are overriding good style for now to reduce the error count - the intention is to reintroduce gradually
    rules : {
        "prefer-const": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
         "@typescript-eslint/no-explicit-any": "off",
         "@typescript-eslint/no-inferrable-types": "off",
         "no-array-constructor": "off", // see https://typescript-eslint.io/rules/no-array-constructor/
         "@typescript-eslint/no-array-constructor": "off"
    }
  }

  
);