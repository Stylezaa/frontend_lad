<template>
  <v-container grid-list-md>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="10">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > About Lad > History</v-card-title
            >
            <v-card-title class="mt-n7"><h3>LAD HISTORY</h3></v-card-title>
            <v-divider class="mx-4"></v-divider>

            <v-row class="bb">
              <v-img :src="require('../../assets/images/Mask.png')">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center">
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-row>
            <div v-for="(item, index) in press" :key="index">
              <v-card-text style="font-size: 0.8em" class="text-center">
                {{ item.header }}</v-card-text
              >
              <v-card-title style="font-size: 1.2em" class="primary--text">
                <h4>
                  {{ item.header }}
                </h4></v-card-title
              >

              <v-card-title style="font-size: 0.8em">
                {{ item.title }}</v-card-title
              >
              <v-card-title class="mt-n3" style="font-size: 0.8em">
                {{ item.title1 }}</v-card-title
              >

              <v-card-title class="mt-n3" style="font-size: 0.8em">
                {{ item.title2 }}</v-card-title
              >
            </div>
            <div v-for="(item, index) in press1" :key="index">
              <v-card-title style="font-size: 1.2em" class="primary--text">
                <h4>
                  {{ item.header }}
                </h4></v-card-title
              >

              <v-card-title class="textt" style="font-size: 0.8em">
                <p>{{ item.title }}</p>
              </v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "History",
  data() {
    return {
      press: [
        {
          src: require("../../assets/images/Mask.png"),
          header: "Committee Objectives",

          title:
            "  The objective of the committee is to promote the progress in the establishment of projects, the construction, maintenance, monitoring and operation of hydraulic structures and the environment. To achieve this objective, it gathers and discusses the experiences and the proceedings which are related to its cause and when necessary caters for their publication.",
        },
      ],
      press1: [
        {
          header: "Establishment of the Lao Dam Association",

          title:
            "  Open LAD inaugural Assembly 13 November 2020. - On 14/01/2021 the first extra ordinary board meeting -  Decision of Minister of Energy and Mines No.0111/MEM, dated 29 January 2021 regrading formation of LAD. -  Decision of Minister of Energy and Mines No.0110/MEM, dated 29 January 2021 approval of LAD’s charter. - Decision of Minister of Energy and Mines No.0112/MEM, dated 29 January 2021 approval of LAD’s board members. - LAD’s charter was signed by President on so 30 January 2021. -  President officially appointed Director of LAD as per Decision No. 003/LAD.P, dated February 2021. -  LAD has been duly registered as per registration No.23/DSD, dated 11 February 2021.",
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
.textt {
  white-space: pre-line;
}
</style>
