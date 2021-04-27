<template>
  <div class="slider">
    <div class="container" v-if="activeTab === slides[0].id">
      <SliderOne :slides="slides" />
    </div>

    <div class="container" v-if="activeTab === slides[1].id">
      <SliderTwo :slides="slides" />
    </div>
  </div>
</template>

<script>

import SliderOne from "@/components/slider/SliderOne";
import SliderTwo from "@/components/slider/SliderTwo";

export default {
  props: ["slides", "activeTab"],
  components: {SliderTwo, SliderOne },

  // updated() {
  //   this.$refs.c2.goTo(0);
  //   // this.$refs.c1.goTo(0);
  // },
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
    &:before {
      display: none;
    }
  }
  .slick-prev {
    left: 0;
    background-size: cover;
    background-image: url("../assets/icons/prev.svg");
    z-index: 15;
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