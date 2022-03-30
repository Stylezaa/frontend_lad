<template>
  <v-container grid-list-md>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="10">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-row class="bb">
              <v-img :src="require('../assets/images/404.png')">
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
  name: "error",
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
</style>
