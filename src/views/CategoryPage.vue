<template>
  <div>
    <header-layout />
    <div class="top-banner">
      <div class="top-item">
        <p v-for="(item, idx) in menu" :key="idx">
          {{ item }}
        </p>
      </div>
    </div>
    <div class="comming-soon">Comming Soon!</div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import HeaderLayout from "../layout/HeaderLayout.vue";

export default {
  name: "MakeListPage",

  components: {
    HeaderLayout,
  },

  data() {
    return {
      menu: [
        "추천 여행지 모아보기",
        "맛집",
        "카페",
        "자연",
        "전시회&테마파크",
        "드라이브코스",
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.top-banner {
  width: 100%;
  background-color: #e4e4e4;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  display: flex;
  font-weight: bold;
}

.top-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  width: 1000px;
  height: 70px;
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
