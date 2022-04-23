<template>
  <v-container grid-list-xl>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > Dams in Laos > List of dams in Laos</v-card-title
            >
            <v-card-title class="mt-n7"
              ><h3>{{ $t("main.LIST OF DAMS IN LAOS") }}</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <div v-if="$route.params.locale == 'en'">
        <v-data-table
          :headers="fields"
          :items="items"
          :items-per-page="itemsPerPage"
          hide-default-footer
          :search="search"
          class="elevation-1"
        >
          <template v-slot:item.installed_power_capacity="{ item }">
            {{
              item.installed_power_capacity
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }}
          </template></v-data-table
        >
      </div>
      <div v-else>
        <v-data-table
          :headers="fields_la"
          :items="items"
          :items-per-page="itemsPerPage"
          hide-default-footer
          :search="search"
          class="elevation-1"
        >
          <template v-slot:item.installed_power_capacity="{ item }">
            {{
              item.installed_power_capacity
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }}
          </template>
        </v-data-table>
      </div>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "List",
  data() {
    return {
      press: [
        {
          title1:
            "Electricity generation in Laos is produced by one coal-fired power plant and several hydroelectric dams. 53% of power generated in 2016 came from renewable sources. The majority of power produced from the Honsa plant is exported to Thailand. The Xayaburi run-of-river dam is expected to generate over 7,000 GWh of electricity per year, which will mainly be exported to Thailand as part of the development of an interconnected Southeast Asian energy market. ",
        },
      ],
      page: 1,
      search: "",
      pageCount: 0,
      itemsPerPage: 100,

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

      fields_la: [
        {
          text: "ລຳດັບ",
          value: "id",
          align: "start",
        },

        {
          text: "ຊື່ໂຄງການ",
          value: "name_of_project",
          align: "start",
        },
        {
          text: "ຜູ້ພັດທະນາໂຄງການ",
          value: "operator",
          align: "start",
        },
        {
          text: "ປະເພດຂອງເຂື່ອນ",
          value: "type_of_dam",
          align: "start",
        },
        {
          text: "ແມ່ນ້ຳ",
          value: "impounds",
          align: "start",
        },
        {
          text: "ເມືອງ",
          value: "district",
          align: "start",
        },
        {
          text: "ແຂວງ",
          value: "province",
          align: "start",
        },
        {
          text: "ລວງສູງ (ແມັດ)",
          value: "hight",
          align: "start",
        },
        {
          text: "ຂະໜາດອ່າງເກັບນ້ຳ (10^6 m3)",
          value: "storage_capacity",
          align: "start",
        },
        {
          text: "ພື້ນທີ່ອ່າງເກັບນ້ຳ (km2)",
          value: "reservoir_area",
          align: "start",
        },
        {
          text: "ກຳລັງຕິດຕັ້ງໄຟຟ້າ (MW)",
          value: "installed_power_capacity",
          align: "start",
        },
        {
          text: "ປີສຳເລັດ",
          value: "year_completed",
          align: "start",
        },
        {
          text: "ອື່ນໆ",
          value: "noted",
          align: "start",
        },
      ],
      items: [],
    };
  },
  computed: {},
  methods: {
    getColor(installed_power_capacity) {
      if (installed_power_capacity > 400) return "red";
      else if (installed_power_capacity > 200) return "orange";
      else return "green";
    },
  },
  mounted() {
    axios.get("https://lad-api007.herokuapp.com/api/dam").then((response) => {
      // JSON responses are automatically parsed.
      // https://lad-api007.herokuapp.com/api/dam
      // this.$store.getters.getBaseUrl + "/api/dam"
      this.items = response.data.data;
      // console.log(this.items);
      // console.log(
      //   "122222".toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      // );
      //console.log(response.data.data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
      // this.items.installed_power_capacity.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
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
