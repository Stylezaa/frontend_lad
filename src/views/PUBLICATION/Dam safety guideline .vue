<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > Publication > Guideline
            </v-card-title>
            <v-card-title class="mt-n7"
              ><h3>{{ $t("main.DAM SAFETY GUIDELINE") }}</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>

            <v-layout row wrap>
              <v-col cols="12" xs="12" sm="12" md="12">
                <v-card flat>
                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="12" xl="12">
                      <v-card outlined>
                        <br />
                        <v-flex
                          v-for="(item, index) in items"
                          :key="index"
                          :src="item.src"
                        >
                          <v-card flat class="max-w-sm rounded shadow-lg">
                            <div>
                              <v-row>
                                <v-col cols="5" xs="3" sm="3" md="3" xl="2">
                                  <v-img
                                    aspect-ratio="1"
                                    class="mx-auto grey lighten-2 magin10"
                                    :src="item.src"
                                  >
                                  </v-img>
                                </v-col>
                                <v-col
                                  cols="7"
                                  xs="9"
                                  sm="9"
                                  md="9"
                                  xl="10"
                                  v-if="$route.params.locale == 'en'"
                                >
                                  <h4 style="font-size: 1em">
                                    {{ item.title }}
                                  </h4>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 1em"
                                  >
                                    {{ item.date }}
                                  </h4>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 1em"
                                  >
                                    {{ item.Type }}
                                  </h4>
                                  <h4>
                                    <v-btn
                                      color="primary"
                                      class="ma-6"
                                      :href="item.pdf"
                                      target="_blank"
                                      >Preview</v-btn
                                    >
                                  </h4>
                                </v-col>
                                <v-col
                                  cols="7"
                                  xs="9"
                                  sm="9"
                                  md="9"
                                  xl="10"
                                  v-else
                                >
                                  <h4 style="font-size: 1em">
                                    {{ item.title_la }}
                                  </h4>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 1em"
                                  >
                                    {{ item.date }}
                                  </h4>
                                  <h4
                                    class="textgray--text"
                                    style="font-size: 1em"
                                  >
                                    {{ item.Type }}
                                  </h4>
                                  <h4>
                                    <v-btn
                                      color="primary"
                                      class="ma-6"
                                      :href="item.pdf"
                                      target="_blank"
                                      >ກົດເບິ່ງ</v-btn
                                    >
                                  </h4>
                                </v-col>
                              </v-row>
                            </div>
                            <v-divider></v-divider>
                          </v-card>
                          <br />
                        </v-flex>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-layout>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import jsPDF from "jspdf";
import axios from "axios";

