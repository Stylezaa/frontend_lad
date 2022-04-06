module.exports = {
 
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
