////  this is our App.vue that is Main file of the system
////  this file views all the routers
////  this file use the different components and pages(views) using the router-links

<template>
 
    <!-- Main starts from here -->
    <v-main>
      <router-view></router-view>
    </v-main>
 
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
  }),
};
</script>
