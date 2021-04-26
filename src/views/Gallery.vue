 <template>
  <div v-if="galleryPageData">
    <div class="page_info" >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img src="@/assets/img/sales3.png" alt="" />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1><span class="orange_text">Галерея</span> {{ galleryPageData.page.title }}</h1>
            </div>
            <div class="description_text mt-4">
              <span v-html="galleryPageData.page.description"></span>
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
    <div class="gallery_content">
      <svg
        class="star"
        width="63"
        height="61"
        viewBox="0 0 63 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.01356 12.1779C3.81356 13.7779 9.68023 22.8445 13.0136 27.1779C15.0136 29.1779 0.513533 34.6779 0.0135327 38.6779C-0.486467 42.6779 13.0136 42.6779 16.5135 43.6779C20.0135 44.6779 12.0135 59.6779 18.0135 60.1779C24.0135 60.6779 28.5135 51.6779 32.0135 50.6779C35.5135 49.6779 41.0135 60.6779 45.0135 60.1779C49.0135 59.6779 46.0135 46.1779 47.0135 43.1779C48.0135 40.1779 62.0135 42.1779 62.5135 38.1779C63.0135 34.1779 52.0135 28.6779 50.5135 26.6779C49.0135 24.6779 57.0135 14.1779 55.5135 11.1779C54.0135 8.17786 44.0135 13.6779 40.0135 14.6779C36.0135 15.6779 34.5135 2.17792 31.0135 0.177924C27.5135 -1.82208 23.5135 13.6779 23.0135 14.6779C22.5135 15.6779 11.0136 10.1779 7.01356 12.1779Z"
          fill="#73BB47"
        />
      </svg>

      <svg
        class="tick"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.2302 14.6204C19.1698 22.6551 15.6681 29.4625 15.4486 29.7477C15.1505 30.1346 13.7546 28.6338 9.93728 23.8212C4.23558 16.6334 5.01094 17.0037 1.70716 19.8907L0 21.3825L5.88368 28.6913L11.7677 36H15.6745H19.5813L27.7906 19.6552C32.3059 10.6656 36 3.15134 36 2.95671C36 2.58446 31.5609 -0.020114 30.9611 0.000117232C30.7696 0.00659123 27.2906 6.58539 23.2302 14.6204Z"
          fill="#EF463C"
        />
      </svg>

      <svg
        class="five-angle"
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
          fill="#4B3995"
        />
      </svg>

      <div class="container">
        <div class="row">
          <div
            class="col-xl-4 col-md-6 col-lg-4"
            v-for="card in galleryPageData.gallery"
            :key="card.id"
          >
            <div class="gallery_card">
              <router-link
                :to="{
                  name: 'innerGallery',
                  params: { id: card.slug },
                }"
              >
                <img
                  :src="$staticImageUrl.staticImgUrl(card.oblozhka)"
                  alt=""
                />
                <h4>{{ card.title }}</h4>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <button class="main-button m-auto d-block">Смотреть все</button>
    </div>
  </div>
</template>
 
 <script>
export default {
  data: () => ({
    galleryPageData: null,
    galleryModal: null,
    idxImg: 1,
    images: [
      {
        id: 1,
        src: require("@/assets/img/slider_img.png"),
        galleryImage: [
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
        ],
      },
      {
        id: 2,
        src: require("@/assets/img/team_modal_img.png"),
        galleryImage: [
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
        ],
      },
      {
        id: 3,
        src: require("@/assets/img/slider_img.png"),
        galleryImage: [
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
        ],
      },
      {
        id: 4,
        src: require("@/assets/img/team_modal_img.png"),
        galleryImage: [
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
          "@/assets/img/team_modal_img.png",
        ],
      },
      { id: 5, src: require("@/assets/img/slider_img.png") },
      { id: 6, src: require("@/assets/img/team_modal_img.png") },
      { id: 7, src: require("@/assets/img/gallery_img.png") },
      { id: 8, src: require("@/assets/img/team_modal_img.png") },
    ],
  }),

  mounted() {
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/gallery?lang=${this.$lang}`
      )
      .then((response) => (this.galleryPageData = response.data));
  },
};
</script>
 
 <style lang="scss">
.gallery_content {
  background-color: #fbf9f5;
  padding: 120px 0;
  position: relative;
  .star {
    position: absolute;
    top: 2%;
    right: 3%;
  }
  .tick {
    position: absolute;
    left: 0;
    top: 15%;
  }
  .five-angle {
    position: absolute;
    left: 2%;
    bottom: 27%;
  }
  .col-xl-4 {
    margin-bottom: 40px;
  }
}
.gallery_card {
  text-align: center;
  a {
    color: #000;
    text-decoration: none;
  }
  img {
    width: 100%;
    max-height: 185px;
    object-fit: cover;
  }
  h4 {
    margin-top: 30px;
  }
}
</style>