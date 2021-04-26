<template>
    <div class="fixed_modal" @click.self="closeModal">
      <div class="review_modal">
        <p class="review_header">
          <slot name="title"></slot>
        </p>
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="Email" />
        <textarea v-model="review" placeholder="Отзыв"></textarea>
        <button class="main-button">Отправить отзыв</button>
      </div>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Modal",
  data() {
    return {
      review: "",
    };
  },

  mounted() {
    if (this.SHOW_MODAL || this.SHOW_MODAL_REVIEW) {
      document.body.style.overflowY = "hidden";
    }
  },

  destroyed() {
    if (!this.SHOW_MODAL || !this.SHOW_MODAL_REVIEW) {
      document.body.style.overflowY = "auto";
    }
  },

  methods: {
    ...mapActions([
      'GET_MODAL_SHOW',
    ]),
    closeModal() {
      this.$store.commit('GLOSE_MODAL')
    },
  },
  computed: {
    ...mapGetters([
        'SHOW_MODAL',
        'SHOW_MODAL_REVIEW'
    ]),

  }
};
</script>

<style lang="scss">
.fixed_modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.close_img {
  position: relative;
  float: right;
  margin: 30px;
  cursor: pointer;
}
.review_modal {
  position: fixed;
  max-width: 500px;
  top: 15vh;
  padding: 30px 20px;
  background: #ffffff;
  .review_header {
    font-weight: 600;
    font-size: 36px;
  }
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 15px 20px;
    border: 0;
    background: rgba(236, 235, 235, 0.3);
  }
  button {
    width: 100%;
  }
}

@media screen and (max-width: 576px){
  .review_modal {
    margin: 0 15px;
  }
}
</style>
