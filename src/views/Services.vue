<template>
  <div>
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img
                :src="$staticImageUrl.staticImgUrl(servicesPageData.page.image)"
                alt=""
              />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1>
                <span class="orange_text">Услуги</span>
                {{ servicesPageData.page.title }}
              </h1>
            </div>
            <div class="description_text mt-4">
              <span v-html="servicesPageData.page.description"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services_content">
      <div class="container">
        <div class="advantages">
          <div class="row">
            <div
              class="col-xl-3 col-md-4 col-lg-3"
              v-for="card in servicesPageData.first"
              :key="card.id"
            >
              <div class="advantages_card">
                <img
                  :src="$staticImageUrl.staticImgUrl(card.image)"
                  alt="img"
                />
                <p>{{ card.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed-items">
          <!-- <img class="moon" src="../assets/img/Vector4.png" alt="" /> -->
          <!-- <img class="fiveangle" src="../assets/img/fiveangle.png" alt="" /> -->
          <!-- <img class="star" src="../assets/img/star.svg" alt="" /> -->
        </div>
        <div class="additional">
          <div class="title_page">
            <h2>Дополнительные <span class="orange_text">занятия</span></h2>
          </div>
          <div class="lessons_content">
            <div class="row">
              <div
                class="col-xl-4 col-lg-4 col-md-6"
                v-for="card in servicesPageData.second"
                :key="card.id"
              >
                <div class="advantages_card">
                  <img
                    :src="$staticImageUrl.staticImgUrl(card.image)"
                    alt="img"
                  />
                  <p>{{ card.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="additional">
          <div class="title_page">
            <h2>
              Дополнительные платные услуги, <br />
              <span class="orange_text">для детей посещающих сад:</span>
            </h2>
          </div>
          <div class="lessons_content">
            <div class="row">
              <div
                class="col-xl-4 col-lg-4 col-md-6"
                v-for="card in servicesPageData.last"
                :key="card.id"
              >
                <div class="advantages_card">
                  <img
                    :src="$staticImageUrl.staticImgUrl(card.image)"
                    alt="img"
                  />
                  <span class="b_text">{{ card.title }}:</span>
                  <span v-html="card.description"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    servicesPageData: null,
  }),
  mounted() {
    let slug = this.$route.params.id;
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/services?lang=${this.$lang}`
      )
      .then((response) => (this.servicesPageData = response.data));
  },
};
</script>

<style lang="scss">
.services_content {
  background-color: #fbf9f5;
  .advantages {
    padding: 120px 0 40px;
    position: relative;
  }
}
.advantages_card {
  text-align: center;
  max-width: 70%;
  margin: 0 auto 30px;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 15px;
  }
}
.additional {
  margin-top: 50px;
}
.lessons_content {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 80px 0 50px;
  .b_text {
    font-weight: 600;
    display: block;
  }
}
.fixed-items {
  img {
    position: absolute;
    &:first-child {
      left: 9%;
      top: 90px;
    }
    &:nth-child(2) {
      right: 12%;
      top: 60px;
    }
    &:nth-child(3) {
      left: 5%;
      bottom: 160px;
    }
  }
}
</style>