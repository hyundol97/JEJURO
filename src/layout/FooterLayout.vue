<template>
    <v-footer
      app
      color="deep-orange lighten-1"
      dark
      position: absolute
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          class="deep-orange lighten-1 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
</template>

<script>
export default {
  name: 'FooterLayout'
}
</script>

<style>
</style>
