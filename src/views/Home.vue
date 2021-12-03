// In this file, I just show up a home page of my website
// Showing up main page of our system in which I described, what's our system has or whats its main functionalities
// 1. A caruosal
// 2. multiple cards (describing our system features)

<template>
  <v-app>
    <Header/>
    <v-carousel :show-arrows="false" hide-delimiters cycle>
      <v-carousel-item
        cover
        mt-10
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <!-- sheet starts from here -->

    <v-sheet
      class="mx-auto d-flex flex-row flex-wrap justify-space-around ml-13"
      elevation="3"
      height="auto"
      width="93%"
    >
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          cover
          src="https://images.pexels.com/photos/5673960/pexels-photo-5673960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>

        <v-card-title>Neckless</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • China, Beijing</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
      </v-card>
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          cover
          src="https://images.unsplash.com/photo-1591209627710-d2427565a41f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        ></v-img>

        <v-card-title>Diamond Ring</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.7 (12.5K)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Japanese, Stylo</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
      </v-card>
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        ></v-img>

        <v-card-title>Decent T-Shirts</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Casual, Plain</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
      </v-card>
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>

        <v-card-title>Xiaomi/Redmi</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Korean, State</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components:{
    Header,
    Footer
  },
  data() {
    return {
      show: false,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      items: [
        {
          src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://i0.wp.com/eatsleepwander.com/wp-content/uploads/2020/10/Black-and-White-Photo-Collage-YouTube-Thumbnail-scaled.jpg?fit=2048%2C1152&ssl=1",
        },
        {
          src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  },
};
</script>