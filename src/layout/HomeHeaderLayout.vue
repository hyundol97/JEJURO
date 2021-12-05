<template>
  <div class="home-header-layout">
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
  name: "HomeHeaderLayout",

  components: {},

  data() {
    return { loginLogo: require("@/assets/sublogo_oo.png") };
  },

  methods: {
    isHome() {
      if (document.URL === "http://localhost:8000/") {
        this.loginLogo = require("@/assets/fruit_main.png");
      }
    },
    async signOut() {
      await firebase.auth().signOut();
    },
  },
  created() {
    console.log(document.URL);
    this.isHome();
  },
};
</script>

<style scoped>
.home-header-layout {
  width: 100%;
  height: 90px;
  background-color: white;
  color: #ff9b09;
}

.top-btn {
  position: absolute;
  right: 2vw;
  z-index: 100;
  line-height: 90px;
  font-size: 18px;
}

a {
  text-decoration: none !important;
  color: #ff9b09;
}
a:hover {
  text-decoration: none !important;
  color: #ff9b09;
}
a:link {
  color: #ff9b09;
}
a:visited {
  color: #ff9b09;
}
a:active {
  color: #ff9b09;
}

.logo-left {
  position: absolute;
  top: 0px;
  left: 3vw;
  z-index: 100;
}
</style>
