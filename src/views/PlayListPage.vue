<template>
  <div>
    <page-title
      :pageName="pageName"
      :pageExplain="pageExplain"
      v-show="pageName === 'aaa'"
    ></page-title>
    <div class="map" ref="map"></div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "PlayListPage",

  components: {
    PageTitle,
  },

  data() {
    return {
      pageName: document.URL.substring(
        document.URL.lastIndexOf("/") + 1,
        document.URL.length - 4
      ),
      pageExplain: "About 페이지의 유형B 입니다.",
    };
  },

  mounted() {
    let kakao = window.kakao;
    console.log(this.$refs.map);
    var container = this.$refs.map; //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const mapInstance = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    console.log(mapInstance);
  },
};
</script>

<style>
.map {
  position: absolute;
  left: 30px;
  top: 200px;
  width: 400px;
  height: 400px;
}
</style>
