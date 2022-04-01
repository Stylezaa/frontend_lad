<template>
  <v-container grid-list-md>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card class="mx-auto" flat>
            <v-card-title style="font-size: 0.8em">Home > Link</v-card-title>
            <v-card-title class="mt-n7"><h3>LINK</h3></v-card-title>
            <v-divider class="mx-4"></v-divider>

            <v-row class="bb"> </v-row>
            <router-view></router-view>

      
            <!-- Table -->
            <div id="link-table" style="overflow-x: auto">
              <table>
                <tr>
                  <td>
                    <img src="../../assets/images/Links/logo-cigb.png" alt="" />
                  </td>
                  <td>
                    <a href="https://www.icold-cigb.org/" target="_blank"
                      >International Commission on Large Dams (ICOLD)</a
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="../../assets/images/Links/jcold.png" alt="" />
                  </td>
                  <td>
                    <a href="http://jcold.or.jp/e/" target="_blank"
                      >Japan Commission on Large Dams (JCOLD)</a
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="../../assets/images/Links/CDA-ACB.png"
                      alt=""
                      style="overflow-x: auto"
                    />
                  </td>
                  <td>
                    <a href="https://cda.ca/international/icold" target="_blank"
                      >Canadian Dam Association (CDA)</a
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="../../assets/images/Links/CHINCOLD.png" alt="" />
                  </td>
                  <td>
                    <a
                      href="http://www.chincold-smart.com/en/index"
                      target="_blank"
                      >CHINESE NATIONAL COMMITTEE ON LARGE DAMS</a
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="../../assets/images/Links/logo.png" alt="" />
                  </td>
                  <td>
                    <a href="https://www.swissdams.ch/en" target="_blank"
                      >Schweizerisches Talsperrenkomitee</a
                    >
                  </td>
                </tr>
              </table>
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "link",
  data() {
    return {
      name: "link-table",
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

#link-table {
  text-align: left;
}

table {
  padding: 2%;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 8px;
}

img {
  max-inline-size: 100%;
  block-size: auto;
  padding: 5%;
}
tr:nth-child(even) {
  background-color: #d0e3f1;
}
</style>
