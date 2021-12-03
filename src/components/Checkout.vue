// this is a checkout component 
// this component basically checkout the details of specific product using by cart system
/// means when a user pressed add to cart button after that he/she wants to buy a product
/// he/she can checkout its summary peronal details, payment method and product details

<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Delivery Details
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Personal Details
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Payment</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px">
          <v-card-text v-model="email"> {{ email }}</v-card-text>
          <v-card-text v-model="userName"> {{ userName }}</v-card-text>
          <v-card-text v-model="password"> {{ password }}</v-card-text>
          <v-card-text v-model="number"> {{ number }}</v-card-text>
        </v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px">
          <v-card-text>
            <v-row align="center">
              <v-container class="border">
                <v-checkbox
                  hide-details
                  class="shrink mr-2 mt-0"
                  label="Credit/Debit Card"
                ></v-checkbox>
              </v-container>
            </v-row>

            <v-row align="center" class="mt-10">
              <v-container class="border">
                <v-checkbox
                  hide-details
                  class="shrink mr-2 mt-0"
                  label="Master CArd"
                ></v-checkbox>
              </v-container>
            </v-row>
          </v-card-text>
        </v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>



<script>
export default {
  name: "Checkout",
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      currentUser: [],
      e1: 1,
    };
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.firstName = this.currentUser.firstName;
    this.lastName = this.currentUser.lastName;
    this.userName = this.currentUser.userName;
    this.email = this.currentUser.email;
    this.password = this.currentUser.password;
    this.number = this.currentUser.number;
  },
};
</script>

<style scoped>
.border {
  border: 1px solid black;
}
</style>
