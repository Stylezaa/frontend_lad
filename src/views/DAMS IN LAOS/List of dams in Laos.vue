<template>
  <v-container grid-list-xl>
    <v-row justify="center" align="center">
      <v-col  cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > Dams in Laos > List of dams in Laos</v-card-title
            >
            <v-card-title class="mt-n7"
              ><h3>LIST OF DAMS IN LAOS</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>

          
        
          </v-card>
        </v-col>
      </v-col>
    </v-row>
    <div>
      <v-data-table
        :headers="fields"
        :items="items"
        items-per-page="100"
        hide-default-footer
        class="elevation-1"
      ></v-data-table>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "Difination of dams",
  data() {
    return {
      press: [
        {
          title1:
            "Electricity generation in Laos is produced by one coal-fired power plant and several hydroelectric dams. 53% of power generated in 2016 came from renewable sources. The majority of power produced from the Honsa plant is exported to Thailand. The Xayaburi run-of-river dam is expected to generate over 7,000 GWh of electricity per year, which will mainly be exported to Thailand as part of the development of an interconnected Southeast Asian energy market. ",
        },
      ],
      page: 1,
      pageCount: 0,

      fields: [
        {
          text: "No.",
          value: "id",
          align: "start",
        },

        {
          text: "Name of Project",
          value: "name_of_project",
          align: "start",
        },
        {
          text: "Operator",
          value: "operator",
          align: "start",
        },
        {
          text: "Type of Dam",
          value: "type_of_dam",
          align: "start",
        },
        {
          text: "Impounds",
          value: "impounds",
          align: "start",
        },
        {
          text: "District",
          value: "district",
          align: "start",
        },
        {
          text: "Province",
          value: "province",
          align: "start",
        },
        {
          text: "Hight(m)",
          value: "hight",
          align: "start",
        },
        {
          text: "Storage capacity (10^6 m3)",
          value: "storage_capacity",
          align: "start",
        },
        {
          text: "Reservoir area (km2)",
          value: "reservoir_area",
          align: "start",
        },
        {
          text: "Installed power Capacity (MW)",
          value: "installed_power_capacity",
          align: "start",
        },
        {
          text: "Year completed",
          value: "year_completed",
          align: "start",
        },
        {
          text: "Noted",
          value: "noted",
          align: "start",
        },
      ],
      items: [],
    };
  },
  computed: {},
  methods: {},
  mounted() {
    axios.get(this.$store.getters.getBaseUrl + "/dam").then((response) => {
      // JSON responses are automatically parsed.
      console.log(response.data);
      this.items = response.data.data;
      //    console.log(  JSON.parse(response.data))
    });
  },
};
</script>

<style>
.v-data-table td {
  background: #f0f8ff;
}
.v-data-table tr:nth-child(odd) td {
  background: #6db2e27e;
}
.v-data-table tr:hover td {
  background-color: #eee;
}
.v-data-table-header th {
  white-space: normal;
}
</style>
