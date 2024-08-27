import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    // these are overriding good style for now to reduce the error count
    rules : {
        "prefer-const": "off",
        "@typescript-eslint/consistent-type-assertions": "off"
    }
  }

  
);