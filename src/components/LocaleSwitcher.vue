<template>
  <div id="sw_lang_section">
    <button href="#" id="fix_iphone_hidden" class="flex items-center" @click="toggleVisibility">
      <v-row>
        <img :src="`/${$i18n.locale}.svg`" alt="flag" />
        <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
      </v-row>
    </button>
    
    <transition name="dropdown-fade">
      <ul id="sw_lang_dropdown"
        v-show="hideDropdown"
        v-if="isVisible"
        ref="dropdown"
        class="absolute normal-case z-30 font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20"
      >
        <li>
          <a
            href="#"
            @click.prevent="switchLocale('en')"
            ref="account"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
          >
            <img src="/en.svg" alt="english laos" class="h-8 w-8" />
            <span id="sw_lang_font_dropdown">   {{ $t("main.English") }}</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            @click.prevent="switchLocale('la')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
          >
            <img src="/la.svg" alt="english laos" class="h-8 w-8" />
            <span id="sw_lang_font_dropdown"> {{ $t("main.Lao") }}</span>
          </a>
        </li>
      </ul>
    </transition>
    <!--     
    <ul>
      <li
        v-for="locale in supportedLocales"
        :key="locale"
        @click="switchLocale(locale)"
      >
        {{ $t(locale) }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import { Trans } from "@/plugins/Translation";

export default {
  name: "LocaleSwitcher",
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    };
  },
  computed: {
    supportedLocales() {
      return Trans.supportedLocales;
    },
  },

  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        const to = this.$router.resolve({ params: { locale } });
        return Trans.changeLocale(locale).then(() => {
          this.$router.push(to.location);
          this.hideDropdown();
        });
      }
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },

   
  },
};
</script>
<style scoped>
ul#sw_lang_dropdown {
	background: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  padding: 10px 5px;
  /* margin-left: 90px; */
  z-index: 1000 !important;
  visibility: visible !important;
}

#fix_iphone_hidden {
  height: 100% !important;
  width: 100px !important;
}

li {
	display: flex;
   	text-decoration: none !important;
}

a {
	display: flex;
    	width: 85px;
    	padding: 0 !important;
    	margin: 10px 0 0 0 !important;
    	text-decoration: none !important;
}

img {
	width: 30px;
}

span {
	text-decoration: none !important;
  color: #fff !important;
  font-size: 12px;
  font-weight: 100;
}

#sw_lang_font_dropdown {
  color: #000 !important;
}

div#sw_lang_section {
    position: relative;
    top: 14px;
    right: -90px;
    z-index: 10000 !important;
    visibility: visible !important;
}

@media only screen and (max-width: 480px ) { 
  div#sw_lang_section {
    position: relative;
    top: 0px;
    right: 0px;
    z-index: 10000!important;
    visibility: visible!important;
    height: 100%;
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }

  div#sw_lang_section > button > div {
    top: 6px;
    left: 170px;  
    display: flex;
    align-items: center;
    justify-content: flex-end !important ;
    align-items: center;
  }
}

@media only screen and (max-width: 480px ) { 
  div#sw_lang_section {
    right: 0 !important;
  }
}

div#sw_lang_section > button > div {
    top: 6px;
    left: 170px;  
    display: flex;
    justify-content: center;
    align-items: center;
}

div#sw_lang_section[data-v-6f6ca80b] {
  /* display: none; */
  z-index: 10000 !important;
  visibility: visible !important;
}

@media only screen and (max-width: 959px ) {
  div#sw_lang_section {
    position: relative;
    top: 0px;
    right: -135px;
    z-index: 10000 !important;
    visibility: visible !important;
    height: 100%;
  }


  ul#sw_lang_dropdown {
    position: absolute;
    left: 0px;
    top: 40px;
    z-index: 10000 !important;
    visibility: visible !important;
  }

  a {
	  display: flex;
    width: 85px;
    /* padding: 0 !important; */
    margin: 0 !important;
    text-decoration: none !important;
    z-index: 10000 !important;
    visibility: visible !important;
  }

}

/* @media only screen and (max-width: 959px ) {
  div#sw_lang_section[data-v-6f6ca80b] {
    position: relative;
    top: 8px;
    right: -100%;
    z-index: 10000 !important;
    visibility: visible !important;
  }
} */

</style>
