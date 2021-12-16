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
          width="300px"
          v-model="searchName"
          placeholder="검색어를 입력하세요!"
        />
        <i
          class="fas fa-search fa-2x"
          style="padding-top: 5px; color: #f89b00"
        ></i>
      </div>
    </div>

    <div class="ad-container">
      <div class="ad-container-items">
        <div>
          <img :src="randImg" v-if="isdelay" class="rand-img" />
        </div>
        <div class="rand-text">
          <h1 style="text-align: center">{{ s_name }}</h1>
          <h3 style="text-align: center; margin-bottom: 50px">({{ s_pos }})</h3>
          <h3>: {{ s_exp }}</h3>
        </div>
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
    return {
      searchImg: require("@/assets/fruit_logo.png"),
      searchName: "",
      randImg: "",
      randNum: 0,
      isdelay: false,
      s_name: "",
      s_pos: "",
      s_exp: "",
    };
  },

  methods: {
    setDelay() {
      setTimeout(() => {
        this.isdelay = true;
      }, 500);
    },
    makeRandNum() {
      setTimeout(() => {
        let temp = Math.floor(Math.random() * 10);
        this.randNum = temp % 4;
        if (this.randNum === 0) {
          this.randImg = require("@/imgData/joongmun1.jpg");
          this.s_name = "까망돼지 중문점";
          this.s_pos = "제주 서귀포시 색달중앙로 21 여미지하우스";
          this.s_exp = "명이나물에 싸먹는 흑돼지가 너무나도 맛있는 맛집";
        } else if (this.randNum === 1) {
          this.randImg = require("@/imgData/joongmun2.jpg");
          this.s_name = "중문솥뚜껑";
          this.s_pos = "제주 서귀포시 이어도로 81";
          this.s_exp = "제주도 중문 고깃집 흑돼지 맛집으로 레알 인정할만한곳";
        } else if (this.randNum === 2) {
          this.randImg = require("@/imgData/sungsan1.jpg");
          this.s_name = "일돈성산흑돼지";
          this.s_pos = "제주 서귀포시 성산읍 환해장성로 913";
          this.s_exp = "성산 바다뷰가 보이는 흑돼지 맛집";
        } else {
          this.randImg = require("@/imgData/sungsan2.jpg");
          this.s_name = "엄부랑흑돼지";
          this.s_pos = "제주 서귀포시 성산읍 신양로 81";
          this.s_exp = "성산에서 가장 맛있는 흑돼지 맛집";
        }
        console.log(this.testImg[this.randNum]);
      }, 500);
    },
  },

  created() {
    this.setDelay();
    this.makeRandNum();
  },
};
</script>

<style scoped>
.list-explain {
  position: absolute;
  top: 230px;
  left: 41vw;
  text-align: center;
  width: 400px;
  line-height: 1.7;
}

.search-box {
  position: absolute;
  top: 300px;
  left: 42vw;
}

.search-item {
  width: 330px;
  height: 50px;
  border: 2.5px solid #ff9b09;
  border-radius: 25px;
  margin: 15px;
  display: flex;
}

.search-banner-img,
i {
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

.ad-container {
  position: relative;
  top: 350px;
  left: 29vw;
}

.ad-container-items {
  width: 800px;
  height: 300px;
  background-color: #e6e2df;
  display: flex;
}

.rand-img {
  width: 350px;
  height: 250px;
  margin-top: 25px;
  margin-left: 25px;
}

.rand-text {
  width: 450px;
  height: 250px;
  margin-top: 75px;
  margin-left: 25px;
  line-height: 1.5;
}

@media screen and (min-width: 1860px) {
  .ad-container-items {
    width: 900px;
  }
  .rand-text {
    margin-top: 75px;
    margin-left: 50px;
  }
}

input:focus {
  outline: none;
}
</style>
