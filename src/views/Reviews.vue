<template>
  <div class="reviews">
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img" v-if="reviewsPageData">
              <img
                :src="$staticImageUrl.staticImgUrl(reviewsPageData.page.image)"
                alt=""
              />
            </div>
            <div v-else></div>
          </div>
          <div class="col-xl-5 col-md-6" v-if="reviewsPageData">
            <div class="title_page">
              <h1>
                <span class="orange_text">{{ $locale[$lang].navBarCategory.testImonials}}</span
                >{{ reviewsPageData.page.title }}
              </h1>
            </div>
            <div class="description_text mt-4">
              <span v-html="reviewsPageData.page.description"> </span>
            </div>
          </div>
          <div v-else></div>
        </div>
      </div>
    </div>
    <div class="reviews_content">
      <svg
        class="romb"
        width="74"
        height="78"
        viewBox="0 0 74 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.0614 8.78402C7.79745 14.777 2.17944 18.337 1.32644 20.021C-0.425555 23.485 -0.449556 56.974 1.29944 59.187C3.37444 61.814 33.6914 77.987 36.5414 77.987C39.3184 77.987 68.2114 62.825 71.2784 59.758C72.8474 58.189 73.0494 55.844 73.0494 39.178C73.0494 25.642 72.6994 19.925 71.7994 18.786C70.3154 16.906 38.8864 -0.018984 36.9134 1.59847e-05C36.1634 0.00701598 28.1304 3.96002 19.0614 8.78402ZM60.0414 39.128L60.0494 51.769L48.8764 57.949C42.7314 61.349 36.9374 63.93 36.0014 63.685C35.0644 63.44 29.7424 60.682 24.1744 57.557L14.0494 51.874V39.04V26.206L25.2994 20.27L36.5494 14.334L48.2914 20.411L60.0334 26.487L60.0414 39.128Z"
          fill="#FCD635"
        />
      </svg>

      <svg
        class="wave"
        width="195"
        height="98"
        viewBox="0 0 195 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25382 58.2753C-0.746181 59.8753 0.0871525 64.2753 0.753819 66.2753C0.920486 69.6086 3.15382 74.4753 10.7538 67.2753C20.2538 58.2753 16.2538 63.2753 19.2538 66.2753C22.2538 69.2754 15.2538 89.2753 37.2538 89.7753C59.2538 90.2753 58.2538 72.7753 74.2538 61.7753C90.2538 50.7753 81.7538 59.7753 86.7538 74.2753C91.7538 88.7753 97.2538 96.2753 119.754 97.2753C142.254 98.2753 155.254 75.7753 173.754 56.2753C192.254 36.7753 191.254 24.2753 193.254 20.7753C195.254 17.2753 193.754 8.27527 191.754 5.27527C189.754 2.27527 187.254 3.27527 185.754 3.27527C184.254 3.27527 183.754 2.27536 180.254 0.275363C176.754 -1.72464 167.754 7.77536 166.754 9.27536C165.754 10.7754 165.254 9.27536 162.254 9.77536C159.254 10.2754 145.754 22.2754 144.254 23.7754C142.754 25.2754 142.254 24.7754 140.254 24.7754C138.654 24.7754 133.254 30.1087 130.754 32.7754C128.92 34.442 124.754 37.8754 122.754 38.2754C120.254 38.7754 114.754 48.2754 110.254 48.7754C105.754 49.2754 108.254 35.7754 107.754 31.2754C107.254 26.7754 103.254 25.2754 97.2538 23.7754C91.2538 22.2754 87.2538 26.7754 84.7538 28.2754C82.2538 29.7754 82.2538 29.2753 79.2538 29.2753C76.2538 29.2753 76.2538 33.2754 74.2538 33.7754C72.2538 34.2754 70.7538 35.7754 68.7538 38.7753C66.7538 41.7753 66.2538 40.7754 62.7538 41.7754C59.9538 42.5754 51.9205 51.1087 48.2538 55.2754C46.2538 58.1087 42.4538 60.4754 43.2538 47.2754C44.0538 34.0754 39.5871 29.7754 37.2538 29.2753C36.2538 29.1087 33.2538 28.9753 29.2538 29.7753C24.2538 30.7753 20.7538 36.7753 17.2538 38.7753C14.4538 40.3753 7.75381 52.1087 4.75381 57.7753C4.42048 57.2753 3.25382 56.6753 1.25382 58.2753Z"
          fill="#47D6FF"
        />
      </svg>

      <svg
        class="rain"
        width="76"
        height="105"
        viewBox="0 0 76 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.2538 4.6188C18.4538 7.8188 6.58715 23.2855 1.25382 30.6188C-0.746181 34.6188 0.0871525 36.9521 0.753819 37.6188C1.75382 39.2854 4.45382 41.6188 7.25382 37.6188C10.0538 33.6188 26.4205 24.6188 34.2538 20.6188C36.5872 18.2854 41.1538 12.4188 40.7538 7.61877C40.2538 1.61877 35.7538 0.618802 34.2538 0.118802C32.7538 -0.381198 29.2538 0.618802 23.2538 4.6188Z"
          fill="#73BB47"
        />
        <path
          d="M50.2538 31.1188C44.6538 33.1188 29.9205 40.9521 23.2538 44.6188C22.7538 45.6188 20.2538 44.6188 15.2538 46.1188C11.2538 47.3188 9.58715 51.6188 9.25382 53.6188C9.08715 55.2854 9.55382 58.4188 12.7538 57.6188C16.7538 56.6188 31.2538 57.6188 37.2538 58.6188C43.2538 59.6188 49.2538 59.1188 57.2538 57.6188C65.2538 56.1188 65.2538 54.6188 66.7538 52.6188C68.2538 50.6188 76.2538 53.6188 75.2538 40.6188C74.2538 27.6188 57.2538 28.6188 50.2538 31.1188Z"
          fill="#73BB47"
        />
        <path
          d="M16.7538 73.1188C11.5538 71.5188 7.58715 74.4521 6.25382 76.1188C11.9205 84.9521 23.9538 102.819 26.7538 103.619C30.2538 104.619 30.7538 103.619 32.7538 103.619C34.7538 103.619 38.2538 100.119 39.2538 98.1188C40.2538 96.1188 40.7538 88.1188 39.2538 85.6188C37.7538 83.1188 23.2538 75.1188 16.7538 73.1188Z"
          fill="#73BB47"
        />
      </svg>

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
          fill="#EF463C"
        />
      </svg>

      <div class="container" v-if="reviewsPageData">
        <div class="row">
          <div
            class="col-xl-6 col-lg-6"
            v-for="(review, index) in reviewsPageData.review"
            :key="index"
          >
            <ReviewItem :review="review" />
          </div>
        </div>
        <button class="btn main-button d_block">{{$locale[$lang].buttons.seeAll}}</button>

        <div @click="hideOrShow" class="comment_block">
          <img src="@/assets/img/comment_icon.svg" alt="" />
          <input type="text" :placeholder="$locale[$lang].buttons.sendReview" />
        </div>
      </div>
    </div>
    <div @click.self="hideOrShow" class="bg" v-if="SHOW_MODAL_REVIEW"></div>
    <img
      v-if="SHOW_MODAL_REVIEW"
      @click="hideOrShow"
      class="close_img"
      src="../assets/icons/close.svg"
      alt="close"
    />
    <transition name="review">
      <Modal v-if="SHOW_MODAL_REVIEW">
        <template v-slot:title>{{$locale[$lang].buttons.sendReview}}</template>
        <template v-slot:input>
          <form action="">
            <p v-if="success">{{ $locale[$lang].modalReviews.success }}</p>
            <input
              type="text"
              :placeholder="$locale[$lang].modalReviews.yourName"
              v-model.trim="name"
              :class="{ invalid: $v.name.$dirty && !$v.name.required }"
            />
            <span v-if="$v.name.$error" class="text-left error"
              >{{$locale[$lang].modalReviews.yourInstagram}}</span
            >
            <input
              type="text"
              :placeholder="$locale[$lang].modalReviews.yourInstagram"
              v-model.trim="instagram"
            />
            <input
              type="text"
              :placeholder="$locale[$lang].modalReviews.yourInstagram"
              v-model.trim="facebook"
            />
            <div>
              <input
                name="file"
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              :placeholder="$locale[$lang].modalReviews.feedback"
              v-model.trim="reviews"
            ></textarea>
            <span v-if="$v.reviews.$error" class="text-left error"
              >{{$locale[$lang].additionalLessons.requiredField}}</span
            >
          </form>
        </template>
        <template v-slot:button>
          <button class="main-button" @click="submit">{{$locale[$lang].buttons.sendReview}}</button>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import ReviewItem from "@/components/ReviewItem";
