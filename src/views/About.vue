// it is a about page which desribes that if anyone wants to know information regarding our system
// he/she can read the complete details about us in our website 


<template>
  <v-app>
    <Header/>
    <v-card class="d-flex flex-row flex-wrap ml-13 pt-12" min-height="100vh" width="95%">
      <v-card class="about text-center">
        <h1>This is our About page</h1>
        <div class="pa-12 text-justify">
          Magento allows you to buy and sell tangible goods, digital products or
          services online. Trade, be it barter exchange or buying and selling of
          goods and services has been prevalent for centuries. And this brings
          out the need for demand and supply of goods and services. It is
          conducted over computers, tablets, smartphones, and other smart
          devices. Magento operates in four market segments, including
          business-to-business, business-to-consumer, consumer-to-consumer, and
          consumer-to-business.New IT technologies have completely changed the
          way people shop in the 21st century. Internet and mobile devices have
          made it possible to purchase products or services at any time and in
          any location. <br />
          As a result, a tremendous number of e-commerce websites appeared on
          the world wide web and continue to compete with each other. In order
          to win that competition, make sure that your e-commerce website is
          able to provide excellent customer experience. There is no magic
          formula for a successful e-commerce business. However, there are some
          major elements of an eCommerce website that you must pay attention to.
          In this blog post we will talk about elements of the ‘product
          description’ page that are important in order to increase your
          website’s compatibility and customer satisfaction.
        </div>
      </v-card>
    </v-card>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "About",
  components: {
    Header,
    Footer,
  },
};
</script>
