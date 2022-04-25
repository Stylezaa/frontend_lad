<template>
  <v-container grid-list-md>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card class="mx-auto" flat>
            <v-card-title style="font-size: 0.8em">Home > Link</v-card-title>
            <v-card-title class="mt-n7"><h3>LINK</h3></v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-row class="bb">
              <v-col cols="12" xs="12" sm="12" md="12" xl="6">
                <!-- Table -->
                <v-card-title style="font-size: 1.2em" class="primary--text">
                  <h4>WORLD</h4></v-card-title
                >
                <div style="overflow-x: auto">
                  <table>
                    <tr>
                      <td>
                        <v-img
                          max-height="125"
                          max-width="125"
                          src="../../assets/images/Links/logo-cigb.png"
                          alt=""
                        />
                      </td>

                      <td>
                        <a style="text-decoration: none" href="https://www.icold-cigb.org/" target="_blank"
                          >International Commission on Large Dams (ICOLD)</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td class="pagingggg">
                        <v-img
                          max-width="250"
                          src="../../assets/images/Links/logo.png"
                          alt=""
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none" href="https://www.swissdams.ch/en" target="_blank"
                          >Schweizerisches Talsperrenkomitee</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <v-img
                          max-height="125"
                          max-width="125"
                          src="../../assets/images/Links/jcold.png"
                          alt=""
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none" href="http://jcold.or.jp/e/" target="_blank"
                          >Japan Commission on Large Dams (JCOLD)</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <v-img
                          max-height="125"
                          max-width="125"
                          src="../../assets/images/Links/CHINCOLD.png"
                          alt=""
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none"
                          href="http://www.chincold-smart.com/en/index"
                          target="_blank"
                          >CHINESE NATIONAL COMMITTEE ON LARGE DAMS</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="pagingggg">
                        <v-img
                          max-width="250"
                          src="../../assets/images/Links/CDA-ACB.png"
                          alt=""
                          style="overflow-x: auto"
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none"
                          href="https://cda.ca/international/icold"
                          target="_blank"
                          >Canadian Dam Association (CDA)</a
                        >
                      </td>
                    </tr>
                  </table>
                </div>
              </v-col>
              <br />

              <v-col cols="12" xs="12" sm="12" md="12" xl="6">
                <!-- Table -->
                <v-card-title style="font-size: 1.2em" class="primary--text">
                  <h4>{{ $t("main.A") }}</h4></v-card-title
                >
                <div style="overflow-x: auto">
                  <table>
                    <tr>
                      <td>
                        <v-img
                          max-height="125"
                          max-width="125"
                          src="../../assets/images/Links/National_Assembly_of_Laos_logo.png"
                          alt=""
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none" href="https://na.gov.la/?lang=en" target="_blank"
                          >{{ $t("main.The National Assembly of The Lao PDR") }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <v-img
                          max-height="125"
                          max-width="125"
                          src="../../assets/images/Links/MInistry of energy and mine.png"
                          alt=""
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none"
                          href="https://www.mem.gov.la/?page_id=629&lang=en"
                          target="_blank"
                          >{{ $t("main.Ministry of Energy And Mines") }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <v-img
                          max-height="125"
                          max-width="125"
                          src="../../assets/images/Links/Logo_ມະຫາວິທະຍາໄລແຫ່ງຊາດ (National University of Laos).png"
                          alt=""
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none"
                          href="https://nuol.edu.la/index.php/lo/"
                          target="_blank"
                          >{{ $t("main.National University of Laos (NUOL)") }}</a
                        >
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <v-img
                          max-height="125"
                          max-width="125"
                          src="../../assets/images/Links/ELD logo.png"
                          alt=""
                        />
                      </td>
                      <td>
                        <a style="text-decoration: none" href="https://edlgen.com.la/" target="_blank"
                          >{{ $t("main.Electricite Du Laos (MRC)") }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <v-img
                        max-height="125"
                        max-width="125"
                        src="../../assets/images/Links/MRC logo.png"
                        alt=""
                      />

                      <td>
                        <a    style="text-decoration: none" href="https://www.mrcmekong.org/" target="_blank"
                          >{{ $t("main.Mekong River Commission (MRC)") }}</a
                        >
                      </td>
                    </tr>
                  </table>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Link",
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
.pagingggg {
  padding-top: 40px;
  padding-bottom: 40px;
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
