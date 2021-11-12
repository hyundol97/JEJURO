<template>
  <div class="login">
    <div class="login-form">
      <img :src="LoginLogo" class="login-logo"/>
      <v-text-field
        label="ID"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-text-field label="Password" type="password"></v-text-field>
      <div class="login-btn">
        <v-row
          align="center"
          justify="space-around"
        >
          <v-btn
            class="mb-1"
            width="360px"
            color="primary">
            Login
          </v-btn>
        </v-row>
        <v-row
          align="center"
          justify="space-around"
        >
          <v-btn
            width="360px"
            color="error">
            Register
          </v-btn>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',

  components: {

  },

  data() {
    return {
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 5) || 'Min 5 characters',
      ],
      LoginLogo: require("@/assets/no_logo_b.png")
    }
  }

}
</script>

<style>
  .login {
    width: 100%;
    height: 100%;
    background-color: #f89b00;
  }
  .login-logo {
    width: 360px;
    height: 360px;
    justify-content: center;
  }
  .login-btn {
    margin-top: 20px;
  }
  .login-form {
    position: relative;
    top: 10vh;
    display: block;
    width: 400px;
    height: 600px;
    margin: 0 auto;
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 1px gray;
  }
</style>
