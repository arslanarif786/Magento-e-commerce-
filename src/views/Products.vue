// this is our Products page which basically controls the productlist component
// in this page, all the products list get from the productlist component

<template>
  <v-app>
    <Header/>
    <v-container fluid class="lighten-5">
      <ProductList />
      <br />

      <div class="text-center">
        <v-pagination v-model="page" :length="4" circle></v-pagination>
      </div>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Products",
  data() {
    return {
      page: 1,
    };
  },
  components: {
    Header,
    Footer,
    ProductList,
  },
};
</script>

<style scoped>
</style>