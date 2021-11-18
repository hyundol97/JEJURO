import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFMn4JmEEWlJww3zjTZbDzQCaERWNQetM",
  authDomain: "jejuro-aed58.firebaseapp.com",
  projectId: "jejuro-aed58",
  storageBucket: "jejuro-aed58.appspot.com",
  messagingSenderId: "269754792235",
  appId: "1:269754792235:web:5444c22c35289dd0e02d6e",
  measurementId: "G-7133M5G4MP",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
