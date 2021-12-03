// it is a contact us page which show that if anyone wants to know or ask some information regarding our system
// he/she can contact us through email or numbers given on our website

<template>
  <v-app>
    <Header/>
    <v-card class="flex-wrap ml-13 text-center pt-12" height="86vh" width="95%">
      <div class="contact">
        <h1>This is our Contact page</h1>
        <br />
        <p>You can email us for more information about our system.</p>
        <h4><u> Email: </u></h4>
        <span> magento@gmail.com </span>
        <p>magento@gmail.net</p>
        <p>
          For further information, you can call us at these numbers by 24/7.
        </p>
        <h4><u> Contact: </u></h4>
        <span> 0423-0011222 </span>
        <p>0423-0011444</p>
      </div>
    </v-card>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Contactus",
  components: {
    Header,
    Footer,
  },
};
</script>
