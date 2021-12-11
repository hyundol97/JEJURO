<template>
  <div class="play-list-page">
    <div>
      <header-layout />
    </div>
    <div class="search-filter">
      <span class="filter-item" @click="isClick = true">
        <i
          class="fas fa-hashtag"
          style="
            color: Tomato;
            margin-top: 4px;
            padding-right: 10px;
            padding-left: 2px;
          "
        >
        </i>
        <p style="color: Black; margin-bottom: -16px">
          어떤 여행을 떠날 건가요?
        </p>
        <i
          class="fas fa-chevron-down"
          style="color: Tomato; margin-top: 7px; margin-left: 15px"
        ></i>
      </span>
    </div>
    <div class="main-contents">
      <div class="map" ref="map"></div>
      <div class="data-box"></div>
    </div>
    <page-modal v-if="isClick" style="z-index: 1000"></page-modal>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import HeaderLayout from "../layout/HeaderLayout.vue";
import PageModal from "../components/PageModal.vue";
export default {
  name: "PlayListPage",

  components: {
    HeaderLayout,
    PageModal,
  },

  data() {
    return {
      pageName: document.URL.substring(
        document.URL.lastIndexOf("/") + 1,
        document.URL.length - 4
      ),
      pageExplain: "About 페이지의 유형B 입니다.",
      items: ["foo", "bar", "fizz", "buzz"],
      values: ["foo", "bar"],
      value: null,
      isClick: false,
    };
  },

  methods: {},

  mounted() {
    let kakao = window.kakao;
    console.log(this.$refs.map);
    var container = this.$refs.map; //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 10, //지도의 레벨(확대, 축소 정도)
    };

    const mapInstance = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    console.log(mapInstance);
  },
};
</script>

<style scoped>
.play-list-page {
  display: block;
  width: 100%;
  height: 100%;
}

.search-filter {
  margin-top: 30px;
  margin-left: 75px;
}

.filter-item {
  display: inline-flex;
  border-radius: 50px;
  width: 320px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ff9b09;
  cursor: pointer;
}

.main-contents {
  margin-top: 30px;
  display: inline-flex;
  margin-left: 75px;
}

.map {
  width: 800px;
  height: 400px;
}

.data-box {
  width: 480px;
  height: 400px;
  margin-left: 100px;
  background-color: darkgrey;
}

@media screen and (min-width: 1600px) {
  .map {
    width: 1050px;
    height: 500px;
  }
  .data-box {
    width: 600px;
    height: 500px;
    margin-left: 100px;
  }
}
</style>
