<template>
  <div class="slider">
    <div class="container" v-if="activeTab === 'lessons'">
      <VueSlickCarousel
        ref="c1"
        :asNavFor="$refs.c2"
        v-bind="settingsMainNav"
        class="slider_top"
      >
        <div class="main_slide" v-for="slide in slides[0].images" :key="slide.id">
          <img :src="$staticImageUrl.staticImgUrl(slide.image)" alt="img" />
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel
        class="slider_nav"
        ref="c2"
        :asNavFor="$refs.c1"
        v-bind="settingsSliderNav"
      >
        <div class="bottom_slide" v-for="slide in slides[0].images" :key="slide.id">
          <img :src="$staticImageUrl.staticImgUrl(slide.image)" alt="img" />
        </div>
      </VueSlickCarousel>
    </div>

    <div class="container" v-if="activeTab === 'garden'">
      <VueSlickCarousel
        ref="c1"
        :asNavFor="$refs.c2"
        v-bind="settingsMainNav"
        class="slider_top"
      >
        <div
          class="main_slide"
          v-for="slide in slides[1].images"
          :key="slide.id"
        >
          <img :src="$staticImageUrl.staticImgUrl(slide.image)" alt="img" />
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel
        class="slider_nav"
        ref="c2"
        :asNavFor="$refs.c1"
        v-bind="settingsSliderNav"
      >
        <div
          class="bottom_slide"
          v-for="slide in slides[1].images"
          :key="slide.id"
        >
          <img :src="$staticImageUrl.staticImgUrl(slide.image)" alt="img" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["slides", "activeTab"],
  components: { VueSlickCarousel },
  data: () => ({
    settingsMainNav: {
      arrows: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          },
        },
        {
          breakpoint: 1028,
          settings: {
            slidesToScroll: 1,
            arrows: false
          },
        },
      ],
    },

    settingsSliderNav: {
      arrows: false,
      slidesToShow: 6,
      focusOnSelect: true,

    },
  }),
  mounted() {
    this.$nextTick(this.$forceUpdate);
  },
};
</script>

<style lang="scss">
.slider {
  margin-bottom: 90px;
  .slider_nav {
    max-width: 960px;
    margin: 0 auto;
    .slick-current {
      border: 1px solid #fcd635;
      img {
        filter: alpha(0.5);
      }
    }
  }
  .main_slide {
    max-width: 960px;
    margin: 0 auto;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .bottom_slide {
    padding: 10px;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .slick-arrow {
    width: 40px;
    height: 40px;
    &:before{
      display: none;
    }
  }
  .slick-prev {
    left: 0;
    background-size: cover;
    background-image: url("../assets/icons/prev.svg");
  }
  .slick-next {
    right: 0;
    background-size: cover;
    background-image: url("../assets/icons/next.svg");
  }
  .slider_top {
    .slick-dots {
      bottom: -50px;
      button {
        content: "";
        width: 10px;
        height: 10px;
        border: 1px solid #181818;
        border-radius: 50px;
        &:before {
          display: none;
        }
      }
      .slick-active button {
        background: #181818;
      }
      li {
        margin: 0 10px;
      }
    }
  }
}
</style>