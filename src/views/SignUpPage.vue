<template>
  <div class="signUp">
    <div class="signUp-form">
      <h3 style="margin-top: 20px">Input your email</h3>
      <v-text-field label="Email" :rules="rules" v-model="email"></v-text-field>
      <h3>Input your password</h3>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
      ></v-text-field>
      <h3 style="margin-top: 20px">Select your age (Optional)</h3>
      <v-combobox
        v-model="select1"
        :items="ages"
        label="Age"
        outlined
        dense
        style="margin-top: 20px"
      ></v-combobox>
      <h3 style="margin-top: 20px">Select your gender (Optional)</h3>
      <v-combobox
        v-model="select2"
        :items="genders"
        label="Gender"
        outlined
        dense
        style="margin-top: 20px"
      ></v-combobox>
      <div class="signUp-btn">
        <v-row align="center" justify="space-around">
          <v-btn width="360px" color="error" @click.prevent="checkMembers()">
            OK
          </v-btn>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import firebase from "firebase/compat/app";

export default {
  name: "SignUpPage",

  components: {},

  data() {
    return {
      name: "",
      step: 1,
      radioGroup: 1,
      ages: ["10대", "20대 ~ 30대", "40대 ~ 50대", "60대 이상"],
      genders: ["남", "여"],
      LoginLogo: require("@/assets/no_logo_b.png"),
      email: "",
      password: "",
      select1: [],
      select2: [],
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
    };
  },

  methods: {
    checkMembers() {
      console.log("클릭!");
      console.log(this.email);
      console.log(this.password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert("회원가입 성공!");
          window.location.href = "http://localhost:8080/LoginPage";
        })
        .catch((err) => {
          alert("중복된 이메일입니다. 다시 입력해주세요.");
        });
    },
  },
};
</script>

<style>
.signUp {
  width: 100%;
  height: 100%;
  background-color: #f89b00;
}

.signUp-form {
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
  line-height: 1.5em;
}

#signUp-logo {
  width: 330px;
  height: 330px;
  justify-content: center;
}

.signUp-btn {
  margin-top: 40px;
}

h3 {
  color: cornflowerblue;
}
</style>
