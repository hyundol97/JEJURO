<template>
  <div class="header-layout">
    <div class="logo-left">
      <router-link to="/">
        <img :src="loginLogo" width="180px" height="90px" />
      </router-link>
    </div>
    <div class="top-btn">
      <router-link class="ma-3" to="/LoginPage" v-if="!$store.state.fireUser">
        LOGIN
      </router-link>
      <router-link class="ma-3" to="/SignUpPage" v-if="!$store.state.fireUser">
        JOIN
      </router-link>
      <router-link class="ma-3" v-if="$store.state.fireUser" @click="signOut()">
        LOGOUT
      </router-link>
      <router-link class="ma-3" to="/MyPage"> MY PAGE </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "HeaderLayout",

  components: {},

  data() {
    return { loginLogo: require("@/assets/fix_sub_oo.png") };
  },

  methods: {
    async signOut() {
      console.log(this.$store.state.fireUser._delegate.email + " LogOut!");
      await firebase.auth().signOut();
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "nurom-bold";
  src: url("../assets/Nurom-Bold.ttf") format("truetype");
}
.header-layout {
  background-color: #f89b00;
  width: 100%;
  height: 90px;
  font-family: "nurom-bold";
}

.top-btn {
  position: absolute;
  right: 3vw;
  z-index: 100;
  line-height: 90px;
  font-size: 20px;
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
  left: 3vw;
  z-index: 100;
}
</style>
