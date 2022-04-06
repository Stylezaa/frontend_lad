<template>
  <div>
    <v-container class="py-0">
      <v-row justify="center" align="center">
        <v-col cols="12" xs="12" sm="12" md="10">
          <template>
            <v-col class="custom_slider_main" cols="12" xs="12" sm="12" md="12">
              <v-card flat class="mx-auto my-4 text-center custom_slider">
                <v-carousel
                  class="hidden-md-and-up"
                  height="auto"
                  hide-delimiter-background
                  reverse-transition="fade-transition"
                  cycle
                  delimiter-icon="mdi-minus"
                  show-arrows-on-hover
                  continuous
                >
                  <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    reverse-transition="fade-transition"
                    show-arrows-on-hover
                  >
                    <v-img :src="item.src" aspect-ratio="1.77"></v-img>
                  </v-carousel-item>
                </v-carousel>

                <v-carousel
                  height="350"
                  hide-delimiter-background
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                  cycle
                  delimiter-icon="mdi-minus"
                  show-arrows-on-hover
                  continuous
                  class="hidden-sm-and-down"
                >
                  <!-- v-center-item1 -->
                  <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    show-arrows-on-hover
                  ></v-carousel-item>
                </v-carousel>
              </v-card>
            </v-col>
          </template>
        </v-col>
      </v-row>
    </v-container>

    <div class="nor py-12">
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="10">
            <v-layout row wrap>
              <v-card flat class="mx-auto nor">
                <v-row>
                  <v-flex sm4 md3 lg4 xl4 v-for="(item, i) in items1" :key="i">
                    <v-hover v-slot="{ hover }">
                      <v-card flat class="mx-auto" color="grey lighten-4">
                        <v-img class="imgs" :src="item.src" max-width="500px">
                          <v-card-text class="white--text text-center">
                            <v-overlay
                              v-if="!hover"
                              absolute
                              z-index="0"
                              class="v-card--reveal"
                            >
                              <v-btn
                                height="20"
                                width="10"
                                color="primary "
                                class="test"
                                @click="
                                  newrout($i18nRoute({ name: item.link }))
                                "
                              >
                                <v-card-text>
                                  <v-icon
                                    class="white--text"
                                    aria-hidden="true"
                                  >
                                    mdi-chevron-right
                                  </v-icon>
                                </v-card-text></v-btn
                              >

                              <br />
                              <h4 style="font-size: 0.7em">{{ item.title }}</h4>
                            </v-overlay>
                            <v-overlay
                              v-if="hover"
                              absolute
                              z-index="0"
                              class="text-center v-card--reveal"
                            >
                              <v-btn
                                height="30"
                                width="30"
                                color="primary"
                                @click="
                                  newrout($i18nRoute({ name: item.link }))
                                "
                              >
                                <v-card-text>
                                  <v-icon
                                    class="white--text"
                                    aria-hidden="true"
                                  >
                                    mdi-chevron-right
                                  </v-icon>
                                </v-card-text></v-btn
                              >
                              <br />{{ item.title }}
                            </v-overlay>
                          </v-card-text>
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-row>
              </v-card>
            </v-layout>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="8" xl="8">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-divider class="mx-4"></v-divider>

                <v-row class="bb"> </v-row>
                <div v-for="(item, index) in Definition" :key="index">
                  <v-card-title style="font-size: 1.2em" class="primary--text">
                    <h4>
                      {{ $t("main." + item.header) }}
                    </h4></v-card-title
                  >

                  <v-card-title style="font-size: 1em">
                    <p>
                      {{ $t("main.WHAT IS DAM?s") }}
                    </p></v-card-title
                  >
                </div>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- 
    <div>
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="10">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-card-title><h3>PRESS RELESES</h3></v-card-title>
                <div v-for="(item, index) in press" :key="index">
                  <v-divider class="mx-4"></v-divider>
                  <v-card-title style="font-size: 1.2em" class="primary--text">
                    <h4>
                      {{ item.header }}
                    </h4></v-card-title
                  >
                  <v-card-title class="mt-n7" style="font-size: 1em">
                    {{ item.date }}</v-card-title
                  >
                  <v-card-title class="mt-n7" style="font-size: 1em">
                    {{ item.title }}</v-card-title
                  >
                </div>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div> -->

    <div class="nor">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="10">
            <v-col cols="12" xs="12" sm="12" md="12" xl="12" id="custom_slider_footer">
              <v-carousel
                height="140"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-card class="white v-center-item" height="100">
                  <template v-for="(item, index) in slider">
                    <v-carousel-item
                      style="width: 100%"
                      v-if="(index + 1) % columns === 1 || columns === 1"
                      :key="index"
                    >
                      <v-row class="flex-nowrap" style="height: 100%">
                        <template v-for="(n, i) in columns">
                          <v-col cols="12" xs="4" sm="4" md="4" :key="i">
                            <a
                              height="350"
                              class="black--text mt-n4"
                              style="text-decoration: none"
                         
                              target="_blank"
                            >
                              <v-img
                                class="imgs1 ml-auto"
                                :src="slider[+index + i]"
                              >
                              </v-img>
                            </a>
                          </v-col>
                        </template>
                      </v-row>
                    </v-carousel-item>
                  </template>
                </v-card>
              </v-carousel>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        {
          src: require("../assets/images/image9.png"),
        },
        {
          src: require("../assets/images/Laos-to-Inspect-Hydropower-Dams.jpg"),
        },
        {
          src: require("../assets/images/Laos dam failure.jpg"),
        },
      ],

      items1: [
        {
          src: require("../assets/images/News Cover-01.png"),
          title: "NEWS",
          link: "Newsletters",
        },
        {
          src: require("../assets/images/News Cover-02.png"),
          title: "EVENTS",
          link: "Events",
        },
        {
          src: require("../assets/images/News Cover-03.png"),
          title: "PUBLICATIONS",
          link: "guideline",
        },
      ],
      press: [
        {
          header:
            "021 Next Content Fair to be held from November 11 to13 in Busan",
          date: "Nov 09, 2021",
          title:
            "The NOTICE of  Extending tthe implementation of the Measures on Containment, Prevention, and Comprehensive Response to the COVID-19 Pandemic from 4 - 18 August 2021.",
        },
        {
          header:
            "021 Next Content Fair to be held from November 11 to13 in Busan",
          date: "Nov 09, 2021",
          title:
            "The NOTICE of  Extending tthe implementation of the Measures on Containment, Prevention, and Comprehensive Response to the COVID-19 Pandemic from 4 - 18 August 2021.",
        },
        {
          header:
            "021 Next Content Fair to be held from November 11 to13 in Busan",
          date: "Nov 09, 2021",
          title:
            "The NOTICE of  Extending tthe implementation of the Measures on Containment, Prevention, and Comprehensive Response to the COVID-19 Pandemic from 4 - 18 August 2021.",
        },
      ],
      slider: [
        {
          link: "https://cda.ca/international/icold",
          src: require("../assets/images/Links/CDA-ACB.png"),
        },
        {
          src: require("../assets/images/Links/CHINCOLD-PT.png"),
          link: "http://www.chincold-smart.com/en/index",
        },
        {
          src: require("../assets/images/Links/jcold-PT.png"),
          link: "http://jcold.or.jp/e/",
        },
        {
          src: require("../assets/images/Links/ICOLD-PT.png"),
          link: "https://www.icold-cigb.org/",
        },
        {
          src: require("../assets/images/Links/logo.png"),
          link: "https://www.swissdams.ch/en",
        },
        {
          link: "https://cda.ca/international/icold",
          src: require("../assets/images/Links/CDA-ACB.png"),
        },
      ],
      Definition: [
        {
          src: require("../assets/images/Mask.png"),
          header: "WHAT IS DAM?",

          title:
            "The International Commission On Large Dams (ICOLD) is a non-governmental International Organization which provides a forum for the exchange of knowledge and experience in dam engineering.",
          title1:
            "The Organization leads the profession in ensuring that dams are built safely, efficiently, economically, and without detrimental effects on the environment. Its original aim was to encourage advances in the planning, design, construction, operation, and  maintenance of large dams and their associated civil works, by collecting and disseminating relevant information and by studying related technical questions.",
          title2:
            "Since the late sixties, focus was put on subjects of current concern such as dam safety, monitoring of performance, reanalysis of  older dams and spillways, effects of ageing and environmental impact. More recently, new subjects include cost studies at the  planning and construction stages, harnessing international rivers, information for the public at large, and financing.",
        },
      ],
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 3;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 3;
      }

      if (this.$vuetify.breakpoint.sm) {
        return 3;
      }

      return 1;
    },
  },
  methods: {
    newrout(item) {
      console.log(item);
      this.$router.push(item);
      this.$router.go();
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.Testediter {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

#custom_slider_footer .v-window__container {
  flex-direction: row !important;
  align-items: center !important;
}
.test {
  margin-top: 60%;
}
.v-card--reveal {
  opacity: 1;
  font-size: 12px;
  padding-top: 30px;

  border-radius: 5px;
  color: #fff;
}

.custom_slider_main .v-carousel__controls {
  z-index: 0 !important;
}

.v-window__prev, .v-window__next {
  z-index: 0 !important;
}
.v-card--reveal:hover {
  opacity: 1;
  padding-top: 0px;
  transition: padding-top cubic-bezier(0, 0.52, 1, 1) 1s;
}
.imgs {
  width: 95%;
  height: 95%;

  transition: width 1s, height 1s;
}

.imgs:hover {
  width: 100%;
  height: 100%;
}
.imgs1 {
  width: 100%;
  height: 50%;
  margin-top: 13px;
  display: flex;
  transition: width 1s, height 1s;
}

.imgs1:hover {
  display: flex;
  width: 100%;
  height: 70%;
}

@media only screen and (min-width: 600px) {
  /* For desktop: */
  .pangding {
    padding-left: 0;
    padding-right: 0px;
  }
  .pangding1 {
    padding-left: 7px;
  }
  .v-center-item {
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 5px;

    align-items: center;
    justify-content: center;
  }
  .v-center-item1 {
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 5px;

    align-items: center;
    justify-content: center;
  }
}

@media only screen and (max-width: 968px) {
  .custom_slider_main > .custom_slider {
    margin: -2px 0 !important;
  }
}

@media only screen and (min-width: 1264px) {
  .slider_content {
    height: 350px !important;
  }
}
@media only screen and (min-width: 1401px) {
  /* For desktop: */

  .pangding {
    padding-left: 100px;
    padding-right: 100px;
  }
  .pangding1 {
    padding-left: 300px;
  }

  .v-center-item {
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 60px;
    margin-right: 60px;
    width: 90%;
    align-items: center;
    justify-content: center;
  }

  .v-center-item1 {
    margin-right: 60px;

    align-items: center;
    justify-content: center;
  }
}
</style>
