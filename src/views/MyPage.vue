<template>
  <div class="my-page">
    <home-header-layout />
    <!-- <div>현재 회원 이메일 => {{ this.$store.state.fireUser.email }}</div> -->
    <div class="comming-soon">Comming Soon!</div>
  </div>
</template>

<script>
import HomeHeaderLayout from "../layout/HomeHeaderLayout.vue";
export default {
  name: "MyPage",

  components: { HomeHeaderLayout },

  data() {
    return {};
  },
};
</script>

<style scoped>
.my-page {
  width: 100%;
  height: 100%;
}

.comming-soon {
  width: 800px;
  height: 120px;
  background-color: #2f9647;
  color: #ffffff;
  font-size: 80px;
  vertical-align: middle;
  text-align: center;
  border-radius: 25px;
  position: absolute;
  top: 45vh;
  left: 28vw;
}
</style>
