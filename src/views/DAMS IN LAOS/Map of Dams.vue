<template>
  <v-container grid-list-md>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="10">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > Dams in Laos > Map of Dams in Laos</v-card-title
            >
            <v-card-title class="mt-n7"
              ><h3>Map of Dams in Laos</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>

            <v-row class="bb">
              <v-img
                max-height="800"
                contain
                :src="require('../../assets/images/Map of Dam -01.png')"
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
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Map of Dams",
  data() {
    return {};
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
