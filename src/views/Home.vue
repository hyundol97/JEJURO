<template>
  <div>
    <home-header-layout />
    <div class="home">
      <router-link to="/PlayListPage">
        <div class="left-banner">
          <div class="left-text">
            <h1 class="icon-text-wrapper">
              꼭맞는<img :src="homeLeftItem" id="home-ll" />
            </h1>
            <h1>플레이리스트</h1>
            <h1>재생하기</h1>
          </div>
          <img :src="homeLeftImg" id="home-l" />
        </div>
      </router-link>
      <div class="center-banner">
        <hr
          style="
            width: 5px;
            height: 90%;
            margin-top: 10%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
            background-color: white;
            opacity: 0.3;
            border: none;
          "
        />
        <img :src="mainLogo" id="img-size" />
      </div>
      <router-link to="/MakeListPage">
        <div class="right-banner">
          <div class="right-text">
            <h1 class="icon-text-wrapper">
              <img :src="homeRightItem" id="home-rr" />나만의
            </h1>
            <h1>재생목록</h1>
            <h1>만들기</h1>
          </div>
          <img :src="homeRightImg" id="home-r" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import HomeHeaderLayout from "../layout/HomeHeaderLayout.vue";
export default {
  name: "Home",

  components: { HomeHeaderLayout },

  data() {
    return {
      mainLogo: require("@/assets/logo_nb_w.png"),
      homeLeftItem: require("@/assets/home_ll.png"),
      homeLeftImg: require("@/assets/home_l.png"),
      homeRightItem: require("@/assets/home_rr.png"),
      homeRightImg: require("@/assets/home_r.png"),
    };
  },
};
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 24px;
  line-height: 1.8;
  overflow: hidden;
}

.left-banner {
  width: 50vw;
  height: calc(100vh - 90px);
  background-color: #ff9b09;
  padding: 5px;
}

.icon-text-wrapper {
  display: flex;
  align-items: center;
}

.left-text {
  text-align: left;
  position: absolute;
  color: white;
  top: 20%;
  left: 100px;
}

.center-banner {
  width: 320px;
  height: 100%;
  position: absolute;
  z-index: 100;
}

#img-size {
  width: 320px;
  height: 320px;
  object-fit: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 1000px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
}

#home-ll {
  width: 50px;
  height: 50px;
  margin-left: 20px;
}

#home-rr {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

#home-l {
  width: 500px;
  height: 500px;
  position: absolute;
  bottom: -100px;
  left: 30px;
}

#home-r {
  width: 500px;
  height: 500px;
  position: absolute;
  bottom: -100px;
  right: -100px;
}

.right-banner {
  width: 50vw;
  height: calc(100vh - 90px);
  background-color: #ff9b09;
  padding: 5px;
}

.right-text {
  text-align: right;
  position: absolute;
  top: 20%;
  right: 100px;
  color: white;
}

@media screen and (max-width: 424px) {
  #img-size {
    width: 200px;
    height: 200px;
  }
  .left-text,
  .right-text {
    font-size: 10px;
  }
}
</style>
