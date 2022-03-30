<template>
  <div>
    <v-card class="overflow-hidden white pandinger" flat>
      <v-app-bar height="max-anto" class="white" app>
        <v-card flat class="white white--text" width="100%">
          <v-row align="center" justify="center">
            <v-card
              width="100%"
              class="primary hidden-sm-and-down"
              height="45"
              flat
            >
              <v-card-text class="white--text text-center" flat>
                <v-row align="center" justify="center">
                  <v-col cols="12" xs="12" sm="12" md="6">
                    <span class="white--text"><b>OFFICIAL WEBSITE</b></span>
                  </v-col>

                  <v-col cols="12" xs="12" sm="12" md="5">
                    <v-row align="center" justify="center">
                      <v-btn dark text style="font-size: 1em" class="pa-2"
                        >CONTACT</v-btn
                      >
                      <h4 class="pa-2">|</h4>
                      <v-menu open-on-hover bottom offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            dark
                            text
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 0.9em"
                          >
                            EN
                            <v-icon class="white--text" aria-hidden="true">
                              mdi-chevron-down
                            </v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item
                            v-for="(item, index) in languages"
                            :key="index"
                          >
                            <v-list-item-title>
                              <a
                                class="black--text mt-n4"
                                style="text-decoration: none"
                                :href="item.link"
                                >{{ item.title }}</a
                              ></v-list-item-title
                            >
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="8"
              xl="10"
              class="hidden-sm-and-down"
            >
              <router-link
                style="text-decoration: none"
                :to="{ path: '/home' }"
              >
                <v-toolbar color="transparent " flat>
                  <v-img
                    :src="require('../../assets/images/lads_logo.png')"
                    max-height="80"
                    max-width="150"
                    contain
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center">
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>

                  <v-card-text class="black--text pt-0" sm10 md10 lg10 xl10>
                    <h2 class="py-2" style="font-size: 1.5em">
                      ສະມາຄົມເຂື່ອນລາວ
                    </h2>
                    <h4 class="py-1" style="font-size: 1.3em">
                      LAO ASSOCIATION ON DAMS
                    </h4>
                  </v-card-text>
                </v-toolbar>
              </router-link>
            </v-col>

            <v-card tile width="100%" class="overflow-hidden" flat>
              <v-toolbar color="primary" dark class="">
                <v-toolbar-items class="hidden-sm-and-down mx-auto">
                  <v-col cols="12" xs="12" sm="6" md="3">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          v-bind="attrs"
                          v-on="on"
                          @click="open()"
                          style="font-size: 0.9em"
                        >
                          ABOUT LAD
                          <v-icon class="white--text" aria-hidden="true">
                            mdi-chevron-down
                          </v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item
                          v-for="(item, index) in about"
                          :key="index"
                        >
                          <v-list-item-title>
                            <a
                              class="black--text mt-n4"
                              style="text-decoration: none"
                              :href="item.link"
                              >{{ item.title }}</a
                            ></v-list-item-title
                          >
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="3">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          v-bind="attrs"
                          v-on="on"
                          style="font-size: 0.9em"
                        >
                          DAMS IN LAOS
                          <v-icon class="white--text" aria-hidden="true">
                            mdi-chevron-down
                          </v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item v-for="(item, index) in dams" :key="index">
                          <v-list-item-title>
                            <a
                              class="black--text mt-n4"
                              style="text-decoration: none"
                              :href="item.link"
                              >{{ item.title }}</a
                            >
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="3">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          v-bind="attrs"
                          v-on="on"
                          style="font-size: 0.9em"
                        >
                          NEWS
                          <v-icon class="white--text" aria-hidden="true">
                            mdi-chevron-down
                          </v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item v-for="(item, index) in news" :key="index">
                          <v-list-item-title>
                            <a
                              class="black--text mt-n4"
                              style="text-decoration: none"
                              :href="item.link"
                              >{{ item.title }}</a
                            ></v-list-item-title
                          >
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="3">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          v-bind="attrs"
                          v-on="on"
                          style="font-size: 0.9em"
                        >
                          PUBLICATION
                          <v-icon class="white--text" aria-hidden="true">
                            mdi-chevron-down
                          </v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item
                          v-for="(item, index) in publication"
                          :key="index"
                        >
                          <v-list-item-title>
                            <a
                              class="black--text mt-n4"
                              style="text-decoration: none"
                              :href="item.link"
                              >{{ item.title }}</a
                            ></v-list-item-title
                          >
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="3">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          v-bind="attrs"
                          v-on="on"
                          style="font-size: 0.9em"
                        >
                          LINK
                        </v-btn>
                      </template>
                    </v-menu>
                  </v-col>
                </v-toolbar-items>
                <v-app-bar-nav-icon
                  class="hidden-md-and-up"
                  @click.stop="drawer = !drawer"
                />

                <v-card class="mx-auto primary hidden-md-and-up" flat>
                  <v-col cols="12" xs="12" sm="12" md="5" xl="10">
                    <router-link
                      style="text-decoration: none"
                      :to="{ path: '/link' }"
                    >
                      <v-toolbar color="transparent " flat>
                        <v-img
                          c
                          :src="require('../../assets/images/lads_logo.png')"
                          max-height="40"
                          max-width="50"
                          contain
                        >
                          <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center">
                              <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                              ></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>

                        <v-card-text
                          class="white--text pt-6"
                          sm10
                          md10
                          lg10
                          xl10
                        >
                          <h2 style="font-size: 0.9em">ສະມາຄົມເຂື່ອນລາວ</h2>
                          <h4 style="font-size: 0.8em">
                            LAO ASSOCIATION ON DAMS
                          </h4>
                        </v-card-text>
                      </v-toolbar>
                    </router-link>
                  </v-col>
                </v-card>
              </v-toolbar>
            </v-card>
            <!-- <v-navigation-drawer app v-model="drawer" absolute clipped>
      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
            <v-expand-transition>
              <v-card v-show="drawer" height="auto" width="100%">
                <v-list>
                  <v-list-group
                    v-for="item in header"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                  >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item v-for="child in item.items" :key="child.title">
                      <v-list-item-content>
                        <a
                          class="black--text mt-n4"
                          style="text-decoration: none"
                          :href="child.link"
                        >
                          <v-list-item-title
                            v-text="child.title"
                          ></v-list-item-title>
                        </a>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </v-list>
              </v-card>
            </v-expand-transition>
          </v-row>
        </v-card>
      </v-app-bar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      header: [
        {
          title: "ABOUT LAD",
          link: "/about",
          items: [
            { title: "History", link: "/about/History" },
            { title: "Organization", link: "/about/Organization" },
            { title: "Board", link: "/about/Board" },
            { title: "Committees", link: "/about/Committees" },
            { title: "Membership", link: "/about/Membership" },
          ],
        },
        {
          title: "DAMS IN LAOS",
          items: [
            { title: "Difiniation of dams", link: "/dams/Difiniation" },
            { title: "List of dams in Laos", link: "/dams/List" },
            { title: "Map of Dams", link: "/dams/Map" },
          ],
        },
        {
          title: "NEWS",
          items: [
            { title: "Newsletters", link: "/news/Newsletters" },
            { title: "Events", link: "/news/Events" },
            { title: "Press Releases", link: "/news/Releases" },
            { title: "Archives", link: "/news/Archives" },
          ],
        },
        {
          title: "PUBLICATION",
          items: [
            { title: "Lao electricity Law", link: "/publication/Conference" },
            { title: "Dam safety guideline", link: "/publication/Conference" },
            { title: "Conference procedding", link: "/publication/Conference" },
          ],
        },
      ],

      about: [
        { title: "History", link: "/about/History" },
        { title: "Organization", link: "/about/Organization" },
        { title: "Board", link: "/about/Board" },
        { title: "Committees", link: "/about/Committees" },
        { title: "Membership", link: "/about/Membership" },
      ],
      dams: [
        { title: "Difiniation of dams", link: "/dams/Difiniation" },
        { title: "List of dams in Laos", link: "/dams/List" },
        { title: "Map of Dams", link: "/dams/Map" },
      ],
      news: [
        { title: "Newsletters", link: "/news/Newsletters" },
        { title: "Events", link: "/news/Events" },
        { title: "Press Releases", link: "/news/Releases" },
        { title: "Archives", link: "/news/Archives" },
      ],
      publication: [
        { title: "Lao electricity Law", link: "/publication/Conference" },
        { title: "Dam safety guideline", link: "/publication/Conference" },
        { title: "Conference procedding", link: "/publication/Conference" },
      ],
      languages: [
        { title: "EN", link: "#" },
        { title: "LA", link: "#" },
      ],
      expand: false,
      drawer: false,
    };
  },

  mounted() {},
  methods: {
    open() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
@media only screen and (min-width: 100px) {
  /* For desktop: */
  .pandinger {
    height: 50px;
  }
}
@media only screen and (min-width: 1401px) {
  /* For desktop: */

  .pandinger {
    height: 160px;
  }
}
</style>
