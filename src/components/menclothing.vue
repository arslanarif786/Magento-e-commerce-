/// this component basically show the result of menclothing items 
/// that are exist in the API

<template>
  <v-app>
    <Header/>
    <div class="d-flex flex-row flex-wrap ml-11" min-height=100vh width="95%">
      <v-card
        id="my-card"
        class="mx-auto my-12"
        max-width="270"
        v-for="menclothing in menclothings"
        :key="menclothing.id"
      >
        <v-img contain :aspect-ratio="4 / 3" :src="menclothing.image">
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
              ${{ menclothing.price }}
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-title>{{ menclothing.title }} </v-card-title>

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

          <div class="mb-10 mt-2 text-subtitle-1 orange--text">
            ${{ menclothing.price }}
          </div>
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
    </div>
    <Footer/>
  </v-app>
</template>


<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import axios from "axios";
Vue.use(VueAxios, axios);

export default {
  name: "menclothing",
  components: {
    Header,
    Footer,
  },

  // props: ["jewelery"],
  data: () => {
    return {
      loading: false,
      selection: 1,
      menclothings: [],
    };
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        (this.menclothings = response.data), console.log(response.data);
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