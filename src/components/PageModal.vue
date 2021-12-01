<template>
  <div class="page-modal">
    <div class="overlay" />
    <div class="modal-item">
      <div class="close-btn">
        <i
          class="far fa-times-circle fa-2x"
          style="color: Tomato"
          @click="closeModal()"
        ></i>
      </div>
      <div style="margin-top: 50px">
        <div>
          <h3 style="display: flex">
            며칠의 일정인가요?
            <p style="font-size: 10px; padding-left: 15px; padding-top: 5px">
              TIP! 중복 체크도 괜찮아요!
            </p>
          </h3>
        </div>
        <div style="display: flex">
          <span>당일치기</span>
          <span>1박 2일</span>
          <span>2박 3일</span>
          <span>3박 4일</span>
          <span>4박 5일</span>
          <span>5박 6일</span>
          <span>그 이상</span>
        </div>
      </div>
      <div style="margin-top: 50px">
        <h3>원하는 분위기를 마음껏 선택해 보세요!</h3>
        <div style="margin-top: 10px; line-height: 40px">
          <span>#힐링</span>
          <span>#조용한</span>
          <span>#쉴틈없는</span>
          <span>#계획적인</span>
          <span>#액티비티</span>
          <span>#올레길정복</span>
          <span>#뚜벅이</span>
          <span>#자연친화적</span>
          <span>#동에번쩍서에번쩍</span>
          <span>#맛집위주</span>
          <span>#서핑</span>
          <span>#게스트하우스</span>
          <span>#무계획이계획</span>
          <span>#시끌벅적</span>
          <span>#한라산</span>
          <span>#일출</span>
          <span>#감성카페</span>
          <span>#나만알고싶은</span>
          <span>#독특한</span>
          <span>#핫플</span>
          <span>#해변</span>
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
      count: 3,
    };
  },
};
</script>

<style scoped>
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

.modal-item span {
  border: 1.5px solid orange;
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
  margin-left: 450px;
}
</style>
