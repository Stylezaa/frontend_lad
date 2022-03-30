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
#app {
  font-family: "Phetsarath OT";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  height: 100vh;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 50vh;
}
</style>
