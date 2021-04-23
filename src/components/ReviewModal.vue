<template>
  <div class="bg">
    <img @click="closeModal" class="close_img" src="../assets/icons/close.svg" alt="close">
  </div>

    <div class="review_modal">
      <p class="review_header">Оставить отзыв</p>
      <input type="text" placeholder="Имя">
      <input type="email" placeholder="Email">
      <textarea v-model="review" placeholder="Отзыв"></textarea>
      <button class="main-button">Отправить отзыв</button>
    </div>
</template>

<script>
export default {
  name: "ReviewModal",
  data() {
    return {
      review: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close_modal')
    }
  }
}
</script>

<style lang="scss">
  .bg {
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    left: 0;
    height: 100%;

    .close_img {
      float: right;
      margin: 30px;
      cursor: pointer;
    }
  }
  .review_modal {
    position: fixed;
    max-width: 400px;
    top: 15vh;
    padding: 20px;
    background: #FFFFFF;
    .review_header {
      font-weight: 600;
      font-size: 36px;
    }
    input, textarea {
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

</style>