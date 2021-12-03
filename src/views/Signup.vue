// its a signup page, in which a new user when wants to register in our system
// entered the right details according to regular expressions that i have used in our system
// if its information is correct according to the regex
// our system will creates its account


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
            @click="login"
          >
            Login
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>

    <v-card class="d-flex flex-row flex-wrap ml-8" height="95vh" width="95%">
      <v-container>
        <v-row class="text-center">
          <v-col cols="6" class="mx-auto">
            <h1>Sign Up</h1>

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-inner-icon="mdi-account"
                label="First Name"
                type="text"
                placeholder="first name must be less than 15 characters"
                v-model="firstName"
                :rules="firstNameRules"
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-account"
                label="Last Name"
                type="text"
                placeholder="last name must be less than 15 characters"
                v-model="lastName"
                :rules="lastNameRules"
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-email"
                label="Email"
                type="email"
                placeholder="name@example.com"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-account"
                label="User Name"
                type="text"
                placeholder="else"
                v-model="userName"
                :rules="userNameRules"
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-lock"
                label="Password"
                type="password"
                placeholder="Password must be minimum eight characters, atleast one letter and one number"
                v-model="password"
                :rules="passwordRules"
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-phone"
                label="Phone Number"
                type="tel"
                placeholder="Phone Number must be in Pakistan format"
                v-model="number"
                :rules="numberRules"
                required
              ></v-text-field>

              <v-file-input
                prepend-icon="mdi-camera"
                @change="captureImage"
                v-model="User_img"
              >
              </v-file-input>

              <v-btn
                block
                depressed
                color="orange"
                @click.prevent="validateAndStoreInLocal"
              >
                Sign up
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import {
  emailRegex,
  firstNameRegex,
  lastNameRegex,
  userNameRegex,
  numberRegex,
  passwordRegex,
} from "@/constants/constant.js";

export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      ///////////////////////////////////*     Data properties for Regex */
      emailRules: emailRegex,
      firstNameRules: firstNameRegex,
      lastNameRules: lastNameRegex,
      userNameRules: userNameRegex,
      passwordRules: passwordRegex,
      numberRules: numberRegex,

      ////////////////////////////////////*  Data properties for storing data */
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      newUser: [],
      User_img:"",
      checkbox: false,
    };
  },
  created() {
    this.newUser = JSON.parse(localStorage.getItem("users") || "[]");
  },
  methods: {
    validateAndStoreInLocal() {
      if (this.$refs.form.validate()) {
        let user = {
          firstNameValue: this.firstName,
          lastNameValue: this.lastName,
          emailValue: this.email,
          passwordValue: this.password,
          userNameValue: this.userName,
          numberValue: this.number,
        };

        //////////////////////////////////////* duplication checkup by email */
        if (
          this.newUser.some((e) => {
            return e.emailValue == this.email;
          })
        ) {
          console.log("duplicate data");
        }
        //////////////////////////////////* push in local storage   */
        else {
          this.newUser.push(user);
          localStorage.setItem("users", JSON.stringify(this.newUser));
          console.log("Your account has been successfully created");
          this.$router.push({ name: "Login" });
        }
      }
      /////////////////////* to enter the new inputs */
      else {
        console.log("Your account is not created");
      }
    },
    login() {
      this.$router.push({ name: "Login" });
    },
  },

  captureImage(event) {
    console.log(event);

    let get = this;
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        get.User_img = reader.result;
      },
      false
    );
    reader.readAsDataURL(event);
  },
};
</script>
