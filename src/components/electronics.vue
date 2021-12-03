/// this component bascially show the result of electonic items 
/// that are exist in the API


<template>
  <v-app>
    <Header/>
    <v-card class="d-flex flex-row flex-wrap ml-13" min-height=100vh width="95%">
      <v-card
        id="my-card"
        class="mx-auto my-12"
        max-width="270"
        v-for="electronic in electronics"
        :key="electronic.id"
      >
        <v-img contain :aspect-ratio="4 / 3" :src="electronic.image">
          <v-expand-transition>
            <div
              v-if="hover"
              class="
                d-flex
                transition-fast-in-fast-out
                blue-grey
                darken-4 darken-2
                v-card--reveal
                text-h2
                white--text
              "
              style="height: 100%"
            >
              ${{ electronic.price }}
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-title>{{ electronic.title }} </v-card-title>

        <v-card-text>
          <v-btn
            absolute
            color="orange"
            class="white--text"
            fab
            small
            right
            top
          >
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-row align="center" class="mx-0"> </v-row>

          <div class="mb-10 mt-2 text-subtitle-1 orange--text">${{ electronic.price }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <div class="d-flex justify-end align-end">
          <v-btn
            block
            absolute
            bottom
            class="secondary text-light"
            @click="addToCart()"
          >
            + Add to Cart
          </v-btn>
        </div>
      </v-card>
    </v-card>
    <Footer/>
  </v-app>
</template>


<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
Vue.use(VueAxios, axios);

export default {
  name: "electronic",
  // props: ["jewelery"],
  components:{
    Header,
    Footer
  },
  data: () => {
    return {
      loading: false,
      selection: 1,
      electronics: [],
    };
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        (this.electronics = response.data), console.log(response.data);
      });
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
</style>