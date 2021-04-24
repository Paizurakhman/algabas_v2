<template>
  <div class="review-item">
    <div class="review">
      <p>{{review.reviews}}</p>
    </div>
    <div class="contact-profile">
      <img :src="$staticImageUrl.staticImgUrl(review.image)" alt="" class="avatar" />
      <a v-if="review.facebook" :href="review.facebook" target="blank">
        <img src="@/assets/img/facebook_icon.svg" alt="" />
      </a>
      <a v-if="review.instagram" :href="review.instagram" target="blank">
        <img src="@/assets/img/Instagram_icon.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewItem",
  props: ['review']
}
</script>

<style lang="sass">
  .review-item
    text-align: left
    margin: 0 auto

    .review
      background: white
      padding: 30px
      border-radius: 30px
      box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25)
      margin: 15px 0

    .contacts-profile
      margin-top: 20px
      display: flex
      align-items: center
      .avatar
        width: 100%
        max-width: 50px
        max-height: 50px

      a
        margin-left: 15px

    .contact-profile
      .avatar
        width: 50px
        height: 50px
        border-radius: 50%
        object-fit: cover
      img
        margin-right: 10px

</style>