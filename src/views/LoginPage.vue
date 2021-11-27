<template>
  <div class="login">
    <home-header-layout />
    <div class="login-form">
      <img :src="loginLogo" class="login-logo" />
      <v-text-field
        label="Email"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-text-field label="Password" type="password"></v-text-field>
      <div class="login-btn">
        <v-row align="center" justify="space-around">
          <v-btn class="mb-1" width="360px" color="primary"> LOGIN </v-btn>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-btn width="360px" color="error" to="/SignUpPage"> REGISTER </v-btn>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeaderLayout from "../layout/HomeHeaderLayout.vue";
export default {
  name: "LoginPage",

  components: { HomeHeaderLayout },

  data() {
    return {
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
      loginLogo: require("@/assets/no_logo_b.png"),
    };
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f89b00;
}
.login-logo {
  width: 360px;
  height: 330px;
  justify-content: center;
}
.login-btn {
  margin-top: 20px;
}
.login-form {
  position: relative;
  top: 10vh;
  display: block;
  width: 400px;
  height: 600px;
  margin: 0 auto;
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 2px 1px gray;
}

@media screen and (min-width: 1600px) {
  .login-form {
    position: relative;
    top: 15vh;
  }
}
</style>
