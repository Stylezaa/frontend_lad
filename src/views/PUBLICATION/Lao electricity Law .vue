<template>
  <v-row justify="center">
    <v-img
     :src="require('../../assets/images/comming.png')"
      max-width="1000"
      max-height="500"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-row>
</template>
