<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col  cols="12" xs="12" sm="12" md="8" xl="8">
        <v-card flat>
          <v-card-title style="font-size: 0.8em"
            >Home > News > Archives list</v-card-title
          >
          <v-card-title class="mt-n7"><h3>ARCHIVES LIST</h3></v-card-title>
          <v-divider class="mx-4"></v-divider>

          <v-layout row wrap>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-row>
                  <v-col cols="12" xs="12" sm="4" md="4" xl="3">
                    <v-text-field
                      single-line
                      outlined
                      placeholder="Search"
                      :append-icon="'mdi-magnify'"
                      style="width: 100%"
                    >
                    </v-text-field>
                    <v-card-title
                      style="font-size: 1.2em"
                      class="textgray--text mt-n8"
                    >
                      <h4>Latest News</h4></v-card-title
                    >
                    <v-card outlined>
                      <v-flex
                        v-for="(item, index) in items.slice(0, 5)"
                        :key="index"
                        :src="item.src"
                      >
                        <v-hover>
                          <v-card
                            flat
                            slot-scope="{ hover }"
                            class="max-w-sm rounded shadow-lg card"
                          >
                            <v-col cols="12" xs="12" sm="12" md="12">
                              <v-row>
                                <v-img
                                  aspect-ratio="1"
                                  class="grey lighten-2 magin10"
                                  :src="item.src"
                                  style="width: 30%"
                                >
                                </v-img>
                                <v-card-text style="width: 60%">
                                  <h4 style="font-size: 0.9em">
                                    {{ item.title }}
                                  </h4>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 0.8em"
                                  >
                                    {{ item.date }}
                                  </h4>
                                </v-card-text>

                                <v-fade-transition>
                                  <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#190033"
                                    z-index="0"
                                  >
                                  </v-overlay>
                                </v-fade-transition>
                              </v-row>
                            </v-col>
                          </v-card>
                        </v-hover>
                        <v-divider></v-divider>
                      </v-flex>
                      <v-card flat class="mx-auto">
                        <div class="text-center">
                          <v-btn
                            text
                            style="font-size: 0.8em"
                            class="textgray--text"
                          >
                            <div>See more ></div>
                          </v-btn>
                        </div>
                      </v-card>
                    </v-card>
                  </v-col>
                  <v-col cols="12" xs="12" sm="8" md="8" xl="9">
                      <v-card flat>
                          <v-card flat height="500">
                            <div
                              class="text-center primary--text"
                              style="font-size: 2em"
                            >
                              No information!
                            </div>
                          </v-card>
                        </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Newsletters",
  data() {
    return {
      items: [],

      items2: [
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
.bb {
  margin-top: 20px;
}
.magin10 {
  margin: 10px;
}
</style>
