5// its a login page, in which a user when entered the details
// we match its information from the local storage and then, 
// if its information is matched, user goes to home page
// otherwise user cant go on home page and have to be entered correct details

<template>
  <v-app>
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
            @click="signup"
          >
             Sign Up
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>

    <!------------         Header End         ----------------->

    <v-card class="d-flex flex-row flex-wrap ml-9" height="95vh" width="95%">
      <v-container>
        <v-row class="text-center">
          <v-col cols="6" class="mx-auto">
            <h1>Login</h1>

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
              prepend-inner-icon="mdi-account"
                label="Username"
                type="username"
                v-model="userName"
                required
              ></v-text-field>

              <v-text-field
              prepend-inner-icon="mdi-lock"
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>

              <v-btn depressed color="orange" @click.prevent="logIn">
                Login
              </v-btn>

              <br />

              <router-link to="/signup">
                <div>Create a New Account</div>
              </router-link>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      valid: true,
      userName: "",
      password: "",
      newUser: [],
    };
  },

  methods: {
    logIn() {
      this.newUser = JSON.parse(localStorage.getItem("users"));
      // console.log(this.newUser);
      this.currentUser = this.newUser.find((e) => {
        return (
          e.userNameValue == this.userName && e.passwordValue == this.password
        );
      });
      if (this.currentUser) {
        console.log("login success");
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        this.$router.push({ name: "Home" });
      } else {
        console.log("login failed");
      }
    },
    signup() {
      this.$router.push({ name: "Signup" });
    },
  },
};
</script>
