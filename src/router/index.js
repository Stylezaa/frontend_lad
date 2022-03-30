import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

import about from "../views/404.vue";


import About from "../views/ABOUT_LAD/about_lad.vue";
import History from "../views/ABOUT_LAD/History.vue";
import Board from "../views/ABOUT_LAD/Board.vue";
import Committees from "../views/ABOUT_LAD/Committees .vue";
import Membership from "../views/ABOUT_LAD/Membership .vue";
import Organization from "../views/ABOUT_LAD/Organization.vue";

import Difination from "../views/DAMS IN LAOS/Difination of dams.vue";
import List from "../views/DAMS IN LAOS/List of dams in Laos.vue";
import Maps from "../views/DAMS IN LAOS/Map of Dams.vue";


import Newsletters from "../views/NEWS/Newsletters.vue";
import Events from "../views/NEWS/Events.vue";
import Press from "../views/NEWS/Press Releases.vue";
import Archives from "../views/NEWS/Archives.vue";





import Conference from "../views/PUBLICATION/Conference.vue";


import Link from "../views/LINK/link.vue";

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
  {
    path: "/about/History",
    name: "history",
    component: History
  },
  {
    path: "/about/Board",
    name: "Board",
    component: Board
  },
  {
    path: "/about/Committees",
    name: "Committees",
    component: Committees
  },
  {
    path: "/about/Membership",
    name: "Membership",
    component: Membership
  },


  {
    path: "/about/Organization",
    name: "Organization",
    component: Organization
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

  },

  //LINK

  {
    path: "/link",
    name: "Link",
    component: Link
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
