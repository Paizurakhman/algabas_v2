<template>
  <div>
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
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "SliderTwo",
  props: ['slides'],
  components: { VueSlickCarousel },
  mounted() {
    this.$nextTick(this.$forceUpdate);
  },
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
            dots: true,
          },
        },
        {
          breakpoint: 1028,
          settings: {
            slidesToScroll: 1,
            arrows: false,
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
}
</script>

<style lang="scss">

</style>