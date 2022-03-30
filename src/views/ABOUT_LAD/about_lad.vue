<template>
  <div grid-list-md>
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
                <p>
                  Open LAD inaugural Assembly 13 November 2020 <br />· On
                  14/01/2021 the first extra ordinary board meeting <br />·
                  Decision of Minister of Energy and Mines No.0111/MEM, dated 29
                  January 2021 regrading formation of LAD. <br />· Decision of
                  Minister of Energy and Mines No.0110/MEM, dated 29 January
                  2021 approval of LAD’s charter. <br />· Decision of Minister
                  of Energy and Mines No.0112/MEM, dated 29 January 2021
                  approval of LAD’s board members. <br />· LAD’s charter was
                  signed by President on so 30 January 2021. <br />· President
                  officially appointed Director of LAD as per Decision No.
                  003/LAD.P, dated February 2021. <br />· LAD has been duly
                  registered as per registration No.23/DSD, dated 11 February
                  2021.
                </p>
              </v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row>

    <div class="bg_about">
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="10">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat class="bg_about">
                <v-card-title><h4>Organisation of LAD</h4></v-card-title>
                <v-divider class="mx-4 black"></v-divider>
              </v-card>
              <v-row class="bb">
                <v-img
                  :src="require('../../assets/images/Organisation of LAD.png')"
                  max-height="500"
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
              </v-row>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-text style="font-size: 1.5em" class="text-center"
              ><h3 class="primary--text">BOARD of LAD</h3></v-card-text
            >

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">BOARD</h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                    sm6
                    lg4
                    xl4
                    v-for="(item, index) in Board"
                    :key="index"
                    class="pa-3 mx-auto"
                  >
                    <v-card
                      flat
                      class="text-center ma-12 primary v-card--reveal1"
                    >
                      <v-avatar size="150" class="lighten-2 mt-n16">
                        <img class="imgs22" :src="item.src" />
                      </v-avatar>

                      <v-card-text class="text-center white--text"
                        ><p>{{ item.title }}</p>
                      </v-card-text>
                      <v-card-text class="text-center white--text">
                        <p>{{ item.name }}</p></v-card-text
                      >
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">Auditor</h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                    sm6
                    lg4
                    xl4
                    v-for="(item, index) in Auditor"
                    :key="index"
                    class="pa-3 mx-auto"
                  >
                    <v-card
                      flat
                      class="text-center ma-12 textgray v-card--reveal1"
                    >
                      <v-avatar size="150" class="lighten-2 mt-n16">
                        <img class="imgs22" :src="item.src" />
                      </v-avatar>

                      <v-card-text class="text-center white--text"
                        ><p>{{ item.name }}</p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">Director</h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                    sm6
                    lg4
                    xl4
                    v-for="(item, index) in Director.slice(0, 1)"
                    :key="index"
                    class="pa-3 mx-auto"
                  >
                    <v-card
                      flat
                      class="text-center ma-12 brownler v-card--reveal1"
                    >
                      <v-avatar size="150" class="lighten-2 mt-n16">
                        <img class="imgs22" :src="item.src" />
                      </v-avatar>

                      <v-card-text class="text-center white--text"
                        ><p>{{ item.name }}</p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">Technical Committee</h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                    sm6
                    lg4
                    xl4
                    v-for="(item, index) in Technical.slice(0, 3)"
                    :key="index"
                    class="pa-3 mx-auto"
                  >
                    <v-card flat class="text-center ma-12 red v-card--reveal1">
                      <v-avatar size="150" class="lighten-2 mt-n16">
                        <img class="imgs22" :src="item.src" />
                      </v-avatar>

                      <v-card-text class="text-center white--text"
                        ><p>{{ item.name }}</p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">Planning Committee</h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                    sm6
                    lg4
                    xl4
                    v-for="(item, index) in Planning.slice(0, 2)"
                    :key="index"
                    class="pa-3 mx-auto"
                  >
                    <v-card flat class="text-center ma-12 red v-card--reveal1">
                      <v-avatar size="150" class="lighten-2 mt-n16">
                        <img class="imgs22" :src="item.src" />
                      </v-avatar>

                      <v-card-text class="text-center white--text"
                        ><p>{{ item.name }}</p>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>
          </v-card>
        </v-col>
      </v-col>
    </v-row>

    <div class="bg_about">
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="10">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat class="bg_about">
                <v-card-title><h4>COMMITTEES</h4></v-card-title>
                <v-divider class="mx-4 black"></v-divider>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="10">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-card-title><h4>Memberships</h4></v-card-title>
                <v-divider class="mx-4"></v-divider>

                <v-card-title style="font-size: 0.9em" class="mt-n3">
                  The Lao Association on Dams is composed of individual members
                  and collective members (organization). Individual members are
                  mangers, scientists, specialists, businessmen, engineers,
                  technologists, related students. Collective members are
                  government organizations, academic organizations, enterprises,
                  power producers, professional associations, institute of
                  engineers, consulting companies, construction companies,
                  suppliers of equipment and materials and other institutions.
                  <br />The Association members shall have three (3) categories
                  of members as follows: <br />
                  - Ordinary members; <br />- Support membersand <br />-
                  Honorary members
                </v-card-title>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="10">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-card-title><h4>Document</h4></v-card-title>
                <v-divider class="mx-4 black"></v-divider>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
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

          title: " ",
        },
      ],

      Board: [
        {
          src: require("../../assets/images/BOARD of LAD/Vice President1.png"),
          title: "Vice President",
          name: "Assoc. Prof. Dr. Khampaseuth THEPVONGSA",
        },
        {
          src: require("../../assets/images/BOARD of LAD/President.png"),
          title: "President",
          name: "Viraphonh VIRAVONG",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Vice President.png"),
          title: "Vice President",
          name: "Assoc. Prof. Dr. Sengpasong PHRAKHONKHAM",
        },
      ],
      Auditor: [
        {
          src: require("../../assets/images/BOARD of LAD/Hatsady SYSOMLATH.png"),

          name: "Hatsady SYSOMLATH",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Khanthong VORACHITH.png"),

          name: "Khanthong VORACHITH",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Ellipse 3.png"),

          name: "Bounnhang Phengsouvanh",
        },
      ],

      Director: [
        {
          src: require("../../assets/images/BOARD of LAD/Sicharth Boudzakittirath.png"),

          name: "Sicharth Boudzakittirath",
        },
      ],

      Technical: [
        {
          src: require("../../assets/images/BOARD of LAD/Ellipse 3.png"),

          name: "Voradeth PHONEKEO",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Viraphanh Nandavong.png"),

          name: "Viraphanh Nandavong",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Ellipse 3.png"),

          name: "Phetsamone LUANGAPHAI",
        },
      ],

      Planning: [
        {
          src: require("../../assets/images/BOARD of LAD/Dr.Khamhou.png"),

          name: "Dr. Khamhou XAPHOUVONG",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Ellipse 3.png"),

          name: "Dr. Dousith PHOMMACHANH",
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