import { mapActions, mapGetters } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  components: { Modal, ReviewItem },
  data: () => ({
    reviewsPageData: null,
    name: "",
    reviews: "",
    instagram: "",
    facebook: "",
    image: "",
    imageViewing: "",
    success: false,
  }),

  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    reviews: {
      required,
    },
  },

  methods: {
    ...mapActions(["GET_MODAL_REVIEW"]),
    hideOrShow() {
      this.GET_MODAL_REVIEW();
    },

    handleFileUpload() {
      let formData = new FormData();
      this.image = document.getElementById("file").files[0];
      formData.append("image", document.getElementById("file").files[0]);
      this.image = formData.get("file");
    },

    submit() {
      let formData = new FormData();
      this.image = document.getElementById("file").files[0];
      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("reviews", this.reviews);
      formData.append("instagram", this.instagram);
      formData.append("facebook", this.facebook);

      console.log(formData);

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        this.$axios
          .post(
            `https://admin.sadik-algabas.kz/api/reviews`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            this.success = true;
            setTimeout(() => {
              this.name = "";
              this.reviews = "";
              this.instagram = "";
              this.facebook = "";
              this.image = "";
              this.$v.$reset();
              this.hideOrShow();
              this.success = false;
            }, 2000);
          });
      }
    },
  },
  computed: {
    ...mapGetters(["SHOW_MODAL_REVIEW"]),
  },

  mounted() {
    this.$axios
      .get(
        `https://admin.sadik-algabas.kz/api/review?lang=${this.$lang}`
      )
      .then((response) => (this.reviewsPageData = response.data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style lang="scss">
@import "src/assets/variables";
@import "src/assets/mixins";

.img_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 80px;
  }
}
.delete_img {
  background: #ff7948;
  width: fit-content !important;
  padding: 5px 20px;
  font-size: 14px;
}

.reviews_content {
  background-color: #fbf9f5;
  padding: 150px 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .review_card_wrapper {
    margin-bottom: 30px;
    .review_card {
      max-width: 90%;
      background-color: #fff;
      box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      padding: 35px 30px;
      p {
        margin-bottom: 0;
      }
    }
    .socials {
      margin-top: 20px;
      display: flex;
      align-items: center;
      .avatar {
        width: 100%;
        max-width: 50px;
        max-height: 50px;
      }
      a {
        margin-left: 15px;
      }
    }
  }
  .main-button {
    display: block;
    margin: 50px auto 0;
  }
  svg {
    position: absolute;
    &.romb {
      top: 1%;
      right: 8%;
    }
    &.wave {
      top: 8%;
      left: 1%;
    }
    &.rain {
      top: 28%;
      right: 8%;
    }
    &.star {
      bottom: 30%;
      left: 5%;
    }
  }
}
.comment_block {
  margin-top: 120px;
  cursor: pointer;
  background: #ff7948;
  border-radius: 20px;
  padding: 25px 30px;
  display: flex;
  img {
    width: 100%;
    max-width: 50px;
    margin-right: 30px;
  }
  input {
    width: 100%;
    border-radius: 10px;
    border: none;
    padding: 0 30px;
    pointer-events: none;
  }
}

@media only screen and(max-width: 768px) {
  .title_page {
    h1 {
      font-size: xx-large;
    }
  }
  .reviews_content {
    padding: 50px 0;
  }
  .review_card {
    max-width: 100% !important;
    width: 100%;
  }
  .comment_block {
    margin-top: 70px;
    img {
      margin-right: 10px;
      max-width: 35px;
    }
  }
}
.bg {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  left: 0;
  height: 100%;
  z-index: 9999;
}
.close_img {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100001;
}
</style>