<template>
  <div v-if="ourTeamPageData">
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img src="@/assets/img/owrTeam.png" alt="" />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1>
                <span class="orange_text">Сотрудники</span>
                {{ ourTeamPageData.page.title }}
              </h1>
            </div>
            <div class="description_text mt-4">
              <p>
                {{ ourTeamPageData.page.description }}
              </p>
            </div>
            <div class="socials">
              <a href="#">
                <img src="@/assets/img/wp_icon.png" alt="" />
              </a>
              <a href="#">
                <img src="@/assets/img/tg_icon.svg" alt="" />
              </a>
              <a href="#">
                <img src="@/assets/img/inst_icon.svg" alt="" />
              </a>
              <a href="#">
                <img src="@/assets/img/face_icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="our_team">
      <div class="fix_elems">
        <img src="../assets/img/red_tick.svg" alt="" />
        <img src="../assets/img/blue_romb.svg" alt="" />
        <img src="../assets/img/green_star.svg" alt="" />
      </div>
      <div class="title_page">
        <h2>Наша <span class="orange_text">команда</span></h2>
      </div>
      <div class="our_team_content">
        <div class="container">
          <div class="wrapper">
            <div class="card-command row">
              <div
                v-for="(card, index) in ourTeamPageData.our_team"
                class="col-xl-3 col-md-6 col-lg-4 card_team"
                :key="index"
                @click="teamInfo(card)"
              >
                <img :src="$staticImageUrl.staticImgUrl(card.image)" alt="" />
                <p class="name text-bold">{{ card.name }}</p>
                <p>Стаж {{ card.year }} года</p>
                <p>{{ card.group_name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="main-button m-auto d-block">Подробнее</button>
    </div>
    <div class="bg" v-if="modalTeam"></div>
    <transition name="review">
      <div
        class="team_modal_wrapper"
        v-if="modalTeam"
        @click.self="modalTeam = null"
      >
        <span class="close"
          ><img
            src="@/assets/img/close.svg"
            alt=""
            class="close_modal"
            @click="modalTeam = false"
        /></span>
        <div class="team_modal">
          <img :src="$staticImageUrl.staticImgUrl(modalTeam.image)" alt="" />
          <div class="team_modal_content">
            <div class="team_modal_title">
              <h4>{{ modalTeam.name }}</h4>
              <p>Стаж {{ modalTeam.year }} года</p>
              <p>{{ modalTeam.group_name }}</p>
            </div>
            <div class="team_modal_text">
              <span v-html="modalTeam.content"></span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    modalTeam: null,
    ourTeamPageData: null,
  }),

  methods: {
    teamInfo(card) {
      this.modalTeam = card;
    },
  },

  mounted() {
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/our-team?lang=${this.$lang}`
      )
      .then((response) => (this.ourTeamPageData = response.data));
  },

  updated() {
    if (this.modalTeam !== null) {
      document.body.style.overflowY = "hidden";
    }
    if (!this.modalTeam){
      document.body.style.overflowY = "auto";
    }
  },

};
</script>

<style lang="scss">
.close{
  opacity: 1 !important;
}
.our_team {
  position: relative;
  padding: 120px 0;
  background-color: #fff;
  .fix_elems {
    img {
      &:nth-child(1) {
        left: 0;
        top: 10%;
      }
      &:nth-child(2) {
        left: 2%;
        top: 55%;
      }
      &:nth-child(3) {
        right: 20%;
        top: 5%;
      }
    }
  }
  .our_team_content {
    margin: 80px 0 50px;
  }
  .card_team {
    text-align: center;
    margin-bottom: 50px;
    cursor: pointer;
    .text-bold {
      font-weight: 600;
      font-size: 24px;
    }
    img {
      max-width: 200px;
      max-height: 200px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      margin-bottom: 30px;
    }
  }
}
.team_modal_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 89888;
  .close {
    position: fixed;
    right: 5%;
    top: 5%;
    cursor: pointer;
  }
}
.team_modal {
  position: relative;
  background-color: #fff;
  max-width: 50%;
  width: 100%;
  img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
  }
  .team_modal_title {
    text-align: center;
  }
  .team_modal_content {
    padding: 50px;
  }
  .team_modal_text {
    margin-top: 50px;
  }
}

@media screen and (max-width: 768px) {
  .our_team {
    padding: 60px 0;
  }
  .team_modal {
    max-width: 90%;
  }
  .team_modal_wrapper {
    .close {
      top: 2%;
      z-index: 9;
    }
  }
  .our_team_content {
    margin: 30px 0 !important;
  }
}
</style>