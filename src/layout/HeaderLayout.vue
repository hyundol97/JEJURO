<template>
  <div>
    <div class="logo-left">
      <router-link to="/">
        <img :src="LoginLogo" width="75px" height="75px" />
      </router-link>
    </div>
    <div class="buttons">
      <v-btn class="ma-2" color="success" to="/LoginPage"> LOGIN </v-btn>
      <v-btn class="ma-2" color="success" to="/SignInPage"> JOIN </v-btn>
      <v-btn class="ma-2" color="success" to="/MyPage"> MY PAGE </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",

  components: {},

  data() {
    return { LoginLogo: require("@/assets/no_logo_b.png") };
  },

  methods: {},
};
</script>

<style>
.buttons {
  position: fixed;
  top: 10px;
  right: 1vw;
  z-index: 100;
}
a {
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}

.logo-left {
  position: fixed;
  top: 10px;
  left: 1vw;
  z-index: 100;
}
</style>
