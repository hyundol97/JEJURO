<template>
  <v-app>
    <HeaderLayout class="buttons"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderLayout from './layout/HeaderLayout.vue'

export default {
  components: { HeaderLayout },
  name: 'App',

  data: () => ({
    //
  })
}
</script>


<style>
  .buttons {
    position: fixed;
    top: 10px;
    right: 1vw;
  }
</style>