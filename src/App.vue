<template>
  <v-app>
    <Navigation />
    <Contend />
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/core/Navigation.vue";
import Footer from "@/components/core/Footer.vue";
import Contend from "@/components/core/Contend.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
    Contend,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

#app {
  font-family: "Saysettha OT", "Roboto", sans-serif;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  color: #2c3e50;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50vh;
}

p {
  text-align: justify;
}
</style>
