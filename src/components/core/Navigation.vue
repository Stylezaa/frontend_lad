<template>
  <div>
    <v-card class="overflow-hidden white pandinger" flat>
      <v-app-bar height="mx-auto" class="white custom_h" app>
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
                  <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="6"
                    xl="5"
                    id="custom_official_text"
                  >
                    <span class="white--text"
                      ><b>{{ $t("main.OFFICIAL WEBSITE") }} </b></span
                    >
                  </v-col>

                  <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="5"
                    xl="5"
                    id="custom_contact_section"
                  >
                    <v-row
                      align="center"
                      justify="center"
                      id="custom_row_contact_section"
                    >
                      <v-btn
                        dark
                        text
                        style="font-size: 1em"
                        class="pa-2"
                        id="btn_contact_section"
                        >{{ $t("main.CONTACT US") }} |</v-btn
                      >

                      <LocaleSwitcher />
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
              xl="8"
              class="hidden-sm-and-down"
            >
              <v-toolbar color="transparent " id="logo_section" flat>
                <router-link
                  class="black--text mt-n4"
                  style="text-decoration: none"
                  :to="$i18nRoute({ name: 'Home' })"
                >
                  <v-img
                    :src="require('../../assets/images/logo_header.png')"
                    max-height="250"
                    max-width="300"
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
                </router-link>
              </v-toolbar>
            </v-col>

            <v-card tile width="100%" class="overflow-hidden" flat>
              <v-toolbar color="primary" dark class="">
                <v-toolbar-items class="hidden-sm-and-down mx-auto">
                  <v-col cols="12" xs="12" sm="6" md="3">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <router-link
                          class="black--text mt-n4"
                          style="text-decoration: none"
                          :to="$i18nRoute({ name: 'About' })"
                        >
                          <v-btn
                            dark
                            text
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 0.9em"
                          >
                           {{ $t("main.ABOUT LAD") }}
                            <!-- <v-icon class="white--text" aria-hidden="true">
                              mdi-chevron-down
                            </v-icon> -->
                          </v-btn>
                        </router-link>
                      </template>

                      <!-- <v-list>
                        <v-list-item
                          v-for="(item, index) in about"
                          :key="index"
                        >
                          <v-list-item-title>
                            <a
                              class="black--text mt-n4"
                              style="text-decoration: none"
                              @click="goToPricing(), openabout(item.number)"
                              >{{ item.title }}
                            </a></v-list-item-title
                          >
                        </v-list-item>
                      </v-list> -->
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
                           {{ $t("main.DAMS IN LAOS") }}
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
                              @click="
                                newroutdam($i18nRoute({ name: item.link }))
                              "
                              >{{ $t("main." + item.title) }}</a
                            >
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="2">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          v-bind="attrs"
                          v-on="on"
                          style="font-size: 0.9em"
                        >
                          {{ $t("main.NEWS") }}
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
                              @click="clicknew($i18nRoute({ name: item.link }))"
                              >{{ $t("main." + item.title) }}</a
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
                           {{ $t("main.PUBLICATION") }}
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
                              @click="
                                clickpublic($i18nRoute({ name: item.link }))
                              "
                              >{{ $t("main." + item.title) }}</a
                            ></v-list-item-title
                          >
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>

                  <v-col cols="12" xs="12" sm="6" md="2">
                    <v-menu open-on-hover bottom offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <router-link
                          class="black--text mt-n4"
                          style="text-decoration: none"
                          :to="$i18nRoute({ name: 'Link' })"
                        >
                          <v-btn
                            dark
                            text
                            v-bind="attrs"
                            v-on="on"
                            style="font-size: 0.9em"
                          >
                            LINK
                          </v-btn>
                        </router-link>
                      </template>
                    </v-menu>
                  </v-col>
                </v-toolbar-items>

                <v-app-bar-nav-icon
                  class="hidden-md-and-up"
                  @click.stop="drawer = !drawer"
                />

                <v-card class="mx-auto primary hidden-md-and-up" id="fix_iphone_sw_lang" flat>
                  <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="5"
                    xl="10"
                    id="header_fix_color"
                  >
                    <router-link
                      style="text-decoration: none"
                      :to="$i18nRoute({ name: 'Home' })"
                    >
                      <v-toolbar color="transparent" flat>
                        <v-img
                          c
                          :src="require('../../assets/images/LOGO-White.png')"
                          max-height="100"
                          max-width="170"
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
                        <v-spacer class="hidden-sm-and-down"></v-spacer>
                        <div id="mb_ios_fix">
                          <LocaleSwitcher />
                        </div>
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
              <v-card v-show="drawer" height="auto" width="100%" tile>
                <v-list flat>
                  <v-subheader>OFFICIAL WEBSITE</v-subheader>
                  <div v-for="(item, i) in items" :key="i">
                    <v-list-item-group v-if="item.id == '0'">
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <a
                            class="black--text"
                            style="text-decoration: none"
                            @click="newroutdam($i18nRoute({ name: item.link }))"
                          >
                            <v-list-item-title
                              v-text="item.text"
                            ></v-list-item-title>
                          </a>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>

                    <v-list-group v-else :prepend-icon="item.icon">
                      <template v-slot:activator>
                        <v-list-item-title
                          v-text="item.text"
                        ></v-list-item-title>
                      </template>

                      <v-list-group
                        v-for="child in item.items"
                        :key="child.title"
                        :prepend-icon="item.icon"
                      >
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title v-text="child.title">
                              <a
                                class="black--text"
                                style="text-decoration: none"
                                :href="
                                  newroutdams($i18nRoute({ name: child.link }))
                                "
                              >
                              </a>
                            </v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                    </v-list-group>
                  </div>
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
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
export default {
  name: "App",

  data() {
    return {
      about: [
        { title: "History", link: "About", number: "History" },
        { title: "Organization", link: "About", number: "Organization" },
        { title: "Board", link: "About", number: "Board" },
        { title: "Committees", link: "About", number: "Committees" },
        { title: "Membership", link: "About", number: "Membership" },
      ],
      dams: [
        { title: "Definition of Dams", link: "Difination" },
        { title: "List of Dams in Laos", link: "List" },
        { title: "Map of Dams", link: "Map" },
        { title: "Dam Safety", link: "safety" },
      ],
      news: [
        { title: "Newsletters", link: "Newsletters" },
        { title: "Events", link: "Events" },
        { title: "Press Releases", link: "Releases" },
        { title: "Archives", link: "Archives" },
      ],
      publication: [
        { title: "Law and Regulation", link: "LaoElectricity" },
        { title: "Guideline", link: "guideline" },
        { title: "Conference Procedding", link: "Conference" },
      ],

      expand: false,
      drawer: false,

      selectedItem: 1,
      items: [
        { text: "Home", icon: "mdi-home", link: "Home", id: "0" },
        { text: "About Lad", icon: "mdi-account", link: "About", id: "0" },
        {
          text: "Dams in Laos",
          icon: "info",
          link: "Link",
          id: "1",
          items: [
            { title: "Definition of Dams", link: "Difination" },
            { title: "List of Dams in Laos", link: "List" },
            { title: "Map of Dams", link: "Map" },
            { title: "Dam Safety", link: "safety" },
          ],
        },
        {
          text: "News ",
          icon: "event",
          link: "Link",
          id: "1",
          items: [
            { title: "Definition of Dams", link: "Difination" },
            { title: "List of Dams in Laos", link: "List" },
            { title: "Map of Dams", link: "Map" },
            { title: "Dam Safety", link: "safety" },
          ],
        },
        {
          text: "Publication",
          icon: "mdi-folder",
          link: "Link",
          id: "1",
          items: [
            { title: "Law and Regulation", link: "LaoElectricity" },
            { title: "Guideline", link: "guideline" },
            { title: "Conference Procedding", link: "Conference" },
          ],
        },
        { text: "Link", icon: "mdi-link", link: "Link", id: "0" },
      ],
    };
  },
  components: {
    LocaleSwitcher,
  },

  mounted() {},
  methods: {
    open() {
      window.scrollTo(0, 0);
    },
    newrouter(item) {
      console.log(item);

      this.$router.push(item);
    },
    newroutdam(item) {
      this.$router.push(item);
    },
    newroutdams(item) {
      this.$router.push(item);
    },
    clicknew(item) {
      this.$router.push(item);
    },

    goToPricing() {
      this.$router.push("About");
    },
    openabout(item) {
      window.location.href = "#" + item;
    },

    open1() {
      this.$router.push("link");
    },

    clickpublic(item) {
      this.$router.push(item);
    },
  },
};
</script>

