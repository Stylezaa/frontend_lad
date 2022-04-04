<template>
  <v-footer dark padless>
    <v-card flat tile class="primary white--text py-8 px-2 custom_footer">
      <v-row class="footer" width="100%">
        <v-col cols="12" xs="12" sm="7" md="3">
          <v-toolbar color="transparent " flat>
            <v-img
              :src="require('../../assets/images/LOGO-White.png')"
              contain
              max-height="350"
              max-width="300"
            ></v-img>
          </v-toolbar>
          <div class="pt-5">
            <v-card-text
              v-for="(item, index) in contact"
              :key="index"
              class="white--text py-2"
    
            >
              {{ $t("main." + item.title) }}
            </v-card-text>
          </div>
          <v-card-text class="white--text"
            ><h4>{{ $t("main.CONTACT US") }}</h4></v-card-text
          >

          <v-card-text class="pt-1">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-1 white--text"
              icon
              fab
              small
            >
              <v-icon size="20px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <v-card-text class="white--text pt-0 py-1">
            <h4 class="py-6" style="font-size: 1em">
              {{ $t("main.ABOUT LAD") }}
            </h4>
          </v-card-text>

          <v-card-text
            class="colorfooter--text mt-n4"
            style="font-size: 1em"
            v-for="(item, index) in ABOUT"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              text
              @click="scroll($i18nRoute({ name: item.title }))"
              >{{ $t("main." + item.title) }}</a
            >
          </v-card-text>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <v-card-text class="white--text pt-0 py-1">
            <h4 class="py-6" style="font-size: 1em">
              {{ $t("main.DAMS IN LAOS") }}
            </h4>
          </v-card-text>
          <v-card-text
            class="colorfooter--text mt-n4"
            v-for="(item, index) in DAM"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              @click="newroutdam($i18nRoute({ name: item.link }))"
              >{{ $t("main." + item.title) }}</a
            ></v-card-text
          >
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <v-card-text class="white--text pt-0 py-1">
            <h4 class="py-6" style="font-size: 1em">{{ $t("main.NEWS") }}</h4>
          </v-card-text>

          <v-card-text
            class="colorfooter--text mt-n4"
            v-for="(item, index) in NEWS"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              @click="clicknew($i18nRoute({ name: item.link }))"
              >{{ $t("main." + item.title) }}</a
            >
          </v-card-text>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <v-card-text class="white--text pt-0 py-1">
            <h4 class="py-6" style="font-size: 1em">
              {{ $t("main.PUBLICATION") }}
            </h4>
          </v-card-text>
          <v-card-text
            class="colorfooter--text mt-n4"
            v-for="(item, index) in PUBLICATION"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              @click="clickpublic($i18nRoute({ name: item.link }))"
            >
              {{ $t("main." + item.title) }}</a
            >
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-card-text
      class="primary colorfooter--text text-center"
      style="font-size: 1em"
    >
      {{ $t("main.2022") }}
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      contact: [
        { title: "2800 - 14th Ave, Suite 210" },
        { title: "Vientiane, Vientiane" },
        { title: "A" },
        { title: "B" },
        { title: "Tel + (856) 2155-7076" },
      ],
      header: [
        { title: "ABOUT LAD" },
        { title: "DAMS IN LAOS" },
        { title: "LAOS P.D.R" },
        { title: "NEWS" },
        { title: "PUBLICATION" },
      ],
      ABOUT: [
        { title: "History", link: "about" },
        { title: "Organization", link: "about" },
        { title: "Board", link: "about" },
        { title: "Committees", link: "about" },
        { title: "Membership", link: "about" },
      ],
      DAM: [
        { title: "Definition of Dams", link: "Difination" },
        { title: "List of Dams in Laos", link: "List" },
        { title: "Map of Dams", link: "Map" },
        { title: "Dam Safety", link: "safety" },
      ],
      NEWS: [
        { title: "Newsletters", link: "Newsletters" },
        { title: "Events", link: "Events" },
        { title: "Press Releases", link: "Releases" },
        { title: "Archives", link: "Archives" },
      ],
      PUBLICATION: [
        { title: "Law and Regulation", link: "LaoElectricity" },
        { title: "Guideline", link: "guideline" },
        { title: "Conference Procedding", link: "Conference" },
      ],
    };
  },

  mounted() {},
  methods: {
    newroutdam(item) {
      this.$router.push(item);
      this.$router.go(0);
      window.scrollTo(0, 0);
    },
    clicknew(item) {
      this.$router.push(item);
      this.$router.go(0);
      window.scrollTo(0, 0);
    },
    clickpublic(item) {
      this.$router.push(item);
      this.$router.go(0);
      window.scrollTo(0, 0);
    },
    scroll(refName) {
      if (this.$route.name == "About") {
        const element = document.getElementById(refName.name);
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        this.$router.push("About");
        this.$router.go();
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style>
.custom_footer {
  width: 100% !important;
  margin: 0 !important;
}
@media only screen and (max-width: 576px) {
  .custom_footer > .footer {
    margin: 0;
  }
}

@media only screen and (min-width: 600px) {
  /* For desktop: */
  .footer {
    margin-left: 0px;
  }
}
@media only screen and (min-width: 1401px) {
  /* For desktop: */

  .footer {
    margin-left: 300px;
  }
}
li {
  text-decoration: underline;
  color: #459ce7;
  cursor: pointer;
}
</style>
