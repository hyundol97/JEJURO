<template>
  <div v-if="!isClose" class="page-modal">
    <div class="overlay" />
    <div class="modal-item">
      <div class="close-btn">
        <i
          class="far fa-times-circle fa-2x"
          style="color: #f89b00; cursor: pointer"
          @click="closeModal()"
        ></i>
      </div>
      <div style="margin-top: 50px">
        <div>
          <span style="color: #2f9647; width: 10px; height: 10px" />
          <h2 style="display: flex; font-family: 'gmarket-medium'">
            며칠의 일정인가요?
            <p style="font-size: 12px; padding-left: 15px; padding-top: 10px">
              TIP! 중복 체크도 괜찮아요!
            </p>
          </h2>
        </div>
        <div style="display: flex">
          <span
            v-for="(item, idx) in periodItem"
            :key="idx"
            class="modal-items"
            >{{ item }}</span
          >
        </div>
      </div>
      <div style="margin-top: 50px">
        <h2 style="font-family: 'gmarket-medium'">
          원하는 분위기를 마음껏 선택해 보세요!
        </h2>
        <div style="margin-top: 10px; line-height: 40px">
          <span
            v-for="(item, idx) in selectItem"
            :key="idx"
            class="modal-items"
            >{{ item }}</span
          >
        </div>
      </div>
      <div id="ok-btn">
        <v-btn color="black" class="ma-2 white--text" @click="goToPlaylist()"
          >{{ count }}개의 플레이리스트 보러가기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  name: "PageModal",
  data() {
    return {
      periodItem: [
        "당일치기",
        "1박 2일",
        "2박 3일",
        "3박 4일",
        "4박 5일",
        "5박 6일",
        "그 이상",
      ],
      selectItem: [
        "#힐링",
        "#조용한",
        "#쉴틈없는",
        "#계획적인",
        "#액티비티",
        "#올레길정복",
        "#뚜벅이",
        "#자연친화적",
        "#동에번쩍서에번쩍",
        "#맛집위주",
        "#서핑",
        "#게스트하우스",
        "#무계획이계획",
        "#시끌벅적",
        "#한라산",
        "#일출",
        "#감성카페",
        "#나만알고싶은",
        "#독특한",
        "#핫플",
        "#해변",
      ],
      count: 23,
      isClose: false,
    };
  },
  methods: {
    closeModal() {
      this.isClose = !this.isClose;
      this.$store.state.isClick = false;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "gmarket-medium";
  src: url("../assets/GmarketSansMedium.otf") format("truetype");
}
.page-modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.overlay {
  opacity: 0.7;
  background-color: #000000;
}

.modal-item {
  position: absolute;
  max-width: 70%;
  margin-left: 15vw;
  margin-top: 15vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #ffffff;
  min-height: 550px;
  z-index: 100;
  opacity: 1;
  border-radius: 25px;
}

.modal-items {
  border: 1.5px solid #ff9b09;
  border-radius: 25px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 15px;
}

.close-btn {
  text-align: right;
}

#ok-btn {
  margin-top: 50px;
  margin-left: 40%;
}
</style>