<style>

#mb_ios_fix {
  z-index: 1000 !important;
  visibility: visible !important;
  height: 100% !important;
}

@media only screen and (min-width: 100px) {
  /* For desktop: */
  .pandinger {
    height: 50px;
  }
}

@media only screen and (max-width: 425px) {
  ul#sw_lang_dropdown[data-v-6f6ca80b] {
    z-index: 1000 !important;
    position: absolute;
    left: -40px;
    top: 12px;
  }

  #fix_iphone_sw_lang {
    width: 80%;
    margin-left: 45px !important;
  }
}

@media only screen and (max-width: 968px) {
  /* .custom_h {
    height: 100% !important;
    padding: 0 20px;
 } */

  .custom_h {
    z-index: 1 !important;
  }

  .custom_h > .v-toolbar__content {
    height: 100% !important;
    display: flex;
    align-items: center;
    padding: 12px !important;
    z-index: 1 !important;
  }

  .custom_h .theme--light.v-card {
    overflow: visible !important;
  }

  #header_fix_color {
    padding: 0 !important;
  }
}

@media only screen and (min-width: 960px) {
  header#logo_section > div {
      height: 80px !important;
  }
}

@media only screen and (min-width: 1401px) {
  /* For desktop: */

  .pandinger {
    height: 160px;
  }
}

.v-toolbar__content {
  padding: 0 !important;
}

li {
  text-decoration: underline;
  color: #459ce7;
  cursor: pointer;
}

div#custom_official_text {
  position: absolute;
  top: 4px;
  left: 0;
}

div#custom_contact_section {
  position: absolute;
  top: 10px;
  right: 65px;
}

div#custom_row_contact_section {
  position: relative;
  z-index: 1;
}

button#btn_contact_section {
  position: absolute;
  top: 0;
}

/* .custom_h .theme--light.v-card {
  overflow: visible !important;
}

#header_fix_color {
  padding: 0 !important;
} */
</style>