export default {
  name: "guideline",
  data() {
    return {
      items: [
        {
          title: "LEPTS Laos 2004",
          title_la:
            "ມາດຕະຖານເຕັກນິກໄຟຟ້າຂອງ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ 2004",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1FPfQzvarbCvM1ToozJmtHJKR2z0RqjnS/view?usp=sharing",
        },
        {
          title:
            "Guideline  on Operating and Managing Lao Electric Power Technical  Standards and  Safety Rules  for Operation and Maintenance 2018",
          title_la:
            "ບົດ​ແນະ​ນຳ​ກ່ຽວ​ກັບ​ຜູ້​ບໍ​ລິ​ຫານ ແລະ ການ​ຄຸ້ມ​ຄອງ​ບັນ​ດາ​ມາດ​ຕະ​ຖານ​ດ້ານ​ວິ​ຊາ​ການ​ພະ​ລັງ​ງານ​ໄຟ​ຟ້າ​ລາວ ແລະ ກົດ​ລະ​ບຽບ​ຄວາມ​ປອດ​ໄພ​ໃນ​ການ​ດຳ​ເນີນ​ງານ ແລະ ການ​ບໍາ​ລຸງ​ຮັກ​ສາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1SkTS32RlrW4gcloS99-kIRCO7_sPZEKh/view?usp=sharing",
        },
        {
          title: "LEPTS Laos 2018",
          title_la:
            "ມາດຕະຖານເຕັກນິກໄຟຟ້າຂອງ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1KFMVeNItC9GlJUXYD4P9kmk3U01WSMmP/view?usp=sharing",
        },
        {
          title: "Preface- December 2018 Dam Safety Guideline",
          title_la: "ຄຳນຳຂໍ້ແນະນຳຄວາມປອດໄພເຂື່ອນ-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1xywW4h44ZIBBWTc-994yMLoL_zaWTJSi/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- Documentation-December 2018",
          title_la: "ຂໍ້ແນະນຳຄວາມປອດໄພເຂື່ອນ-ເອກະສານ-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/11OqTS5uj0-S-3OV98iAvCLdRRTBrZR9K/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- EAP-December 2018",
          title_la:
            "ຂໍ້ແນະນຳຄວາມປອດໄພເຂື່ອນ-ແຜນປະຕິບັດງານສຸກເສີນ-ເດືອນ ທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1HSBsAwMyfx3M6FjTij4GidF_KKimP_3_/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- Geological-December 2018",
          title_la: "ຂໍ້ແນະນຳຄວາມປອດໄພເຂື່ອນ-ທໍລະນີສາດ-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1rNkoS1FdOvp4zXL8BQhHIFlolYfHBzdc/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- Instrumentation -December 2018",
          title_la: "ຂໍ້ແນະນຳຄວາມປອດໄພເຂື່ອນ-ເຄື່ອງມື-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/10STvHI2uVpybEr__D-qg2ofuNZVIht5W/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- Quality-December 2018",
          title_la: "ຂໍ້ແນະນຳຄວາມປອດໄພເຂື່ອນ-ຄວບຄຸມຄຸນນະພາບ-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1m8ZCHGjqgi9y6n4VrGHImt7vip43G-tw/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- Reservoir Impoundment-December 2018",
          title_la:
            "ຂໍ້ແນະນຳຄວາມປອດໄພຂອງເຂື່ອນ-ການກັກຂັງອ່າງເກັບນ້ຳ-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1FQAWsEhQ6S9jh1p2-eWIuwZhwpIj71tr/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- Surveillance-December 2018",
          title_la: "ຂໍ້ແນະນຳຄວາມປອດໄພເຂື່ອນ-ການເຝົ້າລະວັງ-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1KRAvLjdoIvjmMq_eGICGjT7PuT3ORDLr/view?usp=sharing",
        },
        {
          title: "Dam Safety Guidelines- Training-December 2018",
          title_la: "ຂໍ້ແນະນຳຄວາມປອດໄພຂອງເຂື່ອນ-ການຝຶກອົບຮົມ-ເດືອນທັນວາ 2018",
          date: "Jun 06, 2017",
          Type: "Guideline",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1v7WeHtJoBIeJ4mP_00PxwlgjqgWuYSbx/view?usp=sharing",
        },
      ],
      datapdf: "",
      datapdf1: "../../assets/pdf/test.pdf",
    };
  },
  components: {},
  methods: {
    createPDF() {
      var doc = new jsPDF("p", "mm", "a4");

      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();

      axios
        .get(
          "https://raw.githubusercontent.com/Stylezaa/Example-Data-LAD-Project/main/pdf.json"
        )
        .then((response) => {
          //temp.push(response.data)

          this.datapdf = response.data.pic;
          var imgData = this.datapdf;
          // const encoded = window.btoa(this.datapdf);

          doc.addImage(imgData, "JPEG", 0, 0, width, height);
          doc.save("testPdf.pdf");
          // const encoded = window.btoa("Alireza Dezfoolian");
          // const decoded = window.atob(this.datapdf);
          // console.log(encoded);
          // console.log(decoded);
          // var decodedString = atob(this.datapdf);
          //           console.log(decodedString);
          // let pdfName = "test";
          // var doc = new jsPDF();
          // doc.text(decoded, 10, 10);
          // doc.save(pdfName + ".pdf");

          //if want add one page

          //doc.addPage()

          // this.data.pkey = response.data.pkey;
        });
    },

    mounted() {},
  },
};
</script>

<style>
.bb {
  margin-top: 20px;
}
.magin10 {
  padding: 20px;
}
</style>
