<template>
  <div class="a-card">
    <img :src="require(`../assets/frames/` + cardItem.image)">
    <h4>{{cardItem.title}}</h4>
    <p>{{cardItem.description}}</p>
    <div class="footer">
      <p class="title">График работы:</p>
      <p>08:00 - 19:00</p>
      <p class="title mgn">Цена:</p>
      <p>{{cardItem.price}} тг.</p>
    </div>
    <router-link class="btn_details" :to="{ name: 'Berries', params: {id: cardItem.id}}">Подробнее</router-link>
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
    max-width: 400px
    text-align: left
    margin: 0 20px

    img
      width: 100%
      margin-bottom: 10px

    h4
      margin-bottom: 10px
      font-size: 24px

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