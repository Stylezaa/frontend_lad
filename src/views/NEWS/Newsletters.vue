<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-card flat>
          <v-card-title style="font-size: 0.8em"
            >Home > News > Newsletters</v-card-title
          >
          <v-card-title class="mt-n7"><h3>NEWSLETTERS</h3></v-card-title>
          <v-divider class="mx-4"></v-divider>

          <v-layout row wrap>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-card flat>
                <v-row>
                  <v-col cols="12" xs="12" sm="4" md="4" xl="3">
                    <v-text-field
                      single-line
                      outlined
                      placeholder="Search"
                      :append-icon="'mdi-magnify'"
                      style="width: 100%"
                    >
                    </v-text-field>
                    <v-card-title
                      style="font-size: 1.2em"
                      class="textgray--text mt-n8"
                    >
                      <h4>Latest News</h4></v-card-title
                    >
                    <v-card outlined>
                      <v-flex
                        v-for="(item, index) in items.slice(0, 5)"
                        :key="index"
                        :src="item.src"
                      >
                        <v-hover>
                          <v-card
                            flat
                            slot-scope="{ hover }"
                            class="max-w-sm rounded shadow-lg card"
                          >
                            <v-col cols="12" xs="12" sm="12" md="12">
                              <v-row>
                                <v-img
                                  aspect-ratio="1"
                                  class="grey lighten-2 magin10"
                                  :src="item.src"
                                  style="width: 30%"
                                >
                                </v-img>
                                <v-card-text style="width: 60%">
                                  <h4 style="font-size: 0.9em">
                                    {{ item.title }}
                                  </h4>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 0.8em"
                                  >
                                    {{ item.date }}
                                  </h4>
                                </v-card-text>

                                <v-fade-transition>
                                  <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#190033"
                                    z-index="0"
                                  >
                                  </v-overlay>
                                </v-fade-transition>
                              </v-row>
                            </v-col>
                          </v-card>
                        </v-hover>
                        <v-divider></v-divider>
                      </v-flex>
                      <v-card flat class="mx-auto">
                        <div class="text-center">
                          <v-btn
                            text
                            style="font-size: 0.8em"
                            class="textgray--text"
                          >
                            <div>See more ></div>
                          </v-btn>
                        </div>
                      </v-card>
                    </v-card>
                  </v-col>
                  <v-col cols="12" xs="12" sm="8" md="8" xl="9">
                    <v-card flat v-for="(item, index) in press" :key="index">
                      <v-row>
                        <v-card flat>
                          <div>
                            <v-card-title
                              style="font-size: 1.2em"
                              class="black--text"
                            >
                              <h4>
                                {{ item.header }}
                              </h4></v-card-title
                            >
                            <v-row>
                              <v-col cols="4" xs="4" sm="4" md="3" xl="2">
                                <v-card-title>
                                  <v-icon size="18"> mdi-timer-outline</v-icon>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 0.5em"
                                  >
                                    {{ item.date }}
                                  </h4>
                                </v-card-title>
                              </v-col>
                              <v-col cols="4" xs="4" sm="4" md="3" xl="2">
                                <v-card-title>
                                  <v-icon size="18">
                                    mdi-account-outline
                                  </v-icon>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 0.5em"
                                  >
                                    {{ item.user }}
                                  </h4>
                                </v-card-title>
                              </v-col>
                              <v-col cols="4" xs="4" sm="4" md="3" xl="2">
                                <v-card-title>
                                  <v-icon size="18">
                                    mdi-file-settings-outline
                                  </v-icon>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 0.5em"
                                  >
                                    {{ item.file }}
                                  </h4>
                                </v-card-title>
                              </v-col>
                              <v-col cols="4" xs="4" sm="4" md="3" xl="3">
                                <v-card-title>
                                  <v-icon size="18">
                                    mdi-comment-text-multiple-outline
                                  </v-icon>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 0.5em"
                                  >
                                    {{ item.comment }}
                                  </h4>
                                </v-card-title>
                              </v-col>
                            </v-row>
                          </div>

                          <v-img
                            :src="item.src"
                            max-width="900"
                            max-height="500"
                          >
                            <template v-slot:placeholder>
                              <v-row class="fill-height ma-0" align="center">
                                <v-progress-circular
                                  indeterminate
                                  color="grey lighten-5"
                                ></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                        </v-card>
                      </v-row>

                      <div>
                        <v-card-title style="font-size: 0.8em">
                          {{ item.start }}</v-card-title
                        >
                        <v-card-title style="font-size: 0.8em">
                          {{ item.text }}</v-card-title
                        >
                        <v-card-title style="font-size: 0.8em">
                          {{ item.title }}</v-card-title
                        >
                        <v-card-title style="font-size: 0.8em">
                          {{ item.title1 }}</v-card-title
                        >
                        <v-card-title class="mt-n3" style="font-size: 0.8em">
                          {{ item.title2 }}</v-card-title
                        >

                        <v-card-title class="mt-n3" style="font-size: 0.8em">
                          {{ item.title3 }}</v-card-title
                        >
                        <v-card-title class="mt-n3" style="font-size: 0.8em">
                          {{ item.text1 }}</v-card-title
                        >
                        <v-card-title class="mt-n3" style="font-size: 0.8em">
                          {{ item.title4 }}</v-card-title
                        >
                      </div>
                      <v-card-title
                        style="font-size: 1.2em"
                        class="black--text"
                      >
                        <h4>SHARE THIS</h4></v-card-title
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

                      <v-card-title
                        style="font-size: 1.2em"
                        class="black--text"
                      >
                        <h4>RELATED POSTS</h4></v-card-title
                      >
                      <v-divider class="mx-4"></v-divider>

                      <v-layout row wrap>
                        <v-flex
                          xs6
                          md4
                          sm4
                          lg4
                          xl3
                          v-for="(item, index) in items2.slice(0, 3)"
                          :key="index"
                          class="pa-2"
                        >
                          <v-hover>
                            <v-card
                              slot-scope="{ hover }"
                              class="max-w-sm rounded overflow-hidden shadow-lg"
                            >
                              <v-img :src="item.src"> </v-img>
                              <v-card-text>
                                <table style="width: 100%">
                                  <tr>
                                    <td colspan="2">
                                      <h4 class="text-sm-center">
                                        {{ item.title }}
                                      </h4>
                                    </td>
                                    <br />
                                  </tr>

                                  <v-divider></v-divider>

                                  {{
                                    item.title2
                                  }}
                                </table>
                              </v-card-text>

                              <v-fade-transition>
                                <v-overlay
                                  v-if="hover"
                                  absolute
                                  color="#190033"
                                >
                                </v-overlay>
                              </v-fade-transition>
                            </v-card>
                          </v-hover>
                        </v-flex>
                      </v-layout>

                      <v-card-title
                        style="font-size: 1.2em"
                        class="black--text"
                      >
                        <h4>This Post Has 1,000 Comments</h4></v-card-title
                      >
                      <v-divider class="mx-4"></v-divider>
                      <v-card-title
                        style="font-size: 1.2em"
                        class="black--text"
                      >
                        <h4>Leave Reply</h4></v-card-title
                      >
                      <v-card-title style="font-size: 0.9em" class="mt-n3">
                        Your email address will not be published. Required
                        fields are marked.
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
                    </v-card>
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
  name: "Newsletters",
  data() {
    return {
      press: [
        {
          comment: "1,000 Comments",
          file: "General",
          date: "Nov09,2021",
          user: "Taiy Dueo",
          src: require("../../assets/images/Rectangle 19.png"),
          header: "Establishment of The Lao Dam Association",
          start: "Excellencies, Leaders of the Party and the State,",
          text: "-       Dear Fellow Compatriots, Soldiers, Police and all Lao People,",

          title:
            " Today, 8 August 2021, we jointly commemorate and celebrate the 54th anniversary of the founding of the Association of Southeast Asian Nations or ASEAN (8 August 1967 - 8 August 2021) while the world is facing the COVID-19 pandemic as well as natural disasters. Since its inception in 1967, ASEAN has grown into a resilient inter-governmental regional organisation with the aim of maintaining and promoting peace, stability and cooperation for the prosperity of the ASEAN Member States based on the aspiration of the ASEAN Charter that aims to build an ASEAN Community under the ASEAN Motto: “One Vision, One Identity, One Community”.",
          title1:
            "   Currently, ASEAN consists of 10 member states, with a population of more than 670 million people, comprises of different cultures, languages and religions. Notwithstanding these differences, we coexist and cooperate in the spirit of unity in diversity, thereby making ASEAN the successful regional organisation with tangible achievements on many fronts, notably, a region of long-lasting peace and stability, and economic resilience making it the fifth largest economy in the world. These have enabled ASEAN to integrate into the regional and global economy, which has contributed to social development as well as the improvement of the livelihood of the ASEAN peoples. The success of ASEAN has been recognised internationally, particularly ASEAN’s Centrality, its leading role and the ASEAN Way of consensus, which serve as the fundamental principles that ensured its success, as well as guided its external relations.",
          title2:
            "Unfortunately, in 2021, ASEAN as well as other regions across the world continue to face many challenges, particularly the COVID-19 pandemic and other natural disasters, which have severely affected public health, socio-economic development, stability and security. Although the COVID-19 pandemic has disrupted connectivity, ASEAN has remained committed to further strengthen cooperation within ASEAN, and between ASEAN and its Dialogue Partners as well as External Parties, through utilising numerous modalities, including videoconference at all levels. Such cooperation entails the discussion on the prevention of the COVID-19 pandemic, preparedness and response to the impact of the COVID-19 pandemic on the economy and society in the region and the world at large. Importantly, ASEAN agreed to establish the COVID-19 ASEAN Response Fund (CARF) and the ASEAN Regional Reserve of Medical Supplies for Public Health Emergencies (RRMS), as well as to utilise USD 10.5 Million from the ASEAN Response Fund in response to the COVID-19 pandemic, including the procurement of COVID-19 vaccines for the peoples of ASEAN and ASEAN Secretariat staff.",
          title3:
            "  In line with the theme: “We Care, We Prepare, We Prosper” under the ASEAN Chairmanship of Brunei Darussalam in 2021, ASEAN will continue its efforts to build a caring ASEAN Community, strengthen ASEAN’s capability to cope with challenges, and foster ASEAN’s unity towards a sustainable economic development, as well as promote ASEAN’s principles and Centrality in external relations with a view to promoting and maintaining peace, security and stability in the region and the world at large.",
          text1: "-       Excellencies, Fellow Compatriots,",

          title4:
            "The Lao PDR became a member of ASEAN on 23 July 1997. Over the past 24 years, as a member of ASEAN, the Lao PDR has fully participated in the collective processes of ASEAN with a sense of high responsibility with a view to protecting and ensuring our national interests. This development has significantly contributed to socio-economic development and promoted the role of the Lao PDR in the regional and international arena. The Lao PDR has also continued to garner the trust, support, cooperation and assistance from ASEAN Member States as well as ASEAN’s Dialogue Partners and External Parties through both bilateral and multilateral frameworks. I am therefore of the view that these are tangible achievements resulted from the pursuit of the foreign policy of peace, independence, friendship and cooperation, as well as the New Economic Mechanism of our Party and State.",
        },
      ],
      items: [
        {
          src: require("../../assets/images/Laos dam failure.jpg"),
          title: "021 Next Content Fair to be held from",
          date: "Nov 09, 2021",
        },
        {
          src: require("../../assets/images/Laos dam failure.jpg"),
          title: "021 Next Content Fair to be held from ",
          date: "Nov 09, 2021",
        },
        {
          src: require("../../assets/images/Laos dam failure.jpg"),
          title: "021 Next Content Fair to be held from ",
          date: "Nov 09, 2021",
        },
        {
          src: require("../../assets/images/Laos dam failure.jpg"),
          title: "021 Next Content Fair to be held from ",
          date: "Nov 09, 2021",
        },
        {
          src: require("../../assets/images/Laos dam failure.jpg"),
          title: "021 Next Content Fair to be held from ",
          date: "Nov 09, 2021",
        },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      items2: [
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
        {
          src: require("../../assets/images/Rectangle 7.png"),
          title: "ICOLD/Holding ICOLD membership",
          title2: "ICOLD/Holding ICOLD membership.",
        },
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
</style>
