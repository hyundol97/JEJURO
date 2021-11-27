<template>
  <div class="my-page">
    <home-header-layout />
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
  background-color: #f89b00;
}
</style>
