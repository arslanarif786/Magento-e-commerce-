<template>
  <div id="inspire">
    <!-- Drawer starts from here -->
    <v-navigation-drawer temporary app v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar> </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <h3><u> CATEGORIES </u></h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="../assets/electronic.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="electronics">
          <v-list-item-title>Electronics</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="../assets/jewel.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="jewelery">
          <v-list-item-title>Jewelery</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="../assets/profile.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="menclothing">
          <v-list-item-title>Men's Clothing</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line link>
        <v-list-item-avatar>
          <img cover src="../assets/girl.jpg" />
        </v-list-item-avatar>

        <v-list-item-content @click="womenclothing">
          <v-list-item-title>Women's Clothing</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <!-- Drawer end here -->

    <!-- side menue -->

    <v-card
      id="side-menue"
      color="dark"
      flex-column
      style="z-index: 1; position: absolute"
      height="7.7vh"
      width="100%"
      class="mx-auto"
    >
      <v-row
        outlined
        color="transparent"
        height="55vh"
        class="mt-0"
        justify="center"
      >
        <v-col cols="2">
          <v-btn
            relative
            color="grey darken-4"
            class="white--text"
            tile
            small
            right
            @click="home"
          >
            <v-icon>mdi-home</v-icon> Home
          </v-btn>
        </v-col>

        <v-col cols="2">
          <v-btn
            relative
            color="grey darken-4"
            class="white--text"
            small
            right
            @click="products"
          >
            <v-icon>mdi-widgets</v-icon> Products
          </v-btn>
        </v-col>

        <v-col cols="2">
          <v-btn
            relative
            color="grey darken-4"
            class="white--text"
            tile
            small
            right
            @click="about"
          >
            <v-icon> mdi-information </v-icon> About
          </v-btn>
        </v-col>

        <v-col cols="2">
          <v-btn
            relative
            color="grey darken-4"
            class="white--text"
            small
            right
            @click="contactus"
          >
            <v-icon> mdi-message-text</v-icon> Contact us
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!--Nav starts from here -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span class="orange--text"> M</span>agento
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="mr-1 transparent"
            @click="profile"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <v-btn color="light" dark class="mr-1">
        {{ cartItemCount }}
        <v-icon right> mdi-cart</v-icon>
      </v-btn>

      <v-btn color="orange" class="white--text" @click="logout">
        Logout
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!------------         Header End         ----------------->
  </div>
</template>


<script>
export default {
  name: "Header",
  data: () => ({
    drawer: null,
  }),
  components: {},
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
    //////////////*********           Router links of specific pages           ***************//////////////
    profile() {
      this.$router.push({ name: "Profile" });
    },
    logout() {
      localStorage.removeItem("currentUser");
      this.$router.push({ name: "Login" });
    },
    home() {
      this.$router.push({ name: "Home" });
    },
    products() {
      this.$router.push({ name: "products" });
    },
    about() {
      this.$router.push({ name: "About" });
    },
    contactus() {
      this.$router.push({ name: "ContactUs" });
    },
    jewelery() {
      this.$router.push({ name: "jewelery" });
    },
    electronics() {
      this.$router.push({ name: "electronics" });
    },
    menclothing() {
      this.$router.push({ name: "menclothing" });
    },
    womenclothing() {
      this.$router.push({ name: "womenclothing" });
    },
  },
};
</script>