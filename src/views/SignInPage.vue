<template>
  <div class="signIn">
    <div class="signIn-form">
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <span>{{ currentTitle }}</span>
          <v-avatar
            color="primary lighten-2"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field label="ID" value=""></v-text-field>
              <span class="text-caption grey--text text--darken-1">
                Please enter an ID for your account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-text-field label="Password" type="password"></v-text-field>
              <v-text-field
                label="Confirm Password"
                type="password"
              ></v-text-field>
              <span class="text-caption grey--text text--darken-1">
                Please enter a password for your account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <v-card-text>
              <v-select
                v-model="select1"
                :items="ages"
                :error-messages="errors"
                label="Age"
                data-vv-name="select"
                required
              ></v-select>
              <v-select
                v-model="select2"
                :items="genders"
                :error-messages="errors"
                label="Gender"
                data-vv-name="select"
                required
              ></v-select>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="4">
            <div class="pa-4 text-center">
              <v-img class="mb-4" contain height="128" :src="LoginLogo"></v-img>
              <router-link to="/LoginPage">
                <h3 class="text-h6 font-weight-light mb-2">Go to Login</h3>
              </router-link>
              <span class="text-caption grey--text"
                >Thanks for signing up!</span
              >
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="step === 4"
            color="primary"
            depressed
            @click="step++"
          >
            Next
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInPage",

  components: {},

  data() {
    return {
      name: "",
      step: 1,
      radioGroup: 1,
      ages: ["10대", "20대 ~ 30대", "40대 ~ 50대", "60대 이상"],
      genders: ["남", "여"],
      LoginLogo: require("@/assets/no_logo_b.png"),
      select1: null,
      select2: null,
    };
  },

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign Up";
        case 2:
          return "Create a password";
        case 3:
          return "Age & Gender";
        default:
          return "Welcome to Jejuro";
      }
    },
  },
};
</script>

<style>
.signIn {
  width: 100%;
  height: 100%;
  background-color: #f89b00;
}

.signIn-form {
  position: relative;
  top: 30vh;
}
</style>
