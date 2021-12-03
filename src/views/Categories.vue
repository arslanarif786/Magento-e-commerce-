// it is a category page which bascially handles all the cateorgies of shopping system that our system includes
// 1. jewelery
// 2. electronics
// 3. men clothing
// 4. women clothing


<template>
  <v-card class="">
    <jewelery />
    <electronics />
    <menclothings />
    <womenclothings />
  </v-card>
</template>

<script>
import jewelery from "../components/jewelery.vue";
import electronics from "../components/electronics.vue";
import menclothings from "../components/menclothings.vue";
import womenclothings from "../components/womenclothings.vue";
export default {
  components: {
    jewelery,
    electronics,
    menclothings,
    womenclothings,
  },
};
</script>