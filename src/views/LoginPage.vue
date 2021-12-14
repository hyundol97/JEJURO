<template>
  <div class="login">
    <home-header-layout />
    <div class="login-form">
      <img :src="loginLogo" class="login-logo" />
      <v-text-field
        label="Email"
        :rules="rules"
        hide-details="auto"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
      ></v-text-field>
      <div class="login-btn">
        <v-row align="center" justify="space-around">
          <v-btn
            class="mb-1"
            width="360px"
            color="primary"
            @click="checkLogin()"
          >
            LOGIN
          </v-btn>
        </v-row>
        <v-row align="center" justify="space-around">
          <v-btn width="360px" color="error" to="/SignUpPage"> REGISTER </v-btn>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import HomeHeaderLayout from "../layout/HomeHeaderLayout.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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
      email: "",
      password: "",
    };
  },

  methods: {
    async checkLogin() {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert("로그인 성공!");
          window.location.href = "http://localhost:8080/";
          this.$store.commit("setFireUser", user.user);
        })
        .catch((err) => {
          alert("실패! 이메일 혹은 비밀번호를 다시 입력해주세요.");
        });
    },
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
  top: 5vh;
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
    top: 10vh;
  }
}
</style>
