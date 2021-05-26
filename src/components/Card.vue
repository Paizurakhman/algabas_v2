<template>
  <div class="a-card">
    <div class="card_image" :style="{ backgroundColor: cardItem.color }">
      <img :src="$staticImageUrl.staticImgUrl(cardItem.image)" />
      <h4>{{ cardItem.title }}</h4>
    </div>
    <p class="name_card">{{ cardItem.name }}</p>
    <p>{{ cardItem.short_description }}</p>
    <div class="footer">
      <p class="title" v-if="cardItem.schedule">График работы:</p>
      <p v-if="cardItem.schedule">{{ cardItem.schedule }}</p>
      <p v-if="cardItem.cost" class="title mgn">Цена:</p>
      <p v-if="cardItem.cost">{{ cardItem.cost }} тг.</p>
    </div>
    <router-link
      class="btn_details"
      :to="{ name: 'GroupPage', params: { id: cardItem.slug } }"
      >{{ $locale[$lang].buttons.readMore }}</router-link
    >
  </div>
</template>
<script>
export default {
name: "Card",
  props: ['cardItem']
}
</script>

<style lang="sass">
  @import "src/assets/variables"
  .a-card
    text-align: left
    margin: 0 20px
    .card_image
      margin-bottom: 20px
      position: relative
    
    img
      width: 100%
      max-height: 185px
      object-fit: contain
      object-position: right

    h4
      margin-bottom: 10px
      font-size: 24px
      position: absolute
      top: 10%
      left: 5%
      color: #fff
      width: 50%
      font-weight: 600
    .name_card
      font-weight: 600
    p
      margin-bottom: 10px
      font-size: 18px
      line-height: 21.83px

    .footer
      margin: 30px 0

      p.title
        margin-bottom: 10px
        font-size: 18px
        font-weight: 700
      p
        font-weight: 600

      .mgn
        padding-top: 10px

    a
      text-decoration: none
      color: #181818
      &.btn_details
        padding: 10px 16px
        border: 1px solid $secondary
        font-weight: 600
        border-radius: 30px
        background: 0
        cursor: pointer
        &:hover
          background: #ff7948
          color: white
          transition: all 0.2s ease

</style>