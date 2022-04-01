import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./assets/css/styles.css";
import { i18n } from "./i18n";
import { Trans } from './plugins/Translation'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCa-p_YDLMTXyDD5rFUgouFPQX2afMNzoE",
    libraries: "places",
  },
});


new Vue({
  i18n,
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
