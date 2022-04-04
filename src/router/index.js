import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

import about from "../views/404.vue";

import About from "../views/ABOUT_LAD/about_lad.vue";

import Difination from "../views/DAMS IN LAOS/Difination of dams.vue";
import List from "../views/DAMS IN LAOS/List of dams in Laos.vue";
import Maps from "../views/DAMS IN LAOS/Map of Dams.vue";
import safety from "../views/DAMS IN LAOS/Dam safety.vue";

import Newsletters from "../views/NEWS/Newsletters.vue";
import Events from "../views/NEWS/Events.vue";
import Press from "../views/NEWS/Press Releases.vue";
import Archives from "../views/NEWS/Archives.vue";

import Link from "../views/LINK/link.vue";

import Conference from "../views/PUBLICATION/Conference.vue";
import guideline from "../views/PUBLICATION/Dam safety guideline .vue";
import Lao from "../views/PUBLICATION/Lao electricity Law .vue";



import contact from "../views/contact.vue";
import { Trans } from '../plugins/Translation'

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@/views/${component}.vue`)
}



Vue.use(VueRouter);

const routes = [
  {

  path: "/:locale/",
  component: {
    render(c) { return c('router-view') }
  },
  beforeEnter: Trans.routeMiddleware,
  children: [{

    path: "/",
    name: "Home",
    component: Home,
  },

  /// ABOUT LAD

  {
    path: "About",
    name: "About",

    component: About,
  },


  {
    path: "contact",
    name: "contact",

    component: contact,
  },
  /// DAMS IN LAOS

  {
    path: "Difination",
    name: "Difination",
    component: Difination,
  },
  {
    path: "List",
    name: "List",
    component: List,
  },
  {
    path: "Map",
    name: "Map",
    component: Maps,
  },

  {
    path: "safety",
    name: "safety",
    component: safety,
  },

  /// NEWS

  {
    path: "Newsletters",
    name: "Newsletters",
    component: Newsletters,
  },
  {
    path: "Events",
    name: "Events",
    component: Events,
  },
  {
    path: "Releases",
    name: "Releases",
    component: Press,
  },
  {
    path: "Archives",
    name: "Archives",
    component: Archives,
  },

  //PUBLICATION

  {
    path: "Conference",
    name: "Conference",
    component: Conference,
  },
  {
    path: "guideline",
    name: "guideline",
    component: guideline,
  },
  {
    path: "LaoElectricity",
    name: "LaoElectricity",
    component: Lao,
  },

  // LINK

  {
    path: "Link",
    name: "Link",
    component: Link,
  },

  {
    path: "",
    redirect: "home",
  },
  {
    path: "error",
    name: "error",
    component: about,
  },




  ],

  
},

{
  path: "*",
  redirect() {
    return process.env.VUE_APP_I18N_LOCALE;
  }
},

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
