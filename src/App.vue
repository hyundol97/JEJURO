<template>
  <v-app class="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
Vue.use(Buefy);

export default {
  components: {},
  name: "App",

  data() {
    return {};
  },

  created() {
    setTimeout(() => {
      console.log(this.$store.state.fireUser);
    }, 500);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

.app {
  font-family: "Noto Sans KR", sans-serif;
}

main,
.v-main,
.theme--light.v-application {
  background-color: none;
  background-image: url(./assets/back_img.png);
  background-size: 100% 100%;
}
</style>
