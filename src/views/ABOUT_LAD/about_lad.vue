<template>
  <div grid-list-md>

    <v-container  grid-list-md>
    <v-row justify="center" align="center">
      
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > About LAD
            </v-card-title>
            <v-card-title class="mt-n7" id="History">
              <h3>{{ $t("main.HISTORY") }}</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>

            <v-row class="bb">
              <v-card-text style="font-size: 1em">
                <p>
                  {{ $t("main.test") }}
                </p>
              </v-card-text>

              <v-img
                :src="require('../../assets/images/Mask.png')"
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
            <div v-for="(item, index) in press" :key="index">
              <v-card-text style="font-size: 1em" class="text-center">
                LAO ASSOCIATION ON DAMS
              </v-card-text>
              <v-card-title style="font-size: 1.2em" class="primary--text">
                <h4 style="font-size: 1.2em">
                  {{ $t("main." + item.header) }}
                </h4></v-card-title
              >

              <v-card-text class="textt" style="font-size: 1em">
                <p>
                  {{ $t("main.Committee ObjectivesW") }}
                </p>
              </v-card-text>
            </div>
            <div>
              <v-card-title class="primary--text">
                <h4 style="font-size: 1.2em">
                  {{ $t("main.Establishment of the Lao Dam Association") }}
                </h4></v-card-title
              >

              <v-card-text class="textt" style="font-size: 1em">
                <p class="textt">

                  <ul style="list-style-type:disc">
                  <br />
                  <li> {{ $t("main.Establishment1") }}. </li><li>
                  {{ $t("main.Establishment2") }} </li><li>
                  {{ $t("main.Establishment3") }} </li><li>
                  {{ $t("main.Establishment4") }}. </li><li>
                  {{ $t("main.Establishment5") }} </li><li>
                  {{ $t("main.Establishment6") }} </li><li>
                  {{ $t("main.Establishment7") }}</li>
                  </ul>
                </p>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row></v-container>

    <div class="bg_about" id="Organization">
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="8" xl="8">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat class="bg_about">
                <v-card-title
                  ><h4>{{ $t("main.Organisation of LAD") }}</h4></v-card-title
                >
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

    <v-row justify="center" align="center" id="Board">
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-col cols="12" xs="12" sm="12" md="12" >
          <v-card flat>
            <v-card-text style="font-size: 1.5em" class="text-center"
              ><h3 class="primary--text">
                {{ $t("main.BOARD of LAD") }}
              </h3></v-card-text
            >

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">
                {{ $t("main.BOARD") }}
              </h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                    xs12
                   
                    sm6
                     md4
                    lg4
                    xl4
                    v-for="(item, index) in Board.slice(0, 1)"
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
                        ><h3>{{ $t("main." + item.title) }}</h3>
                      </v-card-text>
                      <v-card-text class="text-center white--text">
                        <h3>{{ $t("main." + item.name) }}</h3></v-card-text
                      >
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                     xs12
                   
                    sm6
                     md4
                    lg4
                    xl4
                    v-for="(item, index) in Board1.slice(0, 2)"
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
                        ><h3>{{ $t("main." + item.title) }}</h3>
                      </v-card-text>
                      <v-card-text class="text-center white--text">
                        <h3>{{ $t("main." + item.name) }}</h3></v-card-text
                      >
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">
                {{ $t("main.Auditor") }}
              </h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                     xs12
                   
                    sm6
                     md4
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
                        ><h3>{{ $t("main." + item.name) }}</h3>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">
                {{ $t("main.Director") }}
              </h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                     xs12
                   
                    sm6
                     md4
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
                        ><h3>{{ $t("main." + item.name) }}</h3>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">
                {{ $t("main.Technical Committee") }}
              </h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                      xs12
                   
                    sm6
                     md4
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
                        ><h3>{{ $t("main." + item.name) }}</h3>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>

            <v-divider class="mx-4"></v-divider>

            <v-card-text class="text-center"
              ><h4 class="textgray--text">
                {{ $t("main.Planning Committee") }}
              </h4></v-card-text
            >

            <v-col cols="12" xs="12" sm="12" md="12" xl="12">
              <v-card flat>
                <v-layout row wrap>
                  <v-flex
                     xs12
                   
                    sm6
                     md4
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
                        ><h3>{{ $t("main." + item.name) }}</h3>
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

    <div class="bg_about" id="Committees">
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12"  md="8" xl="8">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat class="bg_about">
                <v-card-title
                  ><h4>{{ $t("main.COMMITTEES") }}</h4></v-card-title
                >
                <v-divider class="mx-4 black"></v-divider>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <v-container grid-list-md id="Membership">
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12"  md="8" xl="8">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-card-title
                  ><h4>{{ $t("main.Memberships") }}</h4></v-card-title
                >
                <v-divider class="mx-4"></v-divider>

                <v-card-text class="black--text" style="font-size: 1em">
                  <p>
                    {{ $t("main.Memberships1") }}
                    
                   
                    {{ $t("main.Memberships2") }}  
                    <ul style="list-style-type:'-   '">
                    <li>{{ $t("main.Memberships3") }} </li>
                    <li>{{ $t("main.Memberships4") }} </li>
                    <li>{{ $t("main.Memberships5") }}</li>
                    </ul>
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <v-container grid-list-md>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12"  md="8" xl="8">
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-card-title
                  ><h4>{{ $t("main.Document") }}</h4></v-card-title
                >
                <v-divider class="mx-4 black"></v-divider>

                <v-flex
                  v-for="(item, index) in items"
                  :key="index"
                  :src="item.src"
                >
                  <v-card flat class="max-w-sm rounded shadow-lg">
                    <div>
                      <v-row>
                        <v-col cols="5" xs="3" sm="3" md="3" xl="2">
                          <v-img
                            aspect-ratio="1"
                            class="mx-auto grey lighten-2 magin10"
                            :src="item.src"
                          >
                          </v-img>
                        </v-col>
                        <v-col
                          cols="7"
                          xs="9"
                          sm="9"
                          md="9"
                          xl="10"
                          v-if="$route.params.locale == 'en'"
                        >
                          <h4 style="font-size: 1em">
                            {{ item.title }}
                          </h4>
                          <h4 class="textgray--text" style="font-size: 1em">
                            {{ item.date }}
                          </h4>
                          <h4 class="textgray--text" style="font-size: 1em">
                            {{ item.Type }}
                          </h4>
                          <h4>
                            <v-btn
                              color="primary"
                              class="ma-6"
                              :href="item.pdf"
                              target="_blank"
                              >Preview</v-btn
                            >
                          </h4>
                        </v-col>
                        <v-col cols="7" xs="9" sm="9" md="9" xl="10" v-else>
                          <h4 style="font-size: 1em">
                            {{ item.title_la }}
                          </h4>
                          <h4 class="textgray--text" style="font-size: 1em">
                            {{ item.date }}
                          </h4>
                          <h4 class="textgray--text" style="font-size: 1em">
                            {{ item.Type }}
                          </h4>
                          <h4>
                            <v-btn
                              color="primary"
                              class="ma-6"
                              :href="item.pdf_la"
                              target="_blank"
                              >Preview</v-btn
                            >
                          </h4>
                        </v-col>
                      </v-row>
                    </div>
                    <v-divider></v-divider>
                  </v-card>
                  <br />
                </v-flex>
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
            "The objective of the committee is to promote the progress in the establishment of projects, the construction, maintenance, monitoring and operation of hydraulic structures and the environment. To achieve this objective, it gathers and discusses the experiences and the proceedings which are related to its cause and when necessary caters for their publication. ",
        },
      ],
      press1: [
        {
          header: "Establishment of the Lao Dam Association",
        },
      ],

      Board: [
        {
          src: require("../../assets/images/BOARD of LAD/President.png"),
          title: "President",
          name: "Viraphonh VIRAVONG",
        },
      ],
      Board1: [
        {
          src: require("../../assets/images/BOARD of LAD/Vice President1.png"),
          title: "Vice President",
          name: "Khampaseuth THEPVONGSA",
        },

        {
          src: require("../../assets/images/BOARD of LAD/Vice President.png"),
          title: "Vice President",
          name: "Sengpasong PHRAKHONKHAM",
        },
      ],
      Auditor: [
        {
          src: require("../../assets/images/BOARD of LAD/Hatsady SYSOMLATH.png"),

          name: "Hatsady SYSOMLATH",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Khanthong VORACHITH.png"),

          name: "Khanthone VORACHITH",
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

          name: "Khamhou XAPHOUVONG",
        },
        {
          src: require("../../assets/images/BOARD of LAD/Ellipse 3.png"),

          name: "Dousith PHOMMACHANH",
        },
      ],

      items: [
        {
          src: require("../../assets/images/Image 1.png"),
          title: "Charter of the Lao Association on Dams",
          title_la: "ກົດລະບຽບຂອງສະມາຄົມເຂື່ອນລາວ",
          pdf: "https://drive.google.com/file/d/1S7OYvDIM6yFgzjKAtWOZfkXKV-l4H_Od/view",
          pdf_la:
            "https://drive.google.com/file/d/1QPFSZJ-ULWxjP0c7cMKHwPok2spmRzwl/view",
          date: "Nov 09, 2021",
          Type: ".PDF",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {
    console.log(this.$route.params.locale);
  },
};
</script>

<style>
.Testediter {
  white-space: pre-wrap;
  text-align: justify;
  text-align: left;

  text-indent: 30px;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}
.bb {
  margin-top: 20px;
}
.textt {
  white-space: pre-line;
}

.imgs22 {
  width: 90%;
  height: 90%;
  transition: width 1s, height 1s;
}
.imgs22:hover {
  width: 100%;
  height: 100%;
  transform: scale(1.5);
}
.v-card--reveal1 {
  opacity: 1;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
  border-radius: 5px;
}
.v-card--reveal1:hover {
  opacity: 5;
  padding-bottom: 20px;
  padding-top: 20px;
  transition: padding-top, cubic-bezier(0, 0.52, 1, 1) 1s;
}
li {
  text-decoration: none;
  color: #000;
  cursor: none;
  text-indent: 0;
}
</style>
