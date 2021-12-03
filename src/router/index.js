/// this is basically the router files
/// in this file we routes the file with one another and also provide the complete path of the specific files
/// here I have also included the global routing guards

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import product from "../views/product.vue";
import jewelery from "../components/jewelery.vue";
import menclothing from "../components/menclothing.vue";
import womenclothing from "../components/womenclothing.vue";
import electronics from "../components/electronics.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import ContactUs from "../views/ContactUs.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component:ContactUs,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/product/:id",
    component: product,
    name: "product",
    props: true,
  },
  {
    path: "/jewelery",
    component: jewelery,
    name: "jewelery",
    props: true,
  },
  {
    path: "/electronics",
    component: electronics,
    name: "electronics",
  },
  {
    path: "/menclothing",
    component: menclothing,
    name: "menclothing",
  },
  {
    path: "/womenclothing",
    component: womenclothing,
    name: "womenclothing",
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



//////////////////////   Method for >>>>>>>> ROUTER GUARD   (GLOBAL)
router.beforeEach((to, from, next) => {  

  var isAuthenticated = false;
  if (localStorage.getItem('currentUser'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (['/login', '/signup', ].includes(to.path) || isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/login'); // go to '/login';
  }
})

export default router;