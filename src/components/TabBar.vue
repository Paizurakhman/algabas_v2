<template>
  <div>
    <div class="tab-nav">
      <div class="select">
        <button class="current" @click="isSelect = !isSelect">
          {{ selected }}
        </button>

        <svg
          :class="{ active_select: isSelect }"
          @click="isSelect = !isSelect"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L11 1" stroke="black" stroke-width="2" />
        </svg>
      </div>
      <transition name="button">
        <nav class="tab" v-if="isSelect">
          <button
            @click="updateTab('lessons')"
            :class="{ active: current === 'lessons' }"
          >
            Занятия
          </button>
          <button
            @click="updateTab('garden')"
            :class="{ active: current === 'garden' }"
          >
            Садик
          </button>
        </nav>
      </transition>
      <nav class="tab_desktop">
        <button
          @click="updateTab('lessons')"
          :class="{ active: current === 'lessons' }"
        >
          Занятия
        </button>
        <button
          @click="updateTab('garden')"
          :class="{ active: current === 'garden' }"
        >
          Садик
        </button>
      </nav>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: ["current"],
  data() {
    return {
      isSelect: false,
    };
  },
  methods: {
    updateTab(by) {
      this.$emit("tabChange", by);
      this.isSelect = false;
    },
  },
  computed: {
    selected() {
      if (this.current === "lessons") {
        return "Занятия";
      }
      if (this.current === "garden") {
        return "Садик";
      }
    },
  },
};
</script>

<style lang="sass">
.tab-nav
  width: 100%
  button
    width: 100%
    height: 80px
    border-radius: 0
    font-size: 18px
    font-weight: 600
    cursor: pointer

    button.active
      background: #FCD635
      border: 1px solid #FCD635

    .select
      display: none

    .tab_desktop
      display: flex

    .tab
      display: none

  @media screen and (max-width: 576px)
    .tab
      display: block !important
    .tab_desktop
      display: none !important
    .tab-nav
      position: absolute
      z-index: 10
      width: 100%

    .bottom
      height: 50px
    .current
      width: 80% !important
      text-align: left
      padding-left: 30px
      background: #fcd635
      border: #fcd635
    .select
      position: relative
      display: block !important
      z-index: 10

    .tab
      width: 80%
      display: flex
      flex-direction: column
      border: 1px solid #aeaeae
      button
        background: #fbf9f5 !important
        border: none !important
    svg
      position: absolute
      top: 50%
      right: 15%
      transition: all 0.2s ease

  .active_select
    transform: rotate(180deg)

  .button-enter-from, .button-leave-to
    transform: translateY(-100px)
    opacity: 0

  .button-enter-active, .button-leave-active
    transition: all 0.4s ease
</style>