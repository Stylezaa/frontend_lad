module.exports = {
  devServer: {
    proxy: 'http://localhost:8080/'
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },


  runtimeCompiler : true,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "la",
      localeDir: "locales",
      enableInSFC: false,
    
    },
  },
};
