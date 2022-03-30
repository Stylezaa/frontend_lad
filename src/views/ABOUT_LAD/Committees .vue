<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="10">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > About Lad > Committees</v-card-title
            >
            <v-card-title class="mt-n7"><h3>COMMITTEES</h3></v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text style="font-size: 1.5em" class="text-center"
              ><h3 class="primary--text">COMMITTEES OF LAD</h3></v-card-text
            >

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
                    v-for="(item, index) in items1.slice(0, 3)"
                    :key="index"
                    class="pa-3 mx-auto"
                  >
                    <v-card flat class="text-center ma-12 red v-card--reveal1">
                      <v-avatar size="150" class="lighten-2 mt-n16">
                        <img class="imgs22" :src="item.src" />
                      </v-avatar>

                      <v-card-text class="text-center white--text"
                        ><p>Mr. Viravong Viravong</p>
                      </v-card-text>
                      <v-card-text class="text-center textgray--text">
                        <p>Technical Committee</p></v-card-text
                      >
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
                    v-for="(item, index) in items1.slice(0, 2)"
                    :key="index"
                    class="pa-3 mx-auto"
                  >
                    <v-card flat class="text-center ma-12 red v-card--reveal1">
                      <v-avatar size="150" class="lighten-2 mt-n16">
                        <img class="imgs22" :src="item.src" />
                      </v-avatar>

                      <v-card-text class="text-center white--text"
                        ><p>Mr. Viravong Viravong</p>
                      </v-card-text>
                      <v-card-text class="text-center textgray--text">
                        <p>Planning Committee</p></v-card-text
                      >
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Committees",
  data() {
    return {
      items1: [
        {
          src: require("../../assets/images/Ellipse 2.png"),
          title: "NEWS",
        },
        {
          src: require("../../assets/images/Ellipse 2.png"),
          title: "EVENTS",
        },
        {
          src: require("../../assets/images/Ellipse 2.png"),
          title: "PUBLICATIONS",
        },
      ],
      datapdf: "",
    };
  },
  components: {},
  methods: {},

  mounted() {},
};
</script>

<style>
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
</style>
