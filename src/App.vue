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
  font-size: 1.1em;
  font-weight: 400;
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
  text-align: left;


  text-indent: 30px;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}
h1 {
  font-size: clamp(1.5em, 4vw, 2.5em);
}

h2 {
  font-size: clamp(1.2em, 4vw, 2.4em);
}
h4{
    font-size: clamp(0.9em, 4vw, 0.8em);
}

p {
  font-size: clamp(0.9em, 4vw, 0.8em);
}


</style>
