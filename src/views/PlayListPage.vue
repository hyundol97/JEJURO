<template>
  <div class="play-list-page">
    <div>
      <header-layout />
    </div>
    <div class="search-filter">
      <span class="filter-item" @click="showModal()">
        <i
          class="fas fa-hashtag"
          style="
            color: #f89b00;
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
          style="color: #f89b00; margin-top: 7px; margin-left: 15px"
        ></i>
      </span>
    </div>
    <div class="main-contents">
      <div class="map" ref="map"></div>
      <div class="data-box">
        <div class="table-box">
          <span v-for="(item, idx) in lists" :key="idx" @click="showBtn()">
            <p>{{ item.name }}</p>
            <p style="font-size: 0.7em; margin-bottom: -5px">
              {{ item.calories }}
            </p>
          </span>
        </div>
      </div>
    </div>
    <div class="btn-box">
      <v-btn
        v-if="isShow"
        color="black"
        class="ma-2 white--text"
        @click="goToList()"
        width="500px"
        style="border-radius: 30px"
        >이 리스트가 맘에 들어요!</v-btn
      >
    </div>
    <page-modal
      v-if="this.$store.state.isClick"
      style="z-index: 1000"
    ></page-modal>
    <div>
      <v-snackbar v-if="isSave" :timeout="timeout">
        {{ text }}
      </v-snackbar>
    </div>
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
      items: ["foo", "bar", "fizz", "buzz"],
      values: ["foo", "bar"],
      value: null,
      isClick: false,
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          value: "name",
        },
        { text: "Calories", value: "calories" },
      ],
      lists: [
        {
          name: "[Playlist] 뚜벅이지만 보고싶은게 너무 많은 걸(제주도대중교통정복코스)",
          calories: "트러블메이커",
        },
        {
          name: "[Playlist] 현생에 지친 삶을 위로 받고 싶어_여유로운힐링여행코스",
          calories: "여행에미쳤다",
        },
        {
          name: "[Playlist] 저는 제주도에 먹방 찍으러 왔는데요? (밥배디저트배따로인거알지)",
          calories: "관광객1",
        },
        {
          name: "[Playlist] 식물을 좋아하는 엄마 모시고 제주 여행",
          calories: "제주도러버",
        },
        {
          name: "[Playlist] 낮은 건물 사이로 보이는 제주도의 예쁜 하늘 #드라이브맛집",
          calories: "붕붕이",
        },
        {
          name: "[Playlist] 아무 생각 안하고 싶을 때 떠나는 제주",
          calories: "무념무상",
        },
        {
          name: "[Playlist] SNS에 자주 올라오는 거긴 어디야? (제주도유명카페투어)",
          calories: "카페24",
        },
      ],
      isShow: false,
      isSave: false,
      text: "My timeout is set to 2000.",
      timeout: 2000,
    };
  },

  methods: {
    showBtn() {
      this.isShow = true;
    },
    goToList() {
      alert("내 리스트에 저장되었습니다!");
      this.isSave = true;
      this.isShow = false;
    },
    showModal() {
      this.$store.commit("setIsClick", true);
    },
  },

  mounted() {
    let kakao = window.kakao;
    var container = this.$refs.map; //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.36701, 126.570667), //지도의 중심좌표.
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
  height: 500px;
  border: 2px solid black;
}

.data-box {
  width: 480px;
  height: 400px;
  margin-left: 100px;
}

.table-box {
  line-height: 1.5;
  font-size: 24px;
  background-color: white;
  display: grid;
  height: 500px;
  overflow-y: auto;
  border: 2px solid black;
  border-radius: 15px;
}

.table-box span {
  padding: 20px;
  border-bottom: 1px solid black;
}

.table-box span:hover {
  box-shadow: inset 0 0 0 100px rgba(216, 213, 213, 0.6);
  cursor: pointer;
}

.btn-box {
  position: relative;
  top: 20px;
  left: 1070px;
}

@media screen and (min-width: 1600px) {
  .map {
    width: 850px;
    height: 500px;
  }
  .data-box {
    width: 500px;
    height: 500px;
    margin-left: 150px;
  }
}

@media screen and (min-width: 1920px) {
  .map {
    width: 1150px;
    height: 750px;
  }
  .data-box {
    width: 600px;
    height: 750px;
    margin-left: 150px;
  }
}
</style>
