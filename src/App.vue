<template>
  <v-app>
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
};
</script>

<style>
.app {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 200px;
}
</style>
