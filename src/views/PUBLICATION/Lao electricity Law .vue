<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col>
        <v-card flat>
          <v-card-title style="font-size: 0.8em"
            >Home > Publication > Law and Regulation </v-card-title
          >
          <v-card-title class="mt-n7"
            ><h3>Law and Regulation </h3></v-card-title
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
                              <v-col cols="5" xs="5" sm="3" md="2">
                                <v-img
                                  aspect-ratio="1"
                                  class="grey lighten-2 magin10"
                                  :src="item.src"
                                >
                                </v-img>
                              </v-col>
                              <v-col cols="7" xs="7" sm="9" md="10">
                                <h4 style="font-size: 1.2em">
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
    </v-row>
  </v-container>
</template>
<script>
import jsPDF from "jspdf";
import axios from "axios";

export default {
  name: "Lao electricity Law ",
  data() {
    return {
      items: [
          {
          title: "Law on Electricity",
          date: "May 09, 2017",
          Type: "Law and Regulation",
          src: require("../../assets/images/pdf/1.png"),
          pdf: "https://drive.google.com/file/d/1Mjzh2C20umf8XrmBMELibkb8Bp6AbWZJ/view?usp=sharing",
        },
        {
          title: "ຂໍ້ຕົກລົງລະບຽບການນຳໃຊ້ ມລຟ 2018 ",
          date: "March 19, 2020",
          Type: "Law and Regulation",
          src: require("../../assets/images/pdf/2.png"),
           pdf: "https://drive.google.com/file/d/1WmHRhgnAfea3_Zx58ivvWhDgD3r_GFj5/view?usp=sharing",
        },
        {
          title: "ໃບຮອງຮັບເອົາກົດໝາຍ ມຟລ 2018 ",
          date: "Jun 06, 2017",
          Type: "Law and Regulation",
          src: require("../../assets/images/pdf/3.png"),
           pdf: "https://drive.google.com/file/d/1QGsA6unWz87Y_MI_z35QbCaGZ5JoRUtL/view?usp=sharing",
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
