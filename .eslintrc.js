module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  rules: {
    "no-console": "off"
  }
};
