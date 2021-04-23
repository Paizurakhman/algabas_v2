<template>
  <div class="home">
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
        <button class="main-button">Заказать звонок</button>
        <img class="click" src="../assets/img/image4.png" alt="" />
      </div>
      <div class="principles">
        <div class="card-command row">
          <div class="col-xl-3 col-md-3 col-6">
            <h4>1</h4>
            <p>развивающее пространство для детей от 1 до 6 лет</p>
          </div>
          <div class="col-xl-3 col-md-3 col-6 card_team">
            <h4>2</h4>
            <p>от 1 до 2 лет от 2 до 3 лет от 4 до 6 лет</p>
          </div>
          <div class="col-xl-3 col-md-3 col-6 card_team">
            <h4>3</h4>
            <p>Количество детей: до 10 в одну группу</p>
          </div>
          <div class="col-xl-3 col-md-3 col-6 card_team">
            <h4>4</h4>
            <p>Уникальная методика обучения</p>
          </div>
        </div>
      </div>
    </div>
    <section id="section-one">
      <div class="our_principles">
        <div class="title_page">
          <h2><span class="orange_text">Наши</span> преимущества</h2>
        </div>
        <div class="advantages">
          <div class="one">
            <img src="../assets/icons/1.png" alt="img" />
            <p>Увлекательные мероприятия</p>
          </div>
          <div class="two">
            <img src="../assets/icons/2.png" alt="img" />
            <p>Вкусная и полезная еда</p>
          </div>
          <div class="three">
            <img src="../assets/icons/3.png" alt="img" />
            <p>Защищаем и оберегаем</p>
          </div>
          <div class="four">
            <img src="../assets/icons/4.png" alt="img" />
            <p>Проффесиональные педагоги</p>
          </div>
          <div class="five">
            <img src="../assets/icons/5.png" alt="img" />
            <p>Креативное развитие</p>
          </div>
          <div class="six">
            <img src="../assets/icons/6.png" alt="img" />
            <p>Камеры наблюдения</p>
          </div>
          <div class="seven">
            <img src="../assets/icons/7.png" alt="img" />
            <p>Современные методы</p>
          </div>
          <div class="eight">
            <img src="../assets/icons/8.png" alt="img" />
            <p>
              Развитая <br />
              медицина
            </p>
          </div>
        </div>
        <div class="fixed-items">
          <img class="moon" src="../assets/img/Vector4.png" alt="" />
          <img class="fiveangle" src="../assets/img/fiveangle.png" alt="" />
          <img class="star" src="../assets/img/star.svg" alt="" />
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
          <div class="left" v-if="current === 'lessons'">
            <h2>Как проходят</h2>
            <h2>занятия</h2>
          </div>
          <div>
            <h2 class="none_mob">и</h2>
          </div>
          <div v-if="current === 'garden'" class="right">
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
        <TabBar @tabChange="current = $event" :current="current" />
      </div>
      <div class="slider" v-if="current === 'lessons'">
        <button class="main-button">Смотреть все</button>
        <VueSlickCarousel ref="c1" :asNavFor="$refs.c2">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </VueSlickCarousel>
        <VueSlickCarousel
          ref="c2"
          :asNavFor="$refs.c1"
          :slidesToShow="4"
          :focusOnSelect="true"
        >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </VueSlickCarousel>
      </div>
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
        <div v-for="cardItem in cards">
          <Card :card-item="cardItem" />
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
          src="../assets/frames/girl-removebg-preview.png"
          alt=""
        />
        <div class="container">
          <div class="wrapper">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet. <br />
              * lorem ipsum dolor sti amet
            </p>
            <p>Цена - 8 000 тг.</p>
            <button>ПОДРОБНЕЕ</button>
          </div>
        </div>
        <img
          class="none-image"
          src="../assets/frames/girl-removebg-preview.png"
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
          <div v-for="command in 4" :key="command">
            <img src="../assets/img/image22.png" alt="" />
            <p class="name text-bold">Анастасия</p>
            <p>Стаж 3 года</p>
            <p>Младшая группа</p>
          </div>
        </div>
        <button class="main-button">Подробнее</button>
      </div>
    </section>

    <section id="section-six">
      <div class="fix_elems">
        <img src="../assets/img/blue_wave.svg" alt="" />
        <img src="../assets/img/yellow_romb.svg" alt="" />
        <img src="../assets/img/Vector2.png" alt="" />
        <img src="../assets/img/Vector1.svg" alt="" />
      </div>
      <div class="wrapper">
        <h1 class="main-heading">Отзывы</h1>
        <h1 class="main-heading block">наших клиентов</h1>
        <div class="reviews">
          <div v-for="review in reviews">
            <ReviewItem :review="review" />
          </div>
        </div>
        <button class="main-button">Смотреть все</button>
      </div>
    </section>

    <div class="questions">
      <div class="title_page">
        <h1><span class="orange_text">Вопросы</span>часто задаваемые</h1>
      </div>
      <div class="container">
        <div class="wrapper">
          <div class="row row_question" v-for="(des, index) in 4" :key="index">
            <div class="question_content col-xl-10">
              <div class="question_head">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
              </div>
              <transition name="hide">
                <div class="question_title" v-if="q === index">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </transition>
            </div>
            <div class="hide_show col-xl-2">
              <span
                :class="{ hide_active: q === index }"
                @click="hideOrShow(index)"
              ></span>
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
              <h2><span class="orange_text">Свяжитесь</span>с нами</h2>
            </div>
            <div class="inputs">
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Номер телефона" />
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Home",
  components: {
    TabBar,
    ReviewItem,
    Card,
    VueSlickCarousel,
  },
  data() {
    return {
      current: "lessons",
      show: false,
      q: 0,
      slides: [
        { id: 1, src: require("@/assets/img/slider_img.png") },
        { id: 2, src: require("@/assets/img/slider_img.png") },
        { id: 3, src: require("@/assets/img/slider_img.png") },
        { id: 4, src: require("@/assets/img/slider_img.png") },
        { id: 5, src: require("@/assets/img/slider_img.png") },
      ],
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
      reviews: [
        {
          id: 1,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem convallis lacinia diam lorem nullam auctor. Ac, sed semper risus, non felis, non quis potenti tincidunt. Netus vel varius mattis nunc aliquam. Amet in elit diam amet. ",
        },
        {
          id: 2,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem convallis lacinia diam lorem nullam auctor. Ac, sed semper risus, non felis, non quis potenti tincidunt. Netus vel varius mattis nunc aliquam. Amet in elit diam amet. Lorem convallis lacinia diam lorem nullam auctor. Ac, sed semper risus, non felis, non quis potenti tincidunt.",
        },
        {
          id: 3,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem convallis lacinia diam lorem nullam auctor. Ac, sed semper risus, non felis, non quis potenti tincidunt. Netus vel varius mattis nunc aliquam. Amet in elit diam amet. Lorem convallis lacinia diam lorem nullam auctor. Ac, sed semper risus, non felis, non quis potenti tincidunt.",
        },
        {
          id: 4,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem convallis lacinia diam lorem nullam auctor. Ac, sed semper risus, non felis, non quis potenti tincidunt. Netus vel varius mattis nunc aliquam. Amet in elit diam amet. ",
        },
      ],
      count: 0,
      // settingsSliderNav: {
      //   slidesToShow: 4,
      //   focusOnSelect: true,
      //   responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         centerMode: true,
      //       },
      //     },
      //     {
      //       breakpoint: 1000,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 1,
      //       },
      //     },
      //   ],
      // },
    };
  },
  computed: {
    tabNav() {
      if (this.current === "lessons") {
        return "Lessons";
      }
      if (this.current === "garden") {
        return "Garden";
      }
    },
  },

  methods: {
    hideOrShow(index) {
      if (this.q === index) {
        this.q = null;
      } else {
        this.q = index;
      }
    },
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
      z-index: 9;
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
    }

    .advantages {
      position: relative;
      z-index: 1;
      padding: 50px 0;
      @include grid(4, 1fr, 760px, 60px, 30px);

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
        width: 40%;

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

        button {
          width: 260px;
          height: 80px;
          background: white;
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
        right: 6%;
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
    padding: 50px 0;
    position: relative;

    .reviews {
      position: relative;
      z-index: 1;

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
    }

    .wrapper {
      h1 {
        margin-bottom: 100px;
      }

      .reviews {
        @include grid(2, 1fr, 1200px, 10px, 50px);
      }
    }
  }
  .questions {
    background: #fbf9f5;
    padding: 60px 0;
    .wrapper {
      margin: 50px 0;
      .row_question {
        border-top: 1px solid #ff7948;
        .question_content {
          padding: 0;
          .question_head {
            p {
              font-size: 24px;
            }
          }
          .question_title {
            p {
              font-size: 18px;
            }
          }
          p {
            text-align: left !important;
            margin: 16px 0;
          }
        }
        .hide_show {
          span {
            margin: 16px 0;
            display: block;
            background: #ff7948;
            width: 50px;
            height: 50px;
            position: relative;
            border-radius: 50%;
            cursor: pointer;

            &::before {
              content: "";
              width: 30px;
              height: 3px;
              background: white;
              position: absolute;
              top: 48%;
              left: 20%;
              transition: all 0.2s ease;
            }

            &::after {
              content: "";
              width: 30px;
              height: 3px;
              background: white;
              position: absolute;
              top: 48%;
              left: 20%;
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
      padding: 40px 0;
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

          .inputs {
            margin-bottom: 30px;
          }
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