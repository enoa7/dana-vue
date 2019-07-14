const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dana-vue/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./node_modules")
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/variables.scss"; @import "./node_modules/bulma/sass/utilities/_all.sass";`
      }
    }
  }
};
