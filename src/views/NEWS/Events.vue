<template>
  <v-container grid-list-md class="lighten-6">
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="8" xl="8">
        <v-col cols="12" xs="12" sm="12" md="12">
          <v-card flat>
            <v-card-title style="font-size: 0.8em"
              >Home > News > Events</v-card-title
            >
            <v-card-title class="mt-n7"
              ><h3>{{ $t("main.EVENTS") }}</h3></v-card-title
            >
            <v-divider class="mx-4"></v-divider>

            <v-layout row wrap>
              <v-col cols="12" xs="12" sm="12" md="12">
                <v-card flat>
                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="12" xl="12">
                      <v-card flat v-for="(item, index) in press" :key="index">
                        <v-row>
                          <div>
                            <v-card-title
                              style="font-size: 1.4em"
                              class="black--text"
                            >
                              <h4>
                                {{ item.header }}
                              </h4></v-card-title
                            >
                          </div>
                          <v-card flat class="mx-auto">
                            <v-img :src="item.src">
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
                          <v-card-title
                            style="font-size: 1.2em"
                            class="black--text"
                          >
                            <h4>
                              <ul style="list-style-type: disc">
                                <li>ວັນທີ 27 ເມສາ 2022</li>
                                <li>ເວລາ 09:00 AM - 12:00 AM</li>
                                <li>ສະຖານທີ່: ໂຮງແຮມ Lao Plaza</li>
                              </ul>
                            </h4>
                            <h3 class="py-6">
                              ວາລະການດຳເນີນກອງປະຊຸມ
                            </h3></v-card-title
                          >

                          <ul style="list-style-type: disc">
                            <li>
                              Facilitator: ທ່ານ ປອ. ຄຳຮູ້ ຊາພູວົງ, ກຳມະການ
                              ຄະນະບໍລິຫານ ສະມາຄົມເຂື່ອນລາວ .
                            </li>
                            <li>
                              Presenter: ທ່ານ ວໍຣະເດດ ພອນແກ້ວ, ກຳມະການ
                              ຄະນະບໍລິຫານ ສະມາຄົມເຂື່ອນລາວ ແລະ
                              ຫົວໜ້າກຳມະການເຕັກນິກ .
                            </li>
                            <li>Panelists</li>
                            <li>
                              ໂຄສົກເປີດກອງປະຊຸມ: ທ່ານ ສີຈາດ ບຸດຊາກິດຕິຣາດ,
                              ຜູ້ອຳນວຍການ ສຂລ.
                            </li>
                          </ul>

                          <v-card-title
                            style="font-size: 1.2em"
                            class="primary--text"
                          >
                            <h3 class="py-6">
                              ປະຫວັດຫຍໍ້ບັນດາຜູ້ເຂົ້າຮ່ວມກອງປະຊຸມ
                            </h3>
                            <h4>1. ທ່ານ ວໍຣະເດດ ພອນແກ້ວ</h4></v-card-title
                          >
                          <v-card-text
                            style="font-size: 1em"
                            class="black--text"
                          >
                            <p>
                              ຈົບການສຶກສາ ປະລິນຍາໂທ (Msc)
                              ໃນສາຂາວິສະວະກໍາເຂື່ອນໄຟຟ້າພະລັງນໍ້າ,
                              ເຄີຍເຮັດວຽກຢູ່ກອງເລຂາຄະນະກໍາມາທິການແມ່ນໍ້າຂອງສາກົນ
                              ແຕ່ປີ 2008 ຫາ 2018 ເປັນຫົວໜ້າທີມ
                              ໂຄງການເຂື່ອນໄຟຟ້າແບບຍືນຍົງ
                              ເພື່ອສົ່ງເສີມການພັດທະນາເຂື່ອນໄຟຟ້າແບບຍືນຍົງ ແລະ
                              ປອດໄພໃນເຂດລຸ່ມແມ່ນໍ້າຂອງ. ຈາກນັ້ນ ແຕ່ປີ 2019 ຫາ
                              2020 ລາວໄດ້ມີສ່ວນຮ່ວມໃນການກວດກາສຸກເສີນ
                              ຄວາມປອດໄພຂອງເຂື່ອນໄຟຟ້າຂະຫນາດໃຫຍ່ ໃນທົ່ວປະເທດ ສປປ.
                              ລາວ (NEDSI-1) ໂດຍເປັນຫົວຫນ້າກອງເລຂາ NEDSI-1 ແລະ
                              ຕໍ່ມາ ແຕ່ປີ 2021 ເປັນຕົ້ນມາ ໃນ NEDSI-2 ກ່ຽວກັບ
                              ການກວດກາ ແລະ ຕິດຕາມການຈັດຕັ້ງປະຕິບັດຄໍາແນະນໍາຂອງ
                              ຊ່ຽວຊານ ສໍາລັບເຂື່ອນໄຟຟ້າຂະໜາດໃຫຍ່ 15
                              ເຂື່ອນບູລິມະສິດ. ໃນພ້ອມດຽວກັນ ສປປ.
                              ລາວຍັງໄດ້ເຮັດວຽກຮ່ວມກັບ ບໍລິສັດ Damwatch
                              (ປະເທດນີວເຊແລນ) ກ່ຽວກັບ ການກວດກາ ແລະ
                              ຕິດຕາມການຈັດຕັ້ງປະຕິບັດຄໍາແນະນໍາ ຂອງຊ່ຽວຊານ
                              Damwatch ສໍາລັບການປັບປຸງ 15
                              ເຂື່ອນບູລິມະສິດຂະຫນາດນ້ອຍ (ຕັ້ງແຕ່ປີ 2021
                              ເປັນຕົ້ນມາ).
                            </p></v-card-text
                          >

                          <v-card-title
                            style="font-size: 1.2em"
                            class="primary--text"
                          >
                            <h4>2. ທ່ານ ປອ. ຄຳຮູ້ ຊາພູວົງ</h4></v-card-title
                          >
                          <v-card-text
                            style="font-size: 1em"
                            class="black--text"
                          >
                            <p>
                              ຈົບການສຶກສາປະລິນຍາຕີ ສາຂາວິສະວະກຳໂຍທາ
                              ຈາກມະຫາວິທະຍາໄລແຫ່ງຊາດ ໃນປີ 2000, ປະລິຍາໂທ
                              ສາຂາວິສະວະກໍາໂຍທາ ຈາກມະຫາວິທະຍາໄລ Ritsumeikan,
                              ເມືອງກຽວໂຕ (ປະເທດຍີ່ປຸ່ນ) ໃນປີ 2006 ແລະ ປະລິນຍາເອກ
                              ສາຂາວິສະວະກໍາການພັດທະນາສາກົນດ້ານໂຍທາ ຈາກ Tokyo
                              Institute of Technology (ປະເທດຢີ່ປຸ່ນ) ໃນປີ 2011.
                              ປະຈຸບັນ ເປັນ ອາຈານສອນ ແລະ ຮອງຫົວຫນ້າພາກວິຊາ
                              ວິສະວະກຳໂຍທາ ຄະນະວິສະວະກຳສາດ ມະຫາວິທະຍາໄລແຫ່ງຊາດ.
                              ເປັນວິສະວະກອນລົງທະບຽນຂອງ ASEAN Chartered
                              Professional Engineer, ເປັນສະມາຊິກຂອງ
                              ສະມາຄົມສະຖາປະນິກ ແລະ ວິສະວະກອນກໍ່ສ້າງລາວ,
                              ເປັນອະນຸກໍາມະການຮ່າງມາດຕະຖານວັດສະດຸກໍ່ສ້າງລາວ,
                              ຄະນະກໍາມະການຄົ້ນຄວ້າ ລະບຽບຄວບຄຸມອາຄານຂອງລາວ,
                              ສະມະຊິກ ແລະ ຄະນະກໍາມະການຝ່າຍວາງແຜນ
                              ຂອງສະມາຄົມເຂື່ອນລາວ. ມີປະສົບການ ແລະ ຜົນງານທັງພາຍໃນ
                              ແລະ ສາກົນ ຫຼາຍກວ່າ 10 ປີ
                              ໃນວຽກງານການຄົ້ນຄ້ວາວິໄຈໃນຫລາຍຫົວບົດ ແລະ
                              ໄດ້ຕີພິມຜົນງານການຄົ້ນຄວ້າ ໃນວາລະສານວິທະຍາສາດ
                              ທັງພາຍໃນ ແລະ ຕ່າງປະເທດ.
                              ໄດ້ຮັບລາງວັນຜົນງານການຄົ້ນຄວ້າດີເດັ່ນ
                              ຈາກສະມາຄົມວິສະວະກອນໂຍທາ ແຫ່ງປະເທດຍີ່ປຸ່ນ (JSCE)
                              ໃນປີ 2010 ໃນຫົວຂໍ້ການຄົ້ນຄວ້າ “Influence of Mixing
                              –C2S on the Cl- Diffusion in Concrete Using
                              Autoclave Curing”. ນອກຈາກນັ້ນ
                              ຍັງເປັນທີ່ປຶກສາໄຫ້ບໍລິສັດ Archineer Associates ແລະ
                              ອື່ນໆ, ເປັນທີ່ປຶກສາຫລາຍໂຄງການ
                              ກ່ຽວກັບດ້ານພະລັງງານລວມທັງເຂື່ອນໄຟຟ້າພະລັງງານນ້ຳ,
                              ໂຄງລ່າງພື້ນຖານ, ເຄຫາສະຖານ ແລະ ພັດທະນາຕົວເມືອງ ແລະ
                              ອື່ນໆ.
                            </p></v-card-text
                          >

                          <v-card-title
                            style="font-size: 1.2em"
                            class="primary--text"
                          >
                            <h4>
                              3. ທ່ານ ຮສ. ປອ. ຄຳປະເສີດ ເທບວົງສາ
                            </h4></v-card-title
                          >
                          <v-card-text
                            style="font-size: 1em"
                            class="black--text"
                          >
                            <p>
                              ຈົບການສຶກສາປະລິນຍາຕີ ວິສະວະກຳໂຍທາ
                              ມະຫາວິທະຍາໄລແຫ່ງຊາດ (ກຽດນິຍົມ) ປີ 1997 ແລະ
                              ປະລີນຍາເອກ ວິສະວະກຳໂຄງສ້າງ ແລະ ໂຍທາ ມະຫາວິທະຍາໄລ
                              Kyushu (ປະເທດຢີ່ປຸ່ນ) ປີ 2005. ປະຈຸບັນ ແມ່ນ
                              ຮອງສາດສະດາຈານ ແລະ ຫົວຫນ້າພາກວິຊາ ວິສະວະກຳໂຍທາ ຄະນະ
                              ວິສະວະກຳສາດ ມະຫາວິທະຍາໄລແຫ່ງຊາດ,
                              ຄະນະກຳມະການສົ່ງເສີມການຄົ້ນຄວ້າວິໄຈ
                              ມະຫາວິທະຍາໄລແຫ່ງຊາດ, ເປັນວິສະວະກອນ ASEAN Chartered
                              Professional Engineer ແລະ ຄະນະກຳມະການ ອາວຸດໂສ
                              Fellow ຂອງ ASEAN Academy of Engineering &
                              Technology, ຮອງປະທານ ສະມາຄົມເຂື່ອນລາວ,
                              ຄະນະບໍລິຫານສະມາຄົມສະຖາປະນິກ ແລະ
                              ວິສະວະກອນກໍ່ສ້າງລາວ ແລະ ນອກຈາກນັ້ນ
                              ກໍ່ເປັນທີ່ປຶກສາໄຫ້ບໍລິສັດArchineer Associates ແລະ
                              ອື່ນໆ. ມີປະສົບການ ແລະ ຜົນງານທັງພາຍໃນ ແລະ ສາກົນ
                              20ປີ ໃນວຽກງານການຄົ້ນຄວ້າວິໄຈຫຼາຍຫົວບົດ ແລະ
                              ທີ່ປຶກສາຫລາຍໂຄງການ
                              ກ່ຽວກັບດ້ານພະລັງງານລວມທັງເຂື່ອນໄຟຟ້າພະລັງງານນ້ຳ,
                              ໂຄງລ່າງພື້ນຖານ, ເຄຫາສະຖານ ແລະ ພັດທະນາຕົວເມືອງ ແລະ
                              ອື່ນໆ, ໄດ້ຮັບລາງວັນ “MCCC-GOLDEN GREEN AWARD 2011”
                              ຈາກ ASEAN Academy of Engineering & Technology ແລະ
                              Malaysia-China Chamber of Commerce.
                            </p></v-card-text
                          >
                          <v-card-title
                            style="font-size: 1.2em"
                            class="primary--text"
                          >
                            <h4>4. ທ່ານ ບົວເທບ ມາໄລຄຳ</h4></v-card-title
                          >
                          <v-card-text
                            style="font-size: 1em"
                            class="black--text"
                          >
                            <p>
                              ເລີ່ມແຕ່ 2/2022 - ປະຈຸບັນ :
                              ວ່າການຫົວໜ້າກົມຄຸ້ມຄອງຄວາມປອດໄພອຸດສາຫະກໍາພະລັງງານກະຊວງພະລັງງານ
                              ແລະ ບໍ່ແຮ່, 1/2020-2/2022
                              ຫົວໜ້າກົມຄຸ້ມຄອງພະລັງງານ. ກະຊວງພະລັງງານ ແລະ
                              ບໍ່ແຮ່. 2/2012 -1/2020
                              ຮອງຫົວໜ້າກົມຄຸ້ມຄອງພະລັງງານ, ກະຊວງພະລັງງານ ແລະ
                              ບໍ່ແຮ່. 2007-2/2012
                              ຫົວໜ້າພະແນກຄຸ້ມຄອງກິດຈະການພະລັງງານ, ກະຊວງພະລັງງານ
                              ແລະ ບໍ່ແຮ່. 2000-2007 ຫົວໜ້າພະແນກໄຟຟ້າຊົນນະບົດ,
                              ກົມໄຟຟ້າ ກະຊວງອຸດສາຫະກໍາ ແລະ ຫັດຖະກໍາ. 1993-2000
                              ວິຊາການ ກົມໄຟຟ້າ ກະຊວງອຸດສາຫະກໍາ ແລະ ຫັດຖະກໍາ. ປີ
                              1992 ຮຽນຈົບການສຶກສາລະດັບປະລິນຍາໂທວິສະວະກຳໄຟຟ້າ ,
                              ເມືອງ ດູຊານແບ , ອະດີດສະຫະພາບໂຊຫວຽດ. ແຕ່ປີ 2007
                              ເຖິງປະຈຸບັນ
                              ມີປະສົບການກ່ຽວກັບມາດຕະຖານເຕັກນິກໄຟຟ້າຂອງລາວ,
                              ຄວາມປອດໄພຂອງເຂື່ອນ ແລະ ມີປະສົບການຕົວຈິງພາກສະຫນາມ.
                              ແຕ່ປີ 2000-2007
                              ມີປະສົບການກ່ຽວກັບເຂື່ອນໄຟຟ້ານໍ້າຕົກຂະໜາດນ້ອຍ,
                              ລະບົບໄຟຟ້າປະສົມປະສານ, ພະລັງງານໄຟຟ້າແສງຕາເວັນ ແລະ
                              ວຽກງານປະຢັດພະລັງງານນຳໃຊ້ພະລັງງານຢ່າງມີປະສິດທິຜົນ.
                              1993-2000 ເປັນວິຊາການ.
                            </p></v-card-text
                          >
                          <v-card-title
                            style="font-size: 1.2em"
                            class="primary--text"
                          >
                            <h4>5. ທ່ານ ປອ. ຈັນສະແຫວງ ບຸນຍົງ</h4></v-card-title
                          >
                          <v-card-text
                            style="font-size: 1em"
                            class="black--text"
                          >
                            <p>
                              ຈົບວິຊາສະເພາະລະດັບປະລິນຍາໂທ ສາຂາວິຊາວິສະວະກຳໄຟຟ້າ
                              ຈາກມະຫາວິທະຍາໄລແຫ່ງຊາດ ລັດອາຣມຽນນີ
                              ອາດິດສະຫະພາບໂຊວຽດ ປີ 1993 ແລະ ປະລິນຍາເອກ
                              ສາຂາວິຊາວິທະຍາສາດການບໍລິຫານ ແລະ
                              ວິສະວະກຳ(ລົງເລິກໄຟຟ້ານໍ້າຕົກ)
                              ຈາກມະຫາວິທະຍາໄລແຫ່ງຊາດລາວ ຮ່ວມກັບ
                              ມະຫາວິທະຍາໄລເຕັກໂນໂລຊີ ມົນທົນຢູນານ ສປ. ຈີນ ປີ 2015
                              ແລະ ຈົບການຄົ້ນຄວ້າ ຫຼັງປະລິນຍາເອກ (Post Doctor)
                              ແລະ ໄດ້ຮັບຕຳແຫນ່ງ ສາດສະດາຈານຮັບເຊີນ (Visiting
                              Professor) ມະຫາວິທະຍາໄລ ໂຮໄຮ ສປ. ຈີນ ໃນປີ 2019.
                              ທ່ານ ມີປະສົບການ ແລະ ຜົນງານການເຮັດວຽກກ່ຽວກັບ
                              ວິສະວະກຳພະລັງງານ ແລະ ເຂື່ອນໄຟຟ້າ 30 ກວ່າປີ,
                              ຮັບຜິດຊອບຫລາຍໂຄງການ ໂດຍນັບຕັ້ງແຕ່ເປັນວິຊາການ
                              ສັງກັດຢູ່ກົມໄຟຟ້າ ໃນປີ 1994, ເປັນຮອງຫົວໜ້າພະແນກ
                              ແລະ ຫົວຫນ້າພະແນກ ຢູ່ ກົມໄຟຟ້າ ແຕ່ປີ 2001 ແລະ ໃນປີ
                              2005. ຫລັງຈາກນັ້ນ ທ່ານໄດ້ເຮັດຫນ້າທີ່
                              ເປັນຮອງຫົວໜ້າກົມ, ຮັກສາການຫົວໜ້າກົມ,
                              ວ່າການຫົວໜ້າກົມ ນະໂຍບາຍ ແລະ ແຜນພະລັງງານ,
                              ກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ່ ໃນປີ 2012, 2015, ປີ 2016
                              ຕາມລຳດັບ. ນັບແຕ່ປີ 2019 ເຖິງປັດຈຸບັນ
                              ທ່ານໄດ້ຮັບຫນ້າທີ່ ເປັນຫົວໜ້າກົມນະໂຍບາຍ ແລະ
                              ແຜນພະລັງງານ, ກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ.
                            </p></v-card-text
                          >
                          <v-card-title
                            style="font-size: 1.2em"
                            class="primary--text"
                          >
                            <h4>6. ທ່ານ ປອ. ດຸສິດ ພົມມະຈັນ</h4></v-card-title
                          >
                          <v-card-text
                            style="font-size: 1em"
                            class="black--text"
                          >
                            <p>
                              ເປັນຜູ້ອຳນວຍການເຂື່ອນໄຟຟ້າທີ່ປະສົບຄວາມສຳເລັດ ແລະ
                              ຫນ້າເຊື່ອຖືສູງ, ທ່ານຈົບການສຶກສາ ປະລິນຍາຕີ
                              ວິສະວະກຳກົນຈັກ ມະຫາວິທະຍາໄລ ສັບພະວິຊາ 2ທັນວາ
                              (ປະຈຸບັນແມ່ນ ຄະນະວິສະວະກຳສາດ ມະຫາວິທະຍາໄລແຫ່ງຊາດ)
                              ໃນປີ 1994, ຈົບປະລິນຍາໂທວິສະວະກຳ Energy Technology,
                              Asian Institute of Technology (AIT), Bangkok,
                              Thailand ໃນປີ 2001 ແລະ ຈົບລະດັບປະລິນຍາເອກວິສະວະກຳ
                              Systems Integration, Fluid Dynamics, Yokohama
                              National University, Yokohama, Japan ໃນປີ 2006.
                              ທ່ານມີປະສົບການດ້ານໄຟຟ້າພະລັງງານນ້ຳ ຫຼາຍກວ່າ 20 ປີ,
                              ເຊິ່ງລວມເຖິງປະສົບການ ແລະ
                              ຜົນສຳເລັດລະດັບມືອາຊີບມາຫຼາຍກວ່າ 10 ປີ
                              ໃນດ້ານການຄຸ້ມຄອງການດຳເນີນງານ ແລະ
                              ການບໍາລຸງຮັກສາເຂື່ອນໄຟຟ້ານ້ຳເທີນ 2.
                              ທ່ານໄດ້ເຂົ້າມາຮ່ວມເຮັດວຽກກັບໂຄງການເຂື່ອນໄຟຟ້າ
                              ນ້ຳເທີນ 2
                              ເຊິ່ງເປັນເຂື່ອນໄຟຟ້ານ້ຳຕົກທີ່ໃຫຍ່ທີສຸດແຫ່ງໜຶ່ງໃນ
                              ສປປ.​ ລາວ ໃນການຄຸ້ມຄອງ ແລະ
                              ຈັດຕັ້ງປະຕິບັດສັນຍາຊື້-ຂາຍໄຟຟ້າ ແລະ
                              ຄວາມປອດໄພຈາກນ້ຳ (Hydro-Safety),
                              ເຊິ່ງລວມທັງການສະໜັບສະໜູນການຄຸ້ມຄອງການດຳເນີນງານ ແລະ
                              ການບຳລຸງຮັກສາ. ປັດຈຸບັນ
                              ທ່ານເປັນຜູ້ອຳນວຍການເຂື່ອນໄຟຟ້າ ແລະ
                              ຮອງປະທານບໍລິຫານຝ່າຍປະຕິບັດການ, ເຂື່ອນໄຟຟ້າ ນ້ຳເທີນ
                              2. ເຂື່ອນໄຟຟ້ານ້ຳເທີນ 2 (NT2)
                              ເປັນເຂື່ອນໄຟຟນ້ຳຕົກທີມີຄວາມໜ້າເຊື່ອຖືສູງ ແລະ
                              ມີຄວາມພ້ອມໃນການຜະລິດພະລັງງານ ສາມາດສ້າງລາຍຮັບໃຫ້ແກ່
                              ສປປ. ລາວ ເປັນຈຳນວນຫຼວງຫຼາຍ,
                              ໂດຍຖືເອົາຄວາມປອດໄພເປັນບູລິມະສິດສູງສຸດ. ທ່ານ ປອ.
                              ດຸສິດ ໄດ້ລະບຸບົດຮຽນດ້ານເຕັກນິກ ແລະ
                              ບຸກຄະລາກອນທີ່ມີຄຸນຄ່າທີ່ສຸດ
                              ສາມາດຮຽນຮູ້ໄດ້ຈາກທ່ານໄດ້ຕະຫຼອດເວລາທີ່ເຮັດວຽກຢູ່ກັບເຂື່ອນໄຟຟ້າ
                              ນ້ຳເທີນ 2. ປະສົບການຂອງທ່ານໄດ້ສອນທ່ານວ່າ
                              ເຮົາຄວນໃຫ້ຄວາມສຳຄັນກັບຄວາມປອດໄພເປັນບູລິມະສິດທຳອິດສະເໝີ
                              ແລະ ບໍ່ເຄີຍຢຸດຮຽນຮູ້
                              ບໍ່ວ່າຈະເປັນຈາກຄວາມທ້າທາຍດ້ານເຕັກນິກຂັ້ນສູງ ຫຼື
                              ການຈັດການທີ່ມຸ້ງໝັ້ນ.
                            </p></v-card-text
                          >
                          <v-card-title
                            style="font-size: 1.2em"
                            class="primary--text"
                          >
                            <h4>7. ທ່ານ ວົງສະກຸນ ຍິ່ງຍົງ</h4></v-card-title
                          >
                          <v-card-text
                            style="font-size: 1em"
                            class="black--text"
                          >
                            <p>
                              ຈົບການສຶກສາລະດັບປະລິນຍາໂທວິສະວະກຳ ກົງຫັນພະລັງນ້ຳ
                              ແລະ ລະບົບບັງຄັບ (ເຂື່ອນໄຟຟ້າ)
                              ມະຫາວິທະຍາໄລຜະລິດເຄື່ອງຈັກ ເມືອງ Lougansk
                              ອະດີດສະຫະພາບໂຊຫວຽດ. ໃນປີ 1993
                              ທ່ານໄດ້ເຂົ້າເຮັດວຽກຢູ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ,
                              ປະຈຳການ ແລະ ເປັນຫົວໜ້າພະແນກກົນຈັກ, ພະແນກກໍ່ສ້າງ
                              ແລະ ຫົວໜ້າພະແນກຈັດຕັ້ງ-ບໍລິຫານ ເຂື່ອນເຊລະບໍາ ແລະ
                              ປີ 1999 ໄດ້ເປັນຫົວໜ້າເຂື່ອນໄຟຟ້າເຊລະບໍາ. ປີ 2010
                              ໄດ້ເປັນຮອງຫົວໜູ້າ ເຂື່ອນໄຟຟ້າເຊເສັດ 1-2. ປີ 2010
                              ເປັນຫົວໜ້າໂຄງການກໍ່ສ້າງເຂື່ອນໄຟຟ້າຫ້ວຍລໍາພັນໃຫຍ່
                              ກຳລັງຕິດຕັ້ງ 88 MW ແຂວງເຊກອງ. ປີ 2011-2020
                              ເປັນຮອງຫົວໜ້າ ຝ່າຍກໍ່ສ້າງເຂື່ອນ ແລະ
                              ຄຸ້ມຄອງໂຄງການຮ່ວມທຶນ. ປີ2013-2017 ເປັນຮອງຫົວໜ້າ
                              ຝ່າຍກໍ່ສ້າງເຂື່ອນ ແລະ ທັງເປັນ
                              ຫົວໜ້າໂຄງການກໍ່ສ້າງເຂື່ອນໄຟຟ້ານໍ້າງຶື່ມ 3
                              (ຄວບຕໍາແໜ່ງ) ກຳລັງຕິດຕັ້ງ 480 MW ເມືອງລ້ອງແຈ້ງ,
                              ແຂວງໄຊສົມບູນ. ປີ 2018-2019
                              ຖືກແຕ່ງຕັ້ງໃຫ້ເປັນຄະນະກໍາມະການສືບສວນ-ສອບສວນ
                              ສາເຫດຄູກັນນໍ້າເຊປ່ຽນ-ເຊນໍ້ານ້ອຍແຕກພັງ. ປີ 2020
                              ເຖິງ ປັດຈຸບັນ ເປັນຮອງຜູ້ອໍານວຍການໃຫຍ່
                              ສາຍງານການຜະລິດ ແລະ ພັດທະນາທຸລະກິດ,
                              ບໍລິສັດຜະລິດ-ໄຟຟ້າລາວມະຫາຊົນ.
                            </p></v-card-text
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

                        <!-- <v-layout row wrap>
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
                      </v-layout> -->

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
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Events",
  data() {
    return {
      press: [
        {
          comment: " 50 Comment",
          file: "General",
          date: "Nov09,2021",
          user: "Taiy Dueo",
          src: require("../../assets/images/Newsletters/pic_item2.png"),
          header: "ຜົນການກວດກາສຸກເສີນຄວາມປອດໄພຂອງເຂື່ອນຢູ່ ສປປ. ລາວ",
          header_la: "ກອງປະຊຸມ ສ້າງຕັ້ງສະມາຄົມເຂື່ອນລາວໃນວັນທິ່ 13/11/2022",
          start: "Excellencies, Leaders of the Party and the State,",
          text: "-Dear Fellow Compatriots, Soldiers, Police and all Lao People,",

          title:
            " Today, 8 August 2021, we jointly commemorate and celebrate the 54th anniversary of the founding of the Association of Southeast Asian Nations or ASEAN (8 August 1967 - 8 August 2021) while the world is facing the COVID-19 pandemic as well as natural disasters. Since its inception in 1967, ASEAN has grown into a resilient inter-governmental regional organisation with the aim of maintaining and promoting peace, stability and cooperation for the prosperity of the ASEAN Member States based on the aspiration of the ASEAN Charter that aims to build an ASEAN Community under the ASEAN Motto: “One Vision, One Identity, One Community”.",
          title1:
            "   Currently, ASEAN consists of 10 member states, with a population of more than 670 million people, comprises of different cultures, languages and religions. Notwithstanding these differences, we coexist and cooperate in the spirit of unity in diversity, thereby making ASEAN the successful regional organisation with tangible achievements on many fronts, notably, a region of long-lasting peace and stability, and economic resilience making it the fifth largest economy in the world. These have enabled ASEAN to integrate into the regional and global economy, which has contributed to social development as well as the improvement of the livelihood of the ASEAN peoples. The success of ASEAN has been recognised internationally, particularly ASEAN’s Centrality, its leading role and the ASEAN Way of consensus, which serve as the fundamental principles that ensured its success, as well as guided its external relations.",
          title2:
            "Unfortunately, in 2021, ASEAN as well as other regions across the world continue to face many challenges, particularly the COVID-19 pandemic and other natural disasters, which have severely affected public health, socio-economic development, stability and security. Although the COVID-19 pandemic has disrupted connectivity, ASEAN has remained committed to further strengthen cooperation within ASEAN, and between ASEAN and its Dialogue Partners as well as External Parties, through utilising numerous modalities, including videoconference at all levels. Such cooperation entails the discussion on the prevention of the COVID-19 pandemic, preparedness and response to the impact of the COVID-19 pandemic on the economy and society in the region and the world at large. Importantly, ASEAN agreed to establish the COVID-19 ASEAN Response Fund (CARF) and the ASEAN Regional Reserve of Medical Supplies for Public Health Emergencies (RRMS), as well as to utilise USD 10.5 Million from the ASEAN Response Fund in response to the COVID-19 pandemic, including the procurement of COVID-19 vaccines for the peoples of ASEAN and ASEAN Secretariat staff.",
          title3:
            "  In line with the theme: “We Care, We Prepare, We Prosper” under the ASEAN Chairmanship of Brunei Darussalam in 2021, ASEAN will continue its efforts to build a caring ASEAN Community, strengthen ASEAN’s capability to cope with challenges, and foster ASEAN’s unity towards a sustainable economic development, as well as promote ASEAN’s principles and Centrality in external relations with a view to promoting and maintaining peace, security and stability in the region and the world at large.",
          text1: "-Excellencies, Fellow Compatriots,",

          title4:
            "The Lao PDR became a member of ASEAN on 23 July 1997. Over the past 24 years, as a member of ASEAN, the Lao PDR has fully participated in the collective processes of ASEAN with a sense of high responsibility with a view to protecting and ensuring our national interests. This development has significantly contributed to socio-economic development and promoted the role of the Lao PDR in the regional and international arena. The Lao PDR has also continued to garner the trust, support, cooperation and assistance from ASEAN Member States as well as ASEAN’s Dialogue Partners and External Parties through both bilateral and multilateral frameworks. I am therefore of the view that these are tangible achievements resulted from the pursuit of the foreign policy of peace, independence, friendship and cooperation, as well as the New Economic Mechanism of our Party and State.",
        },
      ],
      items: [
        {
          src: require("../../assets/images/Newsletters/pic_item2.png"),
          title: "ຜົນການກວດກາສຸກເສີນຄວາມປອດໄພຂອງເຂື່ອນຢູ່ ສປປ. ລາວ",
          date: "27 ເມສາ 2022",
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

      items3: [
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.09.17.png"),
        },
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.09.26.png"),
        },
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.09.37.png"),
        },
      ],
      items4: [
        {
          src: require("../../assets/images/Newsletters/Copy of logo-cigb.png"),
        },
        {
          src: require("../../assets/images/Newsletters/Copy of LAD trans....png"),
        },

        {
          src: require("../../assets/images/Newsletters/Flag_of_Laos.svg.png"),
        },
      ],
      items5: [
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.26.53.png"),
        },
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.27.01.png"),
        },
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.27.30.png"),
        },
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.27.21.png"),
        },
      ],
      items6: [
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.28.17.png"),
        },

        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.28.34.png"),
        },
      ],
      items7: [
        {
          src: require("../../assets/images/Newsletters/DSPC_Tran.png"),
        },

        {
          src: require("../../assets/images/Newsletters/CS Energy logo-Trans.png"),
        },
        {
          src: require("../../assets/images/Newsletters/logo-XPCL-Trans-01.png"),
        },
        {
          src: require("../../assets/images/Newsletters/Screenshot 2022-03-22 at 16.29.24.png"),
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
