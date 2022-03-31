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



import Link from "../views/Link/link.vue";



import Conference from "../views/PUBLICATION/Conference.vue";
import guideline from "../views/PUBLICATION/Dam safety guideline .vue";
import Lao from "../views/PUBLICATION/Lao electricity Law .vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },



  /// ABOUT LAD

    {
    path: "/about",
    name: "About",
    component: About
  },
  
/// DAMS IN LAOS


{
  path: "/dams/Difiniation",
  name: "Difination of dams",
  component: Difination
},
{
  path: "/dams/List",
  name: "List of dams in Laos",
  component: List
},
{
  path: "/dams/Map",
  name: "Map of Dams",
  component: Maps
},

{
  path: "/dams/safety",
  name: "safety",
  component: safety
},






  /// NEWS


  {
    path: "/news/Newsletters",
    name: "Newsletters",
    component: Newsletters
  },
  {
    path: "/news/Events",
    name: "Events",
    component: Events
  },
  {
    path: "/news/Releases",
    name: "Press Releases",
    component: Press
  },
  {
    path: "/news/Archives",
    name: "Archives",
    component: Archives
  },



  //PUBLICATION

  {
    path: "/publication/Conference",
    name: "Conference",
    component: Conference
  },
  {
    path: "/publication/guideline",
    name: "guideline",
    component: guideline
  },
  {
    path: "/publication/LaoElectricity",
    name: "Lao",
    component: Lao
  },


// LINK

  {
    path: "/Link/",
    name: "Link",
    component: Link
  },


  {
    path: "/",
    redirect: "/home"

  },
  {
    path: "/error",
    name: "error",
    component: about
  },

  {
    path: "*",
    redirect: "/error"

  }

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
