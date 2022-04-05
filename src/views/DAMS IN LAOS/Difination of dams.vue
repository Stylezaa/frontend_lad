<template>
  <v-container grid-list-md>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > Dams in Laos > Definition of Dams</v-card-title
            >
            <v-card-title class="mt-n7"
              ><h3>{{ $t("main.DEFINITION OF DAMS") }}</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>

            <v-row class="bb"> </v-row>
            <div v-for="(item, index) in press" :key="index">
              <v-card-title style="font-size: 1.2em" class="primary--text">
                <h4>
                  {{ $t("main." + item.header) }}
                </h4></v-card-title
              >

              <v-card-title style="font-size: 1em">
                <p class="Testediter">
                  {{ $t("main.WHAT IS DAM?s") }}
                </p></v-card-title
              >
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Difination",
  data() {
    return {
      press: [
        {
          src: require("../../assets/images/Mask.png"),
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
  computed: {},
  methods: {},
};
</script>

<style>
.bb {
  margin-top: 20px;
}
.Testediter {
  white-space: pre-wrap;
}
</style>
