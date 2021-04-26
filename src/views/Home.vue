<template>
  <div class="home" v-if="homePageData">
    <div class="header">
      <h4>Детский сад</h4>
      <div class="baby"></div>
      <div class="fix_elems_wrapper">
        <img class="star" src="../assets/img/star.svg" alt="" />
        <img class="vector" src="../assets/img/Vector2.png" alt="" />
        <img class="tick" src="../assets/img/tick.png" alt="" />
        <img class="romb" src="../assets/img/romb.png" alt="" />
      </div>
      <div class="babies"></div>
      <div class="index">
        <h1>ALGABAS</h1>
        <h4>с современной методикой обучения</h4>
        <button @click.self="modalShow" class="main-button">
          Заказать звонок
        </button>
        <img class="click" src="../assets/img/image4.png" alt="" />
      </div>
      <div class="principles">
        <div class="card-command row">
          <div
            class="col-xl-3 col-md-3 col-6"
            v-for="(card, index) in homePageData.numbers"
            :key="index"
          >
            <h4>{{ index + 1 }}</h4>
            <p>{{ card.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <section id="section-one">
      <div class="container">
        <div class="our_principles">
          <div class="title_page">
            <h2><span class="orange_text">Наши</span> преимущества</h2>
          </div>
          <div class="advantages">
            <div class="row">
              <div
                class="one col-xl-3"
                v-for="(card, index) in homePageData.advantages"
                :key="index"
              >
                <img
                  :src="$staticImageUrl.staticImgUrl(card.image)"
                  alt="img"
                />
                <p>{{ card.title }}</p>
              </div>
            </div>
          </div>
          <div class="fixed-items">
            <img class="moon" src="../assets/img/Vector4.png" alt="" />
            <img class="fiveangle" src="../assets/img/fiveangle.png" alt="" />
            <img class="star" src="../assets/img/star.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="section-two">
      <div class="fix_elems">
        <img src="../assets/img/Vector3.png" alt="" />
        <img src="../assets/img/red_vector.svg" alt="" />
        <img src="../assets/img/romb_green.svg" alt="" />
        <img src="../assets/img/tick_yellow_.svg" alt="" />
      </div>
      <div class="wrapper">
        <div class="title mobile">
          <div class="left" v-if="currentId === homePageData.gallery[0].id">
            <h2>Как проходят</h2>
            <h2>занятия</h2>
          </div>
          <div>
            <h2 class="none_mob">и</h2>
          </div>
          <div v-if="currentId === homePageData.gallery[1].id" class="right">
            <h2>Как выглядит</h2>
            <h2>садик</h2>
          </div>
        </div>

        <div class="title desktop">
          <div class="left">
            <h2>Как проходят</h2>
            <h2>занятия</h2>
          </div>
          <div>
            <h2 class="none_mob">и</h2>
          </div>
          <div class="right">
            <h2>Как выглядит</h2>
            <h2>садик</h2>
          </div>
        </div>
        <TabBar :tabs="homePageData.gallery" @currentPage="currentPageData" />
      </div>
      <TabBarContent :active-tab="currentId" :slides="homePageData.gallery" />
      <router-link :to="{ name: 'Gallery' }" class="btn_a main-button"
        >Смотреть все</router-link
      >
    </section>

    <section id="section-three">
      <div class="fix_elems">
        <img src="../assets/img/Vector1.png" alt="" />
        <img src="../assets/img/red_romb.svg" alt="" />
        <img src="../assets/img/blue_vector.svg" alt="" />
        <img src="../assets/img/blue_moon.svg" alt="" />
      </div>
      <div class="title_page">
        <h2>
          <span class="orange_text">Наши</span> группы<span class="orange_text">
            и</span
          >
          цены
        </h2>
      </div>
      <div class="cards">
        <div class="row">
          <div
            v-for="(cardItem, index) in homePageData.groups"
            :key="index"
            class="col-xl-4 col-md-6 col-lg-4 mb-4"
          >
            <Card :cardItem="cardItem" />
          </div>
        </div>
      </div>
    </section>

    <section id="section-four">
      <div class="card_content">
        <div class="fix_elems">
          <img src="../assets/img/blue_star.svg" alt="" />
          <img src="../assets/img/white_wave.svg" alt="" />
          <img src="../assets/img/black_romb.svg" alt="" />
        </div>
        <img
          class="mobile_image"
          :src="$staticImageUrl.staticImgUrl(homePageData.sales.img_block)"
          alt=""
        />
        <div class="container">
          <div class="wrapper">
            <div class="page_title">
              <h1>{{ homePageData.sales.title }}</h1>
              <p>
                {{ homePageData.sales.short_description }}
              </p>
            </div>
            <router-link class="btn_a btn_sales" :to="{ name: 'Sales' }"
              >ПОДРОБНЕЕ</router-link
            >
          </div>
        </div>
        <img
          class="none-image"
          :src="$staticImageUrl.staticImgUrl(homePageData.sales.img_block)"
          alt=""
        />
      </div>
    </section>

    <section id="section-five">
      <div class="fix_elems">
        <img src="../assets/img/red_tick.svg" alt="" />
        <img src="../assets/img/green_star.svg" alt="" />
        <img src="../assets/img/blue_romb.svg" alt="" />
      </div>
      <div class="wrapper">
        <div class="title_page">
          <h2>Наша<span class="orange_text"> команда</span></h2>
        </div>

        <div class="card-command">
          <div v-for="command in homePageData.our_team" :key="command.id">
            <img :src="$staticImageUrl.staticImgUrl(command.avatar)" alt="" />
            <p class="name text-bold">{{ command.name }}</p>
            <p v-if="command.year < 5">Стаж {{ command.year }} года</p>
            <p v-if="command.year > 5">Стаж {{ command.year }} лет</p>
            <p>{{ command.group_name }}</p>
          </div>
        </div>
        <router-link :to="{ name: 'OurTeam' }" class="btn_a main-button"
          >Подробнее</router-link
        >
      </div>
    </section>

    <section id="section-six">
      <div class="fix_elems">
        <img src="../assets/img/blue_wave.svg" alt="" />
        <img src="../assets/img/yellow_romb.svg" alt="" />
        <img src="../assets/img/Vector2.png" alt="" />
        <img src="../assets/img/Vector1.svg" alt="" />
      </div>
      <div class="review_content">
        <div class="container">
          <div class="title_page">
            <h1>Отзывы <span class="orange_text">наших клиентов</span></h1>
          </div>
          <div class="reviews my-4">
            <div class="row">
              <div
                v-for="review in homePageData.review"
                :key="review.key"
                class="col-xl-6"
              >
                <ReviewItem :review="review" />
              </div>
            </div>
          </div>
          <router-link :to="{ name: 'Reviews' }" class="btn_a main-button"
            >Смотреть все</router-link
          >
        </div>
      </div>
    </section>

    <div class="questions">
      <div class="fix_elems">
        <img src="../assets/img/smile_question.png" alt="" />
        <img src="../assets/img/red_tick.svg" alt="" />
        <img src="../assets/img/yello_bigromb.svg" alt="" />
      </div>
      <div class="title_page">
        <h1><span class="orange_text">Вопросы</span>часто задаваемые</h1>
      </div>
      <div class="container">
        <div class="wrapper">
          <div
            class="row row_question"
            v-for="(des, index) in homePageData.question"
            :key="index"
          >
            <div class="question_content col-xl-12 col-12">
              <div class="question_head">
                <p>{{ des.question }}</p>
                <div class="hide_show">
                  <span
                    :class="{ hide_active: q === index }"
                    @click="hideOrShow(index)"
                  ></span>
                </div>
              </div>
              <transition name="slide">
                <div class="question_title" v-if="q === index">
                  <p>
                    {{ des.answer }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="section-seven">
      <div class="fix_elems">
        <img src="../assets/img/tick_yellow_.svg" alt="" />
        <img src="../assets/img/green_moon.svg" alt="" />
      </div>
      <div class="container">
        <div class="form">
          <img
            class="mobile_image"
            src="../assets/img/image-from-rawpixel.png"
            alt="form-img"
          />
          <form>
            <div class="title_page">
              <h2><span class="orange_text">Свяжитесь</span> с нами</h2>
            </div>
            <div class="inputs">
              <input type="text" placeholder="Ваше имя" />
              <the-mask
                :mask="['#(###) ###-####']"
                placeholder="Номер телефона"
              />
              <input type="text" placeholder="Возраст ребенка" />
            </div>
            <button class="main-button">Отправить</button>
          </form>
          <img
            class="none-image"
            src="../assets/img/image-from-rawpixel.png"
            alt="form-img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card";
import ReviewItem from "@/components/ReviewItem";
import TabBar from "@/components/TabBar";
import TabBarContent from "@/components/TabBarContent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    TabBar,
    ReviewItem,
    Card,
    TabBarContent,
  },
  data() {
    return {
      homePageData: null,
      show: false,
      q: 0,
      currentId: "",
      cards: [
        {
          id: "young_group",
          title: "Ягодки",
          image: "Frame16.png",
          description:
            "Nulla placerat mattis nec viverra est integer vestibulum enim. Cursus ipsum ac sagittis vulputate volutpat in massa lectus suspendisse. Eget viverra dignissim gravida cursus porta sagittis.",
          price: "20 000",
        },
        {
          id: "middle_group",
          title: "Солнышко",
          image: "Frame17.png",
          description:
            "Nulla placerat mattis nec viverra est integer vestibulum enim. Cursus ipsum ac sagittis vulputate volutpat in massa lectus suspendisse. Eget viverra dignissim gravida cursus porta sagittis.",
          price: "40 000",
        },
        {
          id: "older_group",
          title: "Звездочки",
          image: "Frame18.png",
          description:
            "Nulla placerat mattis nec viverra est integer vestibulum enim. Cursus ipsum ac sagittis vulputate volutpat in massa lectus suspendisse. Eget viverra dignissim gravida cursus porta sagittis.",
          price: "60 000",
        },
      ],
      count: 0,
    };
  },

  methods: {
    ...mapActions(["GET_MODAL_SHOW"]),
    modalShow() {
      this.GET_MODAL_SHOW();
    },
    currentPageData(current) {
      this.currentId = current;
    },
    hideOrShow(index) {
      if (this.q === index) {
        this.q = null;
      } else {
        this.q = index;
      }
    },
  },

  computed: {
    ...mapGetters(["SHOW_MODAL"]),
  },

  mounted() {
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/home-page?lang=${this.$lang}`
      )
      .then(
        (response) => (
          (this.homePageData = response.data),
          (this.currentId = response.data.gallery[0].id)
        )
      );
  },
};
</script>

<style lang="scss">
@import "src/assets/variables";
@import "src/assets/mixins";

.fix_elems_wrapper {
  img {
    position: absolute;
    &:nth-child(1) {
      top: -15%;
      left: 20%;
    }
    &:nth-child(2) {
      left: 25%;
      top: 5%;
    }
    &:nth-child(3) {
      bottom: 10%;
      left: 10%;
    }

    &:nth-child(4) {
      right: 18%;
      bottom: 20%;
    }
  }
}
.fix_elems img {
  position: absolute;
}
.home {
  text-align: center;
  .header {
    margin-top: 8.75em;
    position: relative;

    .index {
      position: relative;
      z-index: 5;
      padding-bottom: 10px;
      h4 {
        margin-bottom: 50px;
      }

      .click {
        position: absolute;
        right: 40%;
        bottom: -15%;
        animation: click_anim 2s infinite;
      }
    }
    .img:first-child {
      position: absolute;
    }
    h4 {
      font-size: 1.5em;
      font-weight: 700;
    }
    .baby {
      position: absolute;
      width: 100%;
      max-width: 24%;
      height: 100%;
      right: 0;
      top: -120px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position-x: right;
      background-image: url("../assets/img/Frame2.png");
    }
    .babies {
      position: absolute;
      width: 100%;
      max-width: 25%;
      height: 100%;
      left: 0;
      background-size: contain;
      background-position-x: left;
      background-repeat: no-repeat;
      background-image: url("../assets/img/Frame3.png");
    }
    h1 {
      font-family: $font-family-baby;
      color: #ff7948;
      font-size: 4.625em;
      letter-spacing: 5px;
    }
    .principles {
      max-width: 700px;
      margin: 50px auto;
      h4 {
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 400;
        background: #fcd635;
        padding: 5px;
        width: 50px;
        border-radius: 35px;
      }
      p {
        text-align: left;
        font-size: 14px;
      }
    }
  }
  section#section-one {
    position: relative;
    background: #fbf9f5;

    h2 {
      position: relative;
      z-index: 1;
    }

    .our_principles {
      padding: 60px 0;
      max-width: 760px;
      margin: 0 auto;
    }

    .advantages {
      position: relative;
      z-index: 1;
      padding: 50px 0;
      // @include grid(4, 1fr, 760px, 60px, 30px);

      img {
        height: 55px;
      }

      p {
        color: #181818;
        font-weight: 600;
        font-size: 18px;
      }
    }

    .fiveangle {
      position: absolute;
      left: 9%;
      top: 90px;
    }

    .moon {
      position: absolute;
      right: 12%;
      top: 60px;
      z-index: 0;
    }

    .star {
      position: absolute;
      left: 5%;
      bottom: 160px;
    }
  }

  #section-two {
    position: relative;
    background: $background;
    padding-bottom: 50px;

    .fix_elems {
      img {
        &:nth-child(1) {
          top: 5%;
          left: 1%;
        }

        &:nth-child(2) {
          right: 10%;
          top: 2%;
        }

        &:nth-child(3) {
          left: 1%;
          bottom: 20%;
        }

        &:nth-child(4) {
          bottom: 10%;
          right: 2%;
        }
      }
    }

    .wrapper {
      position: relative;
      z-index: 1;
      max-width: 766px;
      margin: 0 auto;
      padding: 50px 0;

      .title {
        @include flexible(auto, 0);
        margin-bottom: 50px;

        h2 {
          font-weight: 600;
          font-size: 3em;
        }

        .left {
          h2:nth-child(2) {
            color: $secondary;
            text-align: right;
          }
        }

        .right {
          h2:last-child {
            text-align: left;
            color: $secondary;
          }
        }
      }
    }
  }
  #section-three {
    background: #fbf9f5;
    padding: 80px 0 130px 0;
    position: relative;
    .fix_elems {
      img {
        &:nth-child(1) {
          top: 9%;
          left: 3%;
        }

        &:nth-child(2) {
          right: 10%;
          top: -8%;
        }

        &:nth-child(3) {
          left: 0;
          bottom: 25%;
        }

        &:nth-child(4) {
          right: 4%;
          bottom: 8%;
        }
      }
    }
    h2 {
      &:nth-child(2) {
        color: #ff7948;
      }
      &:nth-child(4) {
        color: #ff7948;
      }
    }
    .cards {
      margin-top: 50px !important;
      @include flexible(1200px, 10px);
    }
  }
  #section-four {
    .card_content {
      position: relative;
      background: linear-gradient(90deg, #fcd635 0%, #ffed2b 100%);
      padding: 70px 0;

      .fix_elems {
        img {
          position: absolute;

          &:nth-child(1) {
            top: 10%;
            left: 50%;
            z-index: 0;
          }

          &:nth-child(2) {
            top: 25%;
            right: 0 !important;
          }

          &:nth-child(3) {
            bottom: 15%;
            right: 8% !important;
          }
        }
      }

      .wrapper {
        position: relative;
        text-align: left;
        margin-bottom: 50px;
        width: 50%;
        .page_title {
          margin-bottom: 90px;
        }

        h1 {
          font-size: 3em;
          font-weight: 600;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.5em;
          margin-bottom: 20px;
          line-height: 30px;
        }

        .btn_sales {
          padding: 30px 80px;
          background: white;
          color: #181818;
          border: 0;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 18px;
          margin-top: 20px;
          transition: all 0.5s ease;

          &:hover {
            background: #000;
            color: #fff;
          }
        }
      }

      img {
        position: absolute;
        bottom: 0;
      }
    }
  }
  #section-five {
    background: #fbf9f5;
    padding: 60px 0;
    position: relative;
    .fix_elems {
      img {
        &:nth-child(1) {
          left: 1%;
          top: 15%;
        }
        &:nth-child(2) {
          right: 23%;
          top: 8%;
        }
        &:nth-child(3) {
          bottom: 5%;
          left: 20%;
        }
      }
    }
    .wrapper {
      max-width: 1200px;
      margin: 0 auto;
      .card-command {
        margin: 50px 0;
        display: flex;
        justify-content: space-between;

        div {
          max-width: 200px;
          margin: 0 10px;
          img {
            width: 100%;
            border-radius: 50%;
          }
          .name {
            font-size: 24px;
          }

          p {
            font-size: 16px;
            padding: 5px 0;
            color: black;
          }
        }
      }
    }
  }
  #section-six {
    position: relative;
    .container {
      position: relative;
    }
    .fix_elems {
      img {
        &:nth-child(1) {
          left: 2%;
          top: 8%;
        }

        &:nth-child(2) {
          right: 7%;
          top: 1%;
        }

        &:nth-child(3) {
          right: 20%;
          top: 10%;
        }

        &:nth-child(4) {
          bottom: 10%;
          left: 15%;
        }
      }
    }

    .reviews {
      position: relative;
      z-index: 1;
      margin-bottom: 50px !important;
    }

    .wrapper {
      .reviews {
      }
    }
  }
  .review_content {
    padding: 60px 0;
  }
  .questions {
    position: relative;
    background: #fbf9f5;
    padding: 60px 0;
    .fix_elems {
      img {
        &:first-child {
          left: 1%;
        }
        &:nth-child(2) {
          right: 2%;
          top: 4%;
        }
        &:nth-child(3) {
          right: 15%;
        }
      }
    }
    .wrapper {
      margin: 50px 0;
      .row_question {
        margin: 0;
        border-top: 1px solid #ff7948;
        .question_content {
          padding: 16px 0 16px;
          .question_head {
            display: flex;
            align-items: end;
            justify-content: space-between;
            p {
              font-size: 1.5em;
              font-weight: 600;
              margin-bottom: 0;
            }
          }
          .question_title {
            p {
              font-size: 1.2em;
              margin-bottom: 0;
            }
          }
          p {
            text-align: left !important;
          }
        }
        .hide_show {
          padding: 0;
          span {
            float: right;
            display: block;
            background: #ff7948;
            width: 40px;
            height: 40px;
            position: relative;
            border-radius: 50%;
            cursor: pointer;

            &::before {
              content: "";
              width: 20px;
              height: 3px;
              background: white;
              position: absolute;
              top: 48%;
              left: 25%;
              transition: all 0.2s ease;
            }

            &::after {
              content: "";
              width: 20px;
              height: 3px;
              background: white;
              position: absolute;
              top: 48%;
              left: 25%;
              transform: rotate(90deg);
              transition: all 0.2s ease;
            }
          }
          span.hide_active {
            &::before {
              transform: rotate(45deg);
            }

            &::after {
              transform: rotate(135deg);
            }
          }
        }
      }
    }
  }
  #section-seven {
    position: relative;
    .fix_elems {
      img {
        &:nth-child(1) {
          left: 1%;
          bottom: 10%;
        }
        &:nth-child(2) {
          right: 2%;
          top: 0;
        }
      }
    }
    .form {
      position: relative;
      padding: 60px 0;
      form {
        max-width: 600px;
        text-align: center;

        input {
          width: 100%;
          height: 78px;
          padding-left: 25px;
          box-sizing: border-box;
          margin: 15px 0;
          border: 0;
          outline: 0;
          font-size: 24px;

          &::placeholder {
            color: black;
            font-weight: 600;
          }
        }
        .inputs {
          margin-bottom: 30px;
        }
      }
      img {
        position: absolute;
        bottom: 0;
        right: -80px;
      }
    }
  }
  .hide-enter-from {
    visibility: hidden;
    height: 0;
    margin: 0;
    padding-bottom: -16px;
    padding-top: -16px;
    opacity: 0;
    .hide-leave-to {
      padding-bottom: 0;
      padding-top: 0;
      opacity: 1;
      .hide-enter-active {
        transition: all 0.3s ease-in;
        .hide-leave-active {
          transition: all 0.3s ease-out;
        }
      }
    }
  }

  .slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
}

@keyframes click_anim {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5%, 5%);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>