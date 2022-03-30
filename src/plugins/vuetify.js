import Vue from "vue";
import Vuetify from "vuetify/lib/framework";




Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
            light: {
                primary: '#1874B7',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                colorfooter: '#D1D1D1',
                error: '#b71c1c',
                nor: '#F3F3F3',
                textgray: '#707070',
                brownler: '#F4D3BA',
                bg_about: '#B9D5E9',

            },
            options: {
                customProperties: true
            },
        },

    },


});



