<template>
  <div class="header-layout">
    <div class="logo-left">
      <router-link to="/">
        <img :src="loginLogo" width="90px" height="90px" />
      </router-link>
    </div>
    <div class="top-btn">
      <a class="ma-3" href="/LoginPage" v-if="!$store.state.fireUser">
        LOGIN
      </a>
      <a class="ma-3" href="/SignUpPage" v-if="!$store.state.fireUser">
        JOIN
      </a>
      <a class="ma-3" v-if="$store.state.fireUser" @click="signOut()">
        LOGOUT
      </a>
      <a class="ma-3" href="/MyPage"> MY PAGE </a>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  name: "HeaderLayout",

  components: {},

  data() {
    return { loginLogo: require("@/assets/sublogo_w.png") };
  },

  methods: {
    async signOut() {
      await firebase.auth().signOut();
    },
  },
};
</script>

<style scoped>
.header-layout {
  background-color: #f89b00;
  width: 100%;
  height: 90px;
}

.top-btn {
  position: absolute;
  right: 4vw;
  z-index: 100;
  line-height: 90px;
  font-size: 18px;
}

.v-application a {
  color: #ffffff;
}

a {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}

.logo-left {
  position: absolute;
  top: 0px;
  left: 60px;
  z-index: 100;
}
</style>
