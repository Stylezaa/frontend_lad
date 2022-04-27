<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-text style="font-size: 0.8em"
              >Home > News > Events</v-card-text
            >
            <v-card-title class="mt-n7"
              ><h3>{{ $t("main.EVENTS") }}</h3></v-card-title
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
                      Open_new_item_Events(
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

                          <h3 class="card-title black--text">
                            {{ card.title }}
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
  name: "Events",
  data() {
    return {
      cards: [
        {
          id: "1",
          title: "ຫົວຂໍ້: “ຜົນການກວດກາສຸກເສີນຄວາມປອດໄພຂອງເຂື່ອນຢູ່ ສປປ. ລາວ”",
          date: "27/04/2022",
          image: require("../../assets/images/Newsletters/LAD Technic Seminar on Dams 01-01.png"),
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

    Open_new_item_Events(id) {
      // console.log(id.params.locale + "/Newsletters_item/" + id.id);
      this.$router.go(
        window.scrollTo(0, 0),
        this.$router.push("/" + id.params.locale + "/Events_item/" + id.id)
      );
    },
  },
};
</script>

<style>
.bb {
  margin-top: 20px;
}
.magin10 {
  margin: 10px;
}
</style>
