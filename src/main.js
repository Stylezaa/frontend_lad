import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from 'vue2-google-maps'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/css/styles.css';


Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCa-p_YDLMTXyDD5rFUgouFPQX2afMNzoE',
    libraries: 'places',
  }
});


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
