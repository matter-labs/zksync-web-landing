module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended", "plugin:prettier-vue/recommended", "prettier", "prettier/vue"],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: "module",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue"]
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    camelcase: "off",
    "no-console": "off",
    "prettier/prettier": 2,
    quotes: ["error", "double"],
    "vue/no-v-for-template-key-on-child": "off",
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "pt-eslint/no-explicit-any": "off",
    "no-prototype-builtins": "off",
    "no-unused-expressions": "off",
    "no-use-before-define": "off",
    "vue/singleline-html-element-content-newline": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/max-attribute": "off",
    "vue/require-prop-types": "off",
    "linebreak-style": ["error", "unix"],
    "eol-last": 0,
    indent: "off",
    "comma-dangle": ["error", "never"],
    "no-trailing-spaces": 1,
    semi: ["error", "always"],
    "prettier-vue/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "none",
        singleQuote: false,
        jsxSingleQuote: false,
        printWidth: 180,
        tabWidth: 2
      }
    ]
  },
  overrides: [
    {
      files: ["*.vue", "*.ts"],
      parserOptions: {
        "eol-last": 0,
        "vue/max-attributes-per-line": [
          "error",
          {
            singleline: {
              max: 4
            },
            multiline: {
              max: 1
            }
          }
        ]
      }
    }
  ],
  plugins: ["prettier"],
  settings: {
    "prettier-vue": {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, remember not to `extends: ['prettier/vue']`, as you need the rules from `eslint-plugin-vue` to lint `<template>` blocks
         *
         * @default true
         */
        template: false,

        /**
         * Use prettier to process `<script>` blocks or not
         *
         * @default true
         */
        script: true,

        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: "markdown" },

          // Treat the `<config>` block as a `.json` file
          config: { lang: "json" },

          // Treat the `<module>` block as a `.js` file
          module: { lang: "js" },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false

          // Other custom blocks that are not listed here will be ignored
        }
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: true,
      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        // Path to ignore file (default: `'.prettierignore'`)
        // Notice that the ignore file is only used for this plugin
        ignorePath: ".prettierignore",

        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false
      }
    }
  }
};