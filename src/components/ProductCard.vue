/// this component bascially gets and display all the data of product cards 
/// that are exists in the API
/// this is the child component of the productList

<template>
  <v-hover v-slot="{ hover }" class="my-5">
    <v-card id="my-card" class="mx-auto my-12" max-width="270">
      <v-img contain :aspect-ratio="4 / 3" :src="product.image">
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
            ${{ product.price }}
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-title
        ><router-link
          class="text fontSize black--text"
          :to="{ name: 'product', params: { id: product.id } }"
          >{{ product.title }}</router-link
        >
      </v-card-title>

      <v-card-text>
        <v-btn absolute color="orange" class="white--text" fab small right top>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-row align="center" class="mx-0"> </v-row>

        <div class="mb-10 mt-2 text-subtitle-1 orange--text">${{ product.price }}</div>
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
  </v-hover>
</template>


<script>
export default {
  name: "productcard",
  props: ["product"],
  data: () => {
    return {
      loading: false,
      selection: 1,
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /* opacity: .8; */
  position: absolute;
  width: 100%;
}
</style>