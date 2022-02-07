module.exports = {
  customSyntax: "postcss-html",
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue", "stylelint-config-prettier"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "property-no-vendor-prefix": null,
    "block-no-empty": null,
    "no-duplicate-selectors": null,
    "color-function-notation": null,
    "alpha-value-notation": null,
  },
};
