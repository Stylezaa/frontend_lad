<template>
  <v-container grid-list-md>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="10">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > Dams in Laos > Map of Dams</v-card-title
            >
            <v-card-title class="mt-n7"><h3>MAP OF DAMS</h3></v-card-title>
            <v-divider class="mx-4"></v-divider>

            <v-row class="bb"> </v-row>

            <div>
              <h2>Search and add a pin</h2>
              <GmapAutocomplete @place_changed="setPlace" />
              <button @click="addMarker">Add</button>
            </div>

            <GmapMap
              :center="center"
              :zoom="12"
              style="width: 100%; height: 400px"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center = m.position"
              />
            </GmapMap>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Difination of dams",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
       markers: [],
      places: [],
      press: [
        {
          header: "WHAT IS DAM?",

          title:
            "The International Commission On Large Dams (ICOLD) is a non-governmental International Organization which provides a forum for the exchange of knowledge and experience in dam engineering.",
          title1:
            "The Organization leads the profession in ensuring that dams are built safely, efficiently, economically, and without detrimental effects on the environment. Its original aim was to encourage advances in the planning, design, construction, operation, and  maintenance of large dams and their associated civil works, by collecting and disseminating relevant information and by studying related technical questions.",
          title2:
            "Since the late sixties, focus was put on subjects of current concern such as dam safety, monitoring of performance, reanalysis of  older dams and spillways, effects of ageing and environmental impact. More recently, new subjects include cost studies at the  planning and construction stages, harnessing international rivers, information for the public at large, and financing.",
        },
      ],
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
     addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style>
.bb {
  margin-top: 20px;
}
</style>
