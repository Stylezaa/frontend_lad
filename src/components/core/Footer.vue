<template>
  <v-footer dark padless>
    <v-card flat tile class="primary white--text py-8 px-2 custom_footer">
      <v-row class="footer" width="100%">
        <v-col cols="12" xs="12" sm="7" md="3">
          <v-toolbar color="transparent " flat>
            <v-list-item-avatar size="70">
              <v-img
                :src="require('../../assets/images/lads_logo.png')"
                contain
              ></v-img>
            </v-list-item-avatar>

            <v-card-text class="white--text">
              <h3 style="font-size: 1em">ສະມາຄົມເຂື່ອນລາວ</h3>
              <h4 style="font-size: 0.8em">LAO ASSOCIATION ON DAMS</h4>
            </v-card-text>
          </v-toolbar>
          <div class="pt-5">
            <v-card-text
              v-for="(item, index) in contact"
              :key="index"
              class="white--text py-2"
              style="font-size: 0.9em"
            >
              {{ item.title }}
            </v-card-text>
          </div>
          <v-card-text class="white--text"><h4>CONTACT US</h4></v-card-text>

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
            <h4 class="py-6" style="font-size: 0.9em">ABOUT LAD</h4>
          </v-card-text>

          <v-card-text
            class="colorfooter--text mt-n4"
            style="font-size: 0.9em"
            v-for="(item, index) in ABOUT"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              :href="item.link"
              >{{ item.title }}</a
            >
          </v-card-text>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <v-card-text class="white--text pt-0 py-1">
            <h4 class="py-6" style="font-size: 0.9em">DAMS IN LAOS</h4>
          </v-card-text>
          <v-card-text
            class="colorfooter--text mt-n4"
            v-for="(item, index) in DAM"
            style="font-size: 0.9em"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              :href="item.link"
              >{{ item.title }}</a
            ></v-card-text
          >
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <v-card-text class="white--text pt-0 py-1">
            <h4 class="py-6" style="font-size: 0.9em">NEWS</h4>
          </v-card-text>

          <v-card-text
            class="colorfooter--text mt-n4"
            style="font-size: 0.9em"
            v-for="(item, index) in NEWS"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              :href="item.link"
              >{{ item.title }}</a
            >
          </v-card-text>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <v-card-text class="white--text pt-0 py-1">
            <h4 class="py-6" style="font-size: 0.9em">PUBLICATION</h4>
          </v-card-text>
          <v-card-text
            class="colorfooter--text mt-n4"
            style="font-size: 0.9em"
            v-for="(item, index) in PUBLICATION"
            :key="index"
          >
            <a
              class="colorfooter--text mt-n4"
              style="text-decoration: none"
              :href="item.link"
              >{{ item.title }}</a
            >
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-card-text
      class="primary colorfooter--text text-center"
      style="font-size: 1em"
    >
      @2022 LAO ASSOCIATION ON DAMS (LAD)
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
        { title: "LAOS P.D.R" },
        { title: "Email: laoassociationdams@gmail.com" },
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
               { title: "History", link: "/about" },
            { title: "Organization", link: "/about" },
            { title: "Board", link: "/about" },
            { title: "Committees", link: "/about" },
            { title: "Membership", link: "/about" },
      ],
      DAM: [
                 { title: "Definition of dams", link: "/dams/Difiniation" },
            { title: "List of dams in Laos", link: "/dams/List" },
            { title: "Map of Dams", link: "/dams/Map" },
                { title: "Dam Safety", link: "/dams/safety" },
      ],
      NEWS: [
                { title: "Newsletters", link: "/news/Newsletters" },
            { title: "Events", link: "/news/Events" },
            { title: "Press Releases", link: "/news/Releases" },
            { title: "Archives", link: "/news/Archives" },
      ],
      PUBLICATION: [
        { title: "Lao electricity Law", link: "/publication/Conference" },
            { title: "Dam safety guideline", link: "/publication/guideline" },
            { title: "Conference procedding", link: "/publication/LaoElectricity" },
      ],
    };
  },

  mounted() {},
  methods: {},
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
</style>
