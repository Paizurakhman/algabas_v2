<template>
  <div class="about" v-if="aboutPageData">
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img :src="$staticImageUrl.staticImgUrl(aboutPageData.page.image)" alt="" />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1><span class="orange_text">О нас</span> {{ aboutPageData.page.title }}</h1>
            </div>
            <div class="description_text mt-4">
              <span v-html="aboutPageData.page.description"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about_us">
      <div class="fix_elems">
        <img src="../assets/img/red_tick.svg" alt="" />
        <img src="../assets/img/green_star.svg" alt="" />
        <img src="../assets/img/blue_romb.svg" alt="" />
      </div>
      <div class="container">
        <div class="wrapper">
          <div class="about_title" v-html="aboutPageData.content.content">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    aboutPageData: null
  }),
  mounted() {
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/about?lang=${this.$lang}`
      )
      .then((response) => (this.aboutPageData = response.data));
  },
};
</script>

<style lang="scss">
.about_us {
  position: relative;
  background: #fbf9f5;
  padding: 80px 0;
  .fix_elems {
    img {
      &:nth-child(1) {
        left: 1%;
        top: 10%;
      }
      &:nth-child(2) {
        right: 5%;
        top: 1%;
      }
      &:nth-child(3) {
        bottom: 1%;
        left: 1%;
      }
    }
  }
}
</style>