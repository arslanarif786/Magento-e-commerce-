/// this component bascially gets and display all the data of product List
/// that are exists in the API
/// this is the parent of the productCard component

<template>
  <v-card class="d-flex flex-row flex-wrap ml-11 pt-10" min-height=100vh width="95%">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </v-card>
</template>




<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>