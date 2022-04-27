<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-text style="font-size: 0.8em"
              >Home > News > Newsletters</v-card-text
            >
            <v-card-title class="mt-n7"
              ><h3>{{ $t("main.NEWSLETTERS") }}</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>
            <br />

            <v-card flat>
              <v-row>
                <v-card
                  v-for="(card, index) in cards"
                  :key="index"
                  :ref="`card_${index}`"
                  @mouseenter="hoverCard(index)"
                  @mouseleave="hoverCard(-1)"
                  class="card"
                >
                  <a
                    style="text-decoration: none"
                    @click="
                      Open_new_item_newsletters(
                        $i18nRoute({
                          id: card.id,
                        })
                      )
                    "
                  >
                    <v-col cols="12" xs="12" sm="12" md="12">
                      <v-img
                        class="card-image"
                        :class="{ selected: isSelected(index) }"
                        :src="card.image"
                      />
                      <v-card-text>
                        <div class="card-footer">
                          <h4 class="primary--text">
                            <v-icon
                              class="primary--text pa-1"
                              aria-hidden="true"
                            >
                              mdi-calendar-range </v-icon
                            >{{ card.date }}
                          </h4>

                          <h3 class="card-title black--text" v-if="$route.params.locale == 'en'" >
                            {{ card.title }}
                          </h3>
                            <h3 class="card-title black--text" v-else >
                            {{ card.title_la }}
                          </h3>
                        </div>
                      </v-card-text>
                    </v-col>
                  </a>
                </v-card>
              </v-row>
            </v-card>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Newsletters",
  data() {
    return {
      cards: [
        {
          id: "1",
          title: "LAD Inaugural Assembly held on 13 November 2020",

          title_la: " ກອງປະຊຸມ ສ້າງຕັ້ງສະມາຄົມເຂື່ອນລາວ 13/11/2022",

          date: "09/11/2021",
          image: require("../../assets/images/Newsletters/Screenshot.png"),
        },
      ],

      selectedCard: -1,
    };
  },
  computed: {},
  methods: {
    hoverCard(selectedIndex) {
      this.selectedCard = selectedIndex;
    },

    calculateCardDirection(cardIndex, selectedIndex) {
      if (selectedIndex === -1) {
        return 0;
      }

      const diff = cardIndex - selectedIndex;
      return diff === 0 ? 0 : diff / Math.abs(diff);
    },
    isSelected(cardIndex) {
      return this.selectedCard === cardIndex;
    },

    Open_new_item_newsletters(id) {
      // console.log(id.params.locale + "/Newsletters_item/" + id.id);
      this.$router.go(
        window.scrollTo(0, 0),
        this.$router.push("/" + id.params.locale + "/Newsletters_item/" + id.id)
      );
    },
  },
};
</script>

<style>
.card-row {
  display: flex;

  align-items: center;
  min-width: 780px;
  width: 100%;
  height: 500px;
}

.card {
  position: relative;
  background-color: #ffffff;
  height: 370px;
  width: 340px;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  transition: height 0.3s, box-shadow 0.3s;
}

.card:hover {
  height: 410px;
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
}

.card-image {
  /* center horizontally overflown image */
  position: absolute;
  left: -9999px;
  right: -9999px;
  margin: auto;

  height: 220px;
  min-width: 100%;
  transition: height 1s, opacity 1s;
}
.card-image.selected {
  height: 410px;
  opacity: 0.3;
}
.card-footer {
  position: absolute;
  bottom: 0;

  padding: 10px 15px;
  font-family: Helvetica;
}
</style>
