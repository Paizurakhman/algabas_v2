<template>
  <div class="slider">
    <div class="container" v-if="activeTab === 'lessons'">
      <VueSlickCarousel
        ref="c1"
        :asNavFor="$refs.c2"
        v-bind="settingsMainNav"
        class="slider_top"
      >
        <div class="main_slide" v-for="slide in slides.class" :key="slide.id">
          <img :src="$staticImageUrl.staticImgUrl(slide.image)" alt="img" />
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel
        class="slider_nav"
        ref="c2"
        :asNavFor="$refs.c1"
        v-bind="settingsSliderNav"
      >
        <div class="bottom_slide" v-for="slide in slides.class" :key="slide.id">
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
          v-for="slide in slides.kindergarten"
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
          v-for="slide in slides.kindergarten"
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
    },

    settingsSliderNav: {
      arrows: false,
      slidesToShow: 6,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
};
</script>

<style>
</style>