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
    console.log(this.$store.state.fireUser);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
body {
  overflow-x: auto;
}
.app {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
