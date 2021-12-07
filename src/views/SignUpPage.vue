<template>
  <div class="signUp">
    <home-header-layout />
    <div class="signUp-form">
      <h4>Input your email</h4>
      <v-text-field
        label="Email"
        :rules="rules"
        v-model="email"
        style="margin-top: -5px"
      ></v-text-field>
      <h4>Input your password</h4>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
        style="margin-top: -5px"
      ></v-text-field>
      <h4 style="margin-top: 15px">Input your Nickname</h4>
      <v-text-field
        label="Nickname"
        v-model="nickName"
        style="margin-top: -5px"
      ></v-text-field>
      <h4 style="margin-top: 15px">Select your age (Optional)</h4>
      <v-combobox
        v-model="select1"
        :items="ages"
        label="Age"
        outlined
        dense
        style="margin-top: 15px"
      ></v-combobox>
      <h4 style="margin-top: 15px">Select your gender (Optional)</h4>
      <v-combobox
        v-model="select2"
        :items="genders"
        label="Gender"
        outlined
        dense
        style="margin-top: 15px"
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
import HomeHeaderLayout from "../layout/HomeHeaderLayout.vue";
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const db = getFirestore();
const auth = getAuth();

export default {
  name: "SignUpPage",

  components: { HomeHeaderLayout },

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
      nickName: "",
      select1: "",
      select2: "",
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
    };
  },

  methods: {
    async checkMembers() {
      await firebase.auth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((user) => {
          alert("회원가입 성공!");
          window.location.href = "http://localhost:8080/";
        })
        .catch((err) => {
          alert("실패! 이메일 혹은 비밀번호를 다시 입력해주세요.");
        });
    },
    async setMembers() {
      try {
        const docRef = await addDoc(collection(db, "userInfo"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style scoped>
.signUp {
  width: 100vw;
  height: 100vh;
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
  margin-top: 30px;
}

h4 {
  color: cornflowerblue;
}

@media screen and (min-width: 1600px) {
  .signUp-form {
    position: relative;
    top: 15vh;
  }
}
</style>
