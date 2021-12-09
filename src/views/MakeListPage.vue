<template>
  <div>
    <header-layout />
    <div class="list-explain">
      <h3>찾으시는 여행지가 있나요?</h3>
      <h3>무엇이든 검색해 보세요!</h3>
    </div>
    <div class="search-box">
      <div class="search-item">
        <img :src="searchImg" class="search-banner-img" />
        <input
          class="search-banner-input"
          v-model="searchName"
          placeholder="검색어를 입력하세요!"
        />
      </div>
    </div>
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
    return { searchImg: require("@/assets/fruit_logo.png"), searchName: "" };
  },
};
</script>

<style scoped>
.list-explain {
  position: absolute;
  top: 230px;
  left: 35vw;
  text-align: center;
  width: 400px;
  line-height: 1.7;
}

.search-box {
  position: absolute;
  top: 300px;
  left: 35vw;
}

.search-item {
  width: 400px;
  height: 50px;
  border: 2.5px solid #ff9b09;
  border-radius: 25px;
  margin: 15px;
  display: flex;
}

.search-banner-img {
  padding: 5px;
  vertical-align: middle;
  box-sizing: inherit;
}

.search-banner-input {
  padding: 10px;
  vertical-align: middle;
  box-sizing: inherit;
  border: 0 solid black;
}

input:focus {
  outline: none;
}
</style>
