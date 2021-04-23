<template>
  <div>
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
        <div class="row">
          <div
            class="col-xl-3 col-md-6 col-lg-4"
            v-for="(card, idx) in galleryImage"
            :key="card"
          >
            <div class="gallery_card">
              <img
                :src="card.src"
                alt=""
                @click="galleryModalToggle(galleryImage, idx)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gallery_modal_wrapper" v-if="galleryModal">
      <div class="gallery_modal">
        <img
          src="@/assets/img/close.svg"
          alt=""
          class="close_modal"
          @click="galleryModal = null"
        />
        <div>
          <img :src="galleryModal[idxImg].src" alt="" class="main_modal_img" />
        </div>
        <div class="arrows">
          <img
            src="@/assets/img/next_img.svg"
            @click="nextImg"
            class="next_img"
            alt=""
          />
          <img
            src="@/assets/img/prev_img.svg"
            @click="prevImg"
            class="prev_img"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    galeryImg: null,
    galleryModal: null,
    idxImg: 1,
    galleryImage: [
      { id: 1, src: require("@/assets/img/slider_img.png") },
      { id: 2, src: require("@/assets/img/team_modal_img.png") },
      { id: 3, src: require("@/assets/img/slider_img.png") },
      { id: 4, src: require("@/assets/img/team_modal_img.png") },
      { id: 5, src: require("@/assets/img/slider_img.png") },
      { id: 6, src: require("@/assets/img/team_modal_img.png") },
      { id: 7, src: require("@/assets/img/gallery_img.png") },
      { id: 8, src: require("@/assets/img/team_modal_img.png") },
      { id: 9, src: require("@/assets/img/gallery_img.png") },
      { id: 10, src: require("@/assets/img/team_modal_img.png") },
      { id: 11, src: require("@/assets/img/gallery_img.png") },
      { id: 12, src: require("@/assets/img/team_modal_img.png") },
    ],
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
  created() {
    console.log(this.$route);
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
  background-color: #0000008c;
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