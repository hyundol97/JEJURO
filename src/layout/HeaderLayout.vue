<template>
  <div class="buttons">
    <router-link to="/LoginPage">
      <v-btn
        class="ma-2"
        color="success"
      >
      Log In
      </v-btn>
    </router-link>
    <router-link to="/LoginPage">
      <v-btn
          class="ma-2"
          color="success"
          to="/SingInPage"
        >
        Join
      </v-btn>
    </router-link>
    <router-link to="/LoginPage">
      <v-btn
          class="ma-2"
          color="success"
          to="/MyPage"
        >
        Help
      </v-btn>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'HeaderLayout',

  components: {
  },

  data () {
    return {
    }
  },

  methods: {
  }
}

</script>

<style>
  .buttons {
    position: fixed;
    top: 10px;
    right: 1vw;
    z-index: 100;
  }
  a { text-decoration:none !important } 
  a:hover { text-decoration:none !important }
</style>
