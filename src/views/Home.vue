<template>
  <div>
    <home-header-layout />
    <div class="home">
      <router-link to="/PlayListPage">
        <div class="left-banner">
          <div class="left-text">
            <h1>꼭맞는<img :src="homeLeftItem" id="home-ll" /></h1>
            <h1>플레이리스트</h1>
            <h1>재생하기</h1>
          </div>
          <img :src="homeLeftImg" id="home-l" />
        </div>
      </router-link>
      <div class="center-banner">
        <img :src="mainLogo" id="img-size" />
        <hr
          style="
            width: 5px;
            height: 75vh;
            position: absolute;
            top: 10vh;
            left: 10vw;
            z-index: -1;
            background-color: white;
            opacity: 0.3;
            border: none;
          "
        />
      </div>
      <router-link to="/MakeListPage">
        <div class="right-banner">
          <div class="right-text">
            <h1><img :src="homeRightItem" id="home-rr" />나만의</h1>
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
  display: flex;
  justify-content: center;
  font-size: 24px;
}

.left-banner {
  width: 50vw;
  height: calc(100vh - 90px);
  background-color: #ff9b09;
  padding: 5px;
}

.left-text {
  text-align: left;
  position: absolute;
  color: white;
  top: 20vh;
  left: 100px;
}

.center-banner {
  width: 320px;
  height: 320px;
  position: absolute;
  border-radius: 1000px;
  z-index: 100;
}

#img-size {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 20vh;
  border-radius: 1000px;
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
  bottom: 10vh;
  left: 5vw;
}

#home-r {
  width: 500px;
  height: 500px;
  position: absolute;
  bottom: 10vh;
  right: 5vw;
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
  top: 20vh;
  right: 100px;
  color: white;
}

@media screen and (max-width: 600px) {
  .center-banner {
    width: 200px;
    height: 200px;
  }
  .left-text,
  .right-text {
    font-size: 10px;
  }
}

@media screen and (max-width: 720px) {
  .center-banner {
    width: 200px;
    height: 200px;
  }
  .left-text,
  .right-text {
    font-size: 12px;
  }
}
@media screen and (min-width: 1600px) {
  .center-banner {
    width: 400px;
    height: 400px;
  }
  .left-text,
  .right-text {
    font-size: 28px;
  }
}
</style>
