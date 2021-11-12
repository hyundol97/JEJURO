<template>
  <div class="home">
    <router-link to="/PlayListPage">
      <div class="left-banner">
        <div class="left-text">
          <h1>꼭맞는</h1>
          <h1>플레이리스트</h1>
          <h1>재생하기</h1>
        </div>
      </div>
    </router-link>
    <div class="center-banner">
      <img :src="mainLogo" id="img-size">
    
    </div>
    <router-link to="/MakeListPage">
      <div class="right-banner">
        <div class="right-text">
          <h1>나만의</h1>
          <h1>재생목록</h1>
          <h1>만들기</h1>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
  },

  data () {
    return {
      mainLogo: require("@/assets/logo_nb.png")
    }
  }

}
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }

  .left-banner {
    width: 50vw;
    height: 100vh;
    background-color: #FFDDCC;
    padding: 5px;
  }

  .left-text {
    text-align: left;
    position: absolute;
    top: 30vh;
    left: 10px;
  }

  .center-banner {
    width: 400px;
    height: 400px;
    position: absolute;
    border-radius: 1000px;
  }
  
  #img-size {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1000px;
  }

   @media screen and (max-width: 600px) {
    .center-banner {
      width: 200px;
      height: 200px;
    }
    .left-text, .right-text {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 720px) {
    .center-banner {
      width: 200px;
      height: 200px;
    }
    .left-text, .right-text {
      font-size: 12px;
    }
  }
   @media screen and (min-width: 1500px) {
    .center-banner {
      width: 600px;
      height: 600px;
    }
    .left-text, .right-text {
      font-size: 32px;
    }
  }

   .right-banner {
    width: 50vw;
    height: 100vh;
    background-color: whitesmoke;
    padding: 5px;
  }

   .right-text {
    text-align: right;
    position: absolute;
    top: 30vh;
    right: 10px;
   }
</style>
