<template>
  <div v-if="salesPageData">
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-6 col-md-6 position-static">
            <div class="page_main_img">
              <img src="@/assets/img/sales_img.png" alt="" />
            </div>
          </div>
          <div class="col-xl-6 col-md-6">
            <div class="title_page">
              <h1>
                <span class="orange_text">Акции</span> {{ salesPageData.page.title }}
              </h1>
            </div>
            <div class="description_text mt-4">
              <span v-html="salesPageData.page.description">
              </span>
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
    <div class="sales_content">
      <div
        class="sales_card left_card" v-random
        v-for="(card, index) in salesPageData.sales"
        :key="index"
      >
        <svg
          class="wave"
          width="420"
          height="229"
          viewBox="0 0 420 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.93766 137.143C-1.74828 140.909 0.204195 151.263 1.76617 155.97C2.15667 163.815 7.38929 175.268 25.1958 158.323C47.454 137.143 38.0821 148.91 45.111 155.97C52.1399 163.03 35.7392 210.097 87.2844 211.274C138.83 212.451 136.487 171.267 173.974 145.38C211.462 119.493 191.546 140.673 203.261 174.797C214.976 208.921 227.862 226.571 280.579 228.924C333.296 231.278 363.754 178.327 407.099 132.436C450.444 86.5457 448.101 57.1286 452.787 48.8918C457.473 40.655 453.959 19.4747 449.273 12.4146C444.587 5.35454 438.729 7.7079 435.215 7.7079C431.701 7.7079 430.529 5.35476 422.329 0.648029C414.128 -4.0587 393.042 18.2983 390.699 21.8283C388.356 25.3584 387.184 21.8283 380.155 23.005C373.126 24.1817 341.496 52.4221 337.982 55.9522C334.467 59.4823 333.296 58.3055 328.61 58.3055C324.861 58.3055 312.209 70.8568 306.352 77.1324C302.056 81.0547 292.294 89.1346 287.608 90.0759C281.751 91.2526 268.864 113.61 258.321 114.786C247.778 115.963 253.635 84.1925 252.464 73.6024C251.292 63.0122 241.92 59.4822 227.862 55.9522C213.805 52.4221 204.433 63.0123 198.575 66.5423C192.718 70.0724 192.718 68.8956 185.689 68.8956C178.66 68.8956 178.66 78.3091 173.974 79.4858C169.288 80.6625 165.774 84.1926 161.088 91.2526C156.402 98.3126 155.23 95.9594 147.03 98.3128C140.47 100.195 121.648 120.277 113.057 130.083C108.371 136.751 99.4679 142.321 101.342 111.256C103.217 80.1918 92.7514 70.0723 87.2844 68.8956C84.9415 68.5034 77.9126 68.1896 68.5407 70.0723C56.8259 72.4256 48.6255 86.5458 40.4251 91.2526C33.8648 95.018 18.1669 122.631 11.138 135.966C10.357 134.79 7.62359 133.378 2.93766 137.143Z"
            fill="white"
          />
        </svg>

        <svg
          class="romb"
          width="84"
          height="80"
          viewBox="0 0 84 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.6156 2.88386C25.1806 7.28086 9.63765 18.9079 3.95565 25.0729C-0.0663533 29.4359 -0.329354 30.0599 0.207646 33.9709C1.09165 40.4219 8.48465 62.1549 12.6496 70.5469C15.7836 76.8609 16.8466 78.1469 19.3726 78.6789C23.3416 79.5139 60.7576 79.7199 64.7186 78.9279C67.5776 78.3559 68.1146 77.5349 71.7476 68.1779C76.1806 56.7589 80.3596 43.8069 82.3336 35.3689C83.4606 30.5519 83.4476 29.3849 82.2506 27.6759C80.0846 24.5829 62.2676 10.5589 53.8016 5.28186C43.4256 -1.18514 41.7946 -1.37914 33.6156 2.88386Z"
            fill="black"
          />
        </svg>

        <svg
          class="star"
          width="74"
          height="72"
          viewBox="0 0 74 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.30006 14.5654C4.51309 16.4791 11.4559 27.3233 15.4006 32.5062C17.7675 34.8983 0.60773 41.4766 0.016015 46.2608C-0.5757 51.045 15.4006 51.045 19.5426 52.2411C23.6846 53.4371 14.2172 71.378 21.3178 71.976C28.4184 72.574 33.7438 61.8095 37.8858 60.6135C42.0278 59.4174 48.5367 72.574 53.2704 71.976C58.0041 71.378 54.4538 55.2312 55.6373 51.6431C56.8207 48.0549 73.3887 50.447 73.9804 45.6628C74.5722 40.8786 61.5544 34.3003 59.7793 31.9082C58.0041 29.5161 67.4716 16.9575 65.6964 13.3693C63.9213 9.78116 52.087 16.3595 47.3532 17.5555C42.6195 18.7516 40.8444 2.60492 36.7024 0.212807C32.5604 -2.1793 27.8266 16.3595 27.2349 17.5555C26.6432 18.7516 13.0338 12.1733 8.30006 14.5654Z"
            fill="#47D6FF"
          />
        </svg>

        <div class="container" v-if="index % 2">
          <div class="row">
            <div class="col-xl-6 m_order_1">
              <div class="sales_description">
                <h3>{{ card.title }}</h3>
                <p>{{ card.short_description }}</p>
                <!-- <p class="price">Цена - 8 000 тг.</p> -->
              </div>
              <button class="btn btn_info">ПОДРОБНЕЕ</button>
            </div>
            <div class="col-xl-6 m_order_2">
              <img :src="$staticImageUrl.staticImgUrl(card.img_block)" alt="" />
            </div>
          </div>
        </div>

        <div class="container" v-else> 
          <div class="row">
            <div class="col-xl-6 m_order_2">
              <img :src="$staticImageUrl.staticImgUrl(card.img_block)" alt="" />
            </div>
            <div class="col-xl-6 m_order_1">
              <div class="sales_description">
               <h3>{{ card.title }}</h3>
                <p>{{ card.short_description }}</p>
                <!-- <p class="price">Цена - 8 000 тг.</p> -->
              </div>
              <button class="btn btn_info">ПОДРОБНЕЕ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contacts_form">
      <span class="fix_el"><img src="@/assets/img/Vector1.svg" alt="" /></span>
      <span class="fix_el"
        ><img src="@/assets/img/fiveangle.png" alt=""
      /></span>
      <span class="fix_el"><img src="@/assets/img/Vector4.png" alt="" /></span>
      <span class="fix_el"><img src="@/assets/img/Vector3.png" alt="" /></span>
      <div class="col-xl-5 col-lg-7 m-auto">
        <div class="title_page">
          <h2>Свяжитесь <span class="orange_text">с нами</span></h2>
        </div>
        <form action="">
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <input type="text" placeholder="Возраст ребенка" />
          <button class="main-button">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    salesPageData: null,
  }),
  mounted() {
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/sales?lang=${this.$lang}`
      )
      .then((response) => (this.salesPageData = response.data));
  },
};
</script>

<style lang="scss">
.sales_content {
  background-color: #fbf9f5;
  padding-top: 220px;
  position: relative;
}
.sales_card {
  padding: 70px 0;
  position: relative;
  margin-bottom: 130px;
  .wave {
    position: absolute;
    top: 20%;
    right: 0;
    z-index: 0;
  }
  .romb {
    position: absolute;
    top: 60%;
    right: 8%;
    z-index: 0;
  }
  .star {
    position: absolute;
    top: 20%;
    right: 42%;
  }

  .sales_description {
    h3 {
      font-size: 3em;
      line-height: 58px;
      color: #181818;
    }
    p {
      font-size: 24px;
      line-height: 35px;
      margin: 30px 0;
    }
  }
  img {
    position: absolute;
    bottom: -70px;
    width: 90%;
    max-width: 600px;
  }
  .btn_info {
    margin-top: 40px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}

.right_card {
  img {
    margin-left: -120px;
  }
}
.left_card {
  img {
    //right: -100px;
    right: 0;
  }
}
.bg_green {
  background: linear-gradient(90deg, #06dc02 0%, #3eeb3b 100%);
}

.bg_orange {
  background: linear-gradient(90deg, #f8931d 0%, #ff9900 100%);
}

@media screen and (max-width: 576px) {
  .page_main_img {
    max-width: 100% !important;
    position: static !important;
    text-align: center !important;
    img {
      width: 100%;
    }
  }
  .m_order_1 {
    order: 2;
  }
  .sales_content {
    padding-top: 60px;
  }
  .page_info {
    height: auto;
    padding-bottom: 30px;
  }
  .right_card {
    img {
      margin-left: -0px;
    }
  }
  .left_card {
    img {
      right: -0px;
    }
  }
  .sales_card {
    margin-bottom: 70px;
    img {
      position: relative;
      top: -50%;
    }
  }
  .sales_description {
    margin-top: -80px;
  }
}
</style>