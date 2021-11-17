<template>
  <div>
    <div class="search-filter">
      <span class="filter-contents">
        <i
          class="fas fa-hashtag"
          style="color: Tomato; margin-top: 4px; margin-right: 7px"
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
      <page-title
        :pageName="pageName"
        :pageExplain="pageExplain"
        v-show="pageName === 'aaa'"
      ></page-title>
      <div class="map" ref="map"></div>
      <div class="data-box"></div>
    </div>
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
      items: ["foo", "bar", "fizz", "buzz"],
      values: ["foo", "bar"],
      value: null,
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
.search-filter {
  margin-top: 100px;
  margin-left: 100px;
  border-radius: 50px;
  width: 400px;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  border: 1px solid orange;
}

.filter-contents {
  display: inline-flex;
}

.main-contents {
  display: flex;
  justify-content: center;
  align-items: center;
}

.map {
  margin-top: 50px;
  width: 1000px;
  height: 600px;
}

.data-box {
  margin-top: 50px;
  width: 600px;
  height: 600px;
  margin-left: 100px;
  background-color: blue;
}
</style>
