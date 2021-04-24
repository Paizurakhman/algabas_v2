<template>
  <div v-if="innerGaleryImg">
    <div class="banner">
      <div>
        <h1>Занятия</h1>
        <div class="border_title"></div>
      </div>
    </div>

    <div class="gallery">
      <span class="fix_el"><img src="@/assets/img/Vector1.svg" alt="" /></span>
      <span class="fix_el"
        ><img src="@/assets/img/fiveangle.png" alt=""
      /></span>
      <span class="fix_el"><img src="@/assets/img/Vector4.png" alt="" /></span>
      <span class="fix_el"><img src="@/assets/img/Vector3.png" alt="" /></span>

      <div class="container">
        <a @click="$router.go(-1)" class="back_router"
          ><i class="fas fa-chevron-left"></i>Назад</a
        >

        <div class="row">
          <div
            class="col-xl-3 col-md-6 col-lg-4"
            v-for="(card, idx) in innerGaleryImg.images"
            :key="idx"
          >
            <div class="gallery_card">
              <img
                :src="$staticImageUrl.staticImgUrl(card.image)"
                alt=""
                @click="galleryModalToggle(innerGaleryImg.images, idx)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" v-if="galleryModal"></div>
    <transition name="review">
      <div class="gallery_modal_wrapper" v-if="galleryModal">
        <div class="gallery_modal">
          <img
            src="@/assets/img/close.svg"
            alt=""
            class="close_modal"
            @click="galleryModal = null"
          />
          <VueSlickCarousel class="gallery_slider">
            <div v-for="image in galleryModal" :key="image.id">
              <img :src="$staticImageUrl.staticImgUrl(image.image)" alt="" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    VueSlickCarousel,
  },

  data: () => ({
    innerGaleryImg: null,
    galleryModal: null,
    idxImg: 1,
  }),
  methods: {
    galleryModalToggle(card, idx) {
      this.galleryModal = card;
      this.idxImg = idx;
    },

    nextImg() {
      let idxImg = this.idxImg + 1;
      if (idxImg <= this.galleryImage.length - 1) {
        this.idxImg++;
      }
    },

    prevImg() {
      if (this.idxImg > 0) {
        this.idxImg--;
      }
    },
  },
  mounted() {
    let slug = this.$route.params.id;
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/gallery/${slug}?lang=${this.$lang}`
      )
      .then((response) => (this.innerGaleryImg = response.data));
  },
};
</script>

<style lang="scss">
.banner {
  height: 80vh;
  background-image: url("../assets/img/bg_owr.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-size: 96px;
    line-height: 119px;
    color: #fff;
    font-weight: 700;
  }
  .border_title {
    background-image: url("../assets/img/border.svg");
    display: block;
    height: 24px;
  }
}
.gallery {
  padding: 80px 0;
  position: relative;
  .fix_el:nth-child(1) {
    position: absolute;
    left: 10%;
    bottom: 30%;
  }
  .fix_el:nth-child(2) {
    position: absolute;
    left: 10%;
    top: 30%;
  }
  .fix_el:nth-child(3) {
    position: absolute;
    right: 10%;
    top: 30%;
  }
  .fix_el:nth-child(4) {
    position: absolute;
    right: 10%;
    bottom: 10%;
  }
}

.back_router {
  color: red;
  cursor: pointer;
  font-size: 20px;
  i{
    margin-right: 10px;
  }
  &:hover{
    color: #000;
    text-decoration: none;
  }
}
.gallery_slider {
  max-width: 600px;
  margin: 0 auto;
  img {
    max-height: 400px;
    max-width: 100%;
    margin: 0 auto;
  }
  .slick-arrow {
    width: 50px;
    height: 50px;
    background-size: cover;
    &::before {
      display: none;
    }
  }
  .slick-next {
    right: -20%;
    background-image: url("../assets/img/next_img.svg");
  }
  .slick-prev {
    left: -20%;
    background-image: url("../assets/img/prev_img.svg");
  }
}

.col-xl-3 {
  margin: 40px 0 20px;
}
.gallery_card {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    min-height: 166px;
    max-height: 166px;
  }
}
.gallery_modal_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 89888;
}
.gallery_modal {
  position: relative;
  background-color: #fff;
  max-width: 70%;
  width: 100%;
  padding: 100px 0px;
  .next_img {
    position: absolute;
    top: 45%;
    right: 3%;
    cursor: pointer;
  }
  .prev_img {
    position: absolute;
    top: 45%;
    left: 3%;
    cursor: pointer;
  }
  .close_modal {
    position: absolute;
    right: 4%;
    top: 5%;
    cursor: pointer;
  }
  .main_modal_img {
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    display: block;
  }
}

@media only screen and (max-width: 768px) {
  .banner {
    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }
  .gallery_modal {
    max-width: 90%;
    padding: 50px 0px;
    .close_modal {
      max-width: 20px;
    }
    .next_img {
      max-width: 30px;
    }
    .prev_img {
      max-width: 30px;
    }
  }
}
</style>