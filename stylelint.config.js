module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  customSyntax: "postcss-scss",
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "no-descending-specificity": null,
    "block-no-empty": null,
  },
};
