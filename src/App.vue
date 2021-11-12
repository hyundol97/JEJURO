<template>
  <v-app class="app">
    <HeaderLayout class="buttons" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderLayout from "./layout/HeaderLayout.vue";
import Vue from "vue";
import Buefy from "buefy";
Vue.use(Buefy);

export default {
  components: { HeaderLayout },
  name: "App",

  data: () => ({
    //
  }),
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
