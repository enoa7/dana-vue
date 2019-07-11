const path = require("path");
module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(-dirname, "./node_modules")
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./node_modules/bulma/sass/utilities/_all.sass";`
      }
    }
  }
};
