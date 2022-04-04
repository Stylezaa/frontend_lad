<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-card flat>
          <v-card-title style="font-size: 0.8em"
            >Home > contact us
          </v-card-title>
          <v-card-title class="mt-n7"
            ><h3>{{ $t("main.CONTACT US") }}</h3></v-card-title
          >
          <v-divider class="mx-4"></v-divider>

          <v-layout row wrap>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-row>
                  <v-col cols="12" xs="12" sm="4" md="4" xl="3">
                    <div class="pt-5">
                      <v-card-title
                        style="font-size: 1.2em"
                        class="black--text"
                      >
                        <h4>Contact Us</h4></v-card-title
                      >
                      <v-divider class="mx-4"></v-divider>
                      <v-card-text
                        v-for="(item, index) in contact"
                        :key="index"
                        class="black--text py-2"
                      >
                        <h4>{{ $t("main." + item.title) }}</h4>
                      </v-card-text>
                    </div>
                    <v-card-title style="font-size: 1.2em" class="black--text">
                      <h4>Contact Us</h4></v-card-title
                    >
                    <v-divider class="mx-4"></v-divider>

                    <v-card-text class="pt-1">
                      <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-1 primary--text"
                        icon
                        fab
                        small
                      >
                        <v-icon size="20px">
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                    </v-card-text>
                  </v-col>

                  <v-col cols="12" xs="12" sm="9" md="9" xl="9">
                    <v-card-title style="font-size: 1.2em" class="black--text">
                      <h4>Get in touch with us</h4></v-card-title
                    >
                    <v-card-title style="font-size: 0.9em" class="mt-n3">
                      Your email address will not be published. Required fields
                      are marked.
                    </v-card-title>

                    <v-row>
                      <v-col cols="6">
                        <h4>Name <a class="red--text">*</a></h4>
                        <v-text-field outlined></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <h4>Email <a class="red--text">*</a></h4>
                        <v-text-field outlined></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <h4 style="font-size: 0.9em" class="mt-n3">
                          Website <a class="red--text">*</a>
                        </h4>
                        <v-text-field outlined></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <h4 style="font-size: 0.9em" class="mt-n3">
                          Comments <a class="red--text">*</a>
                        </h4>
                        <v-textarea name="input-7-1" outlined></v-textarea>
                      </v-col>
                    </v-row>
                    <div>
                      <v-btn class="ma-2" outlined color="primary">
                        Submit
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      contact: [
        { title: "2800 - 14th Ave, Suite 210" },
        { title: "Vientiane, Vientiane" },
        { title: "A" },
        { title: "B" },
        { title: "Tel + (856) 2155-7076" },
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
.magin10 {
  margin: 10px;
}
.imgs1 {
  width: 100%;
  height: 50%;
  margin-top: 13px;
  display: flex;
  transition: width 1s, height 1s;
}
</style>
