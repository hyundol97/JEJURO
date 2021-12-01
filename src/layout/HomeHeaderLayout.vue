<template>
  <div class="homge-header-layout">
    <div class="logo-left">
      <router-link to="/">
        <img :src="loginLogo" width="90px" height="90px" />
      </router-link>
    </div>
    <div class="top-btn">
      <v-btn
        class="ma-3"
        color="success"
        to="/LoginPage"
        v-if="!$store.state.fireUser"
      >
        LOGIN
      </v-btn>
      <v-btn
        class="ma-3"
        color="success"
        to="/SignUpPage"
        v-if="!$store.state.fireUser"
      >
        JOIN
      </v-btn>
      <v-btn
        class="ma-3"
        color="success"
        v-if="$store.state.fireUser"
        @click="signOut()"
      >
        LOGOUT
      </v-btn>
      <v-btn class="ma-3" color="success" to="/MyPage"> MY PAGE </v-btn>
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
    return { loginLogo: require("@/assets/sublogo_w.png") };
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
.header-layout {
  width: 100%;
  height: 90px;
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
