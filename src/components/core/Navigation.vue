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
                      ><h3>
                        <b>{{ $t("main.OFFICIAL WEBSITE") }} </b>
                      </h3></span
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
                    <v-row align="center" justify="center"      id="custom_row_contact_section">
                      <v-btn
                        dark
                        text
                        style="font-size: 1em"
                        id="btn_contact_section"
                        @click="goTocontact($i18nRoute({ name: 'contact' }))"
                      >
                        <h4>{{ $t("main.CONTACT") }}</h4>
                      </v-btn>
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
              <v-toolbar color="transparent py-2  " id="logo_section" flat>
                <router-link
                  class="black--text mt-n4"
                  style="text-decoration: none"
                  :to="$i18nRoute({ name: 'Home' })"
                >
                  <v-img
                    :src="require('../../assets/images/logo_header.png')"
                    max-height="250"
                    max-width="300"
                    @click="open()"
                    contain
                    class=""
                  >
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
                        <v-btn
                          dark
                          text
                          v-bind="attrs"
                          v-on="on"
                          style="font-size: 0.9em"
                          @click="goToPricing($i18nRoute({ name: 'About' }))"
                        >
                          <h4>
                            {{ $t("main.ABOUT LAD") }}
                          </h4>
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
                              @click="
                                openabout(
                                  $i18nRoute({
                                    name: item.link,
                                    ids: item.number,
                                  })
                                )
                              "
                            >
                              <h4>
                                {{ $t("main." + item.title) }}
                              </h4>
                            </a>
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
                          <h4>
                            {{ $t("main.DAMS IN LAOS") }}
                          </h4>
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
                            >
                              <h4>
                                {{ $t("main." + item.title) }}
                              </h4>
                            </a>
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
                          <h4>{{ $t("main.NEWS") }}</h4>
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
                              ><h4>{{ $t("main." + item.title) }}</h4></a
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
                          <h4>{{ $t("main.PUBLICATION") }}</h4>
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
                            >
                              <h4>{{ $t("main." + item.title) }}</h4></a
                            ></v-list-item-title
                          >
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
                          @click="open2()"
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

                <v-card
                  class="mx-auto primary hidden-md-and-up"
                  id="fix_iphone_sw_lang"
                  flat
                >
                  <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="5"
                    xl="10"
                    id="header_fix_color"
                  >
                    <v-toolbar color="transparent" flat>
                      <router-link
                        style="text-decoration: none"
                        :to="$i18nRoute({ name: 'Home' })"
                      >
                        <v-img
                          c
                          :src="require('../../assets/images/LOGO-White.png')"
                          max-height="100"
                          max-width="140"
                          contain
                        >
                        </v-img>
                      </router-link>

                      <v-spacer class="hidden-sm-and-down"></v-spacer>
                      <div id="mb_ios_fix">
                        <LocaleSwitcher />
                      </div>
                    </v-toolbar>
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
                        <v-list-item-content style="font-size: 0.8em">
                          <a
                            class="black--text"
                            style="text-decoration: none"
                            @click="newroutdam($i18nRoute({ name: item.link }))"
                          >
                            <h4>{{ $t("main." + item.text) }}</h4>
                          </a>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>

                    <v-list-group v-else :prepend-icon="item.icon">
                      <template v-slot:activator>
                        <v-list-item-title>
                          <h4>{{ $t("main." + item.text) }}</h4>
                        </v-list-item-title>
                      </template>

                      <v-list-group
                        v-for="child in item.items"
                        :key="child.title"
                        :prepend-icon="item.icon"
                      >
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title
                              @click="
                                clickitem($i18nRoute({ name: child.link }))
                              "
                            >
                              {{ $t("main." + child.title) }}
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
      state: true,
      value: 0,

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
          text: "News",
          icon: "event",
          link: "Link",
          id: "1",
          items: [
            { title: "Newsletters", link: "Newsletters" },
            { title: "Events", link: "Events" },
            { title: "Press Releases", link: "Releases" },
            { title: "Archives", link: "Archives" },
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
      this.$router.push(item);
      this.$router.go();
      window.scrollTo(0, 0);
    },
    newroutdam(item) {
      this.$router.push(item);
      this.$router.go();
      window.scrollTo(0, 0);
    },
    newroutdams(item) {
      this.$router.push(item);
      this.$router.go();
      window.scrollTo(0, 0);
    },
    clicknew(item) {
      this.$router.push(item);
      this.$router.go();
      window.scrollTo(0, 0);
    },

    goToPricing(item) {
      console.log(item);
      this.$router.push(item);
      this.$router.go();
      window.scrollTo(0, 0);
    },
    goTocontact(item) {
      this.$router.push(item);
      this.$router.go();
      window.scrollTo(0, 0);
    },
    openabout(item) {
      // window.location.href = "#" + item;
      console.log(item);
      if (this.$route.name == "About") {
        const element = document.getElementById(item.ids);
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        this.$router.push(item);
        this.$router.go();
        window.scrollTo(0, 0);
      }
    },

    open1() {
      this.$router.push("link");
      this.$router.go();
      window.scrollTo(0, 0);
    },
    open2() {
      this.$router.push("Link");
      this.$router.go();
      window.scrollTo(0, 0);
    },

    clickpublic(item) {
      this.$router.push(item);
      this.$router.go(0);
      window.scrollTo(0, 0);
    },
    clickitem(item) {
      this.$router.push(item);
      this.$router.go(0);
      window.scrollTo(0, 0);
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
    left: 18px;
    top: 40px;
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
    height: 64px !important;
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
</style>
