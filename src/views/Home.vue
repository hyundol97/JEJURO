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
      homeLeftImg: require("@/assets/fix_home_l.png"),
      homeRightItem: require("@/assets/home_rr.png"),
      homeRightImg: require("@/assets/fix_home_r.png"),
    };
  },
};
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 22px;
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
  left: 150px;
}

.center-banner {
  width: 360px;
  height: 100%;
  position: absolute;
  z-index: 100;
}

#img-size {
  width: 360px;
  height: 360px;
  object-fit: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 1000px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
}

#home-ll {
  width: 90px;
  height: 90px;
  margin-left: 20px;
}

#home-rr {
  width: 90px;
  height: 90px;
  margin-right: 20px;
}

#home-l {
  width: 500px;
  height: 300px;
  position: absolute;
  bottom: 0px;
  left: 0px;
}

#home-r {
  width: 500px;
  height: 300px;
  position: absolute;
  bottom: 0px;
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
  right: 150px;
  color: white;
}

@media screen and (max-width: 424px) {
  #img-size {
    width: 120px;
    height: 120px;
  }
  .left-text,
  .right-text {
    font-size: 10px;
  }
  .left-text {
    left: 10px;
  }
  .right-text {
    right: 10px;
  }
  .center-banner {
    width: 120px;
  }
  #home-l,
  #home-r {
    width: 120px;
    height: 50px;
  }
  #home-r {
    right: 0px;
  }
  #home-ll,
  #home-rr {
    width: 30px;
    height: 30px;
  }
}

@media screen and (min-width: 424px) and (max-width: 1200px) {
  #img-size {
    width: 300px;
    height: 300px;
  }
  .left-text,
  .right-text {
    font-size: 18px;
  }
  .left-text {
    left: 50px;
  }
  .right-text {
    right: 50px;
  }
  .center-banner {
    width: 300px;
  }
  #home-l,
  #home-r {
    width: 400px;
    height: 250px;
  }
  #home-r {
    right: 0px;
  }
  #home-ll,
  #home-rr {
    width: 45px;
    height: 45px;
  }
}

@media screen and (min-width: 1920px) {
  #img-size {
    width: 450px;
    height: 450px;
  }
  .left-text,
  .right-text {
    font-size: 30px;
  }
  .center-banner {
    width: 450px;
  }
  #home-l,
  #home-r {
    width: 900px;
    height: 400px;
  }
  #home-r {
    right: -150px;
  }
}
</style>
