<template>
  <nav :class="{ activeNavbar: navFix }">
    <div class="nav_content">
      <router-link to="/"
        ><img class="logo" src="../assets/img/logo.svg" alt="logo"
      /></router-link>
      <div class="links mob-none">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/sales">Акции</router-link>
        <router-link to="/reviews">Отзывы</router-link>
        <router-link to="/services">Услуги</router-link>
        <router-link to="/our-team">Наши сотрудники</router-link>
        <router-link to="/gallery">Галерея</router-link>
        <router-link to="/contacts">Контакты</router-link>
      </div>
      <button
        class="mob-none"
        :class="{ 'main-button': navFix }"
        @click="requestCallModal"
      >
        Заказать звонок
      </button>
      <div class="social-networks mob-none" v-if="contacts">
        <a
          :href="'https://api.whatsapp.com/send?phone=' + contacts.whats_app"
          v-if="contacts.whats_app"
          target="blank"
        >
          <img src="../assets/icons/whatsapp.png" alt="whatsapp" />
        </a>
        <a :href="contacts.instagram" v-if="contacts.instagram">
          <img src="../assets/icons/instagram.png" alt="instagram" />
        </a>
        <a :href="'mailto:' + contacts.facebook" v-if="contacts.facebook">
          <img src="../assets/icons/facebook.png" alt="facebook" />
        </a>
      </div>
      <div class="language mob-none">
        <h5 class="lang">RU</h5>
        <h5 class="lang">KZ</h5>
      </div>

      <div
        @click="toggleMenu"
        class="mobile_burger_toggle desk-none"
        :class="{ burger_active: mobileNav }"
      >
        <span></span>
      </div>
      <div v-if="mobileNav" class="bg"></div>
      <div class="mobile_nav" :class="{ mobileNavActive: mobileNav }">
        <router-link to="/"
          ><img class="logo" src="../assets/img/logo.svg" alt="logo"
        /></router-link>
        <div class="mobile_header">
          <div class="links">
            <router-link to="/">Главная</router-link>
            <router-link to="/about">О нас</router-link>
            <router-link to="/sales">Акции</router-link>
            <router-link to="/reviews">Отзывы</router-link>
             <router-link to="/services">Услуги</router-link>
            <router-link to="/our-team">Наши сотрудники</router-link>
            <router-link to="/gallery">Галерея</router-link>
            <router-link to="/contacts">Контакты</router-link>
          </div>
          <div class="language">
            <h5 class="lang">RU</h5>
            <h5 class="lang">KZ</h5>
          </div>
        </div>
        <div class="contacts" v-if="contacts">
          <p>{{ contacts.phone_number }}</p>
          <div class="social-networks desk-none">
            <a
              :href="
                'https://api.whatsapp.com/send?phone=' + contacts.whats_app
              "
              v-if="contacts.whats_app"
              target="blank"
            >
              <img src="../assets/icons/whatsapp.png" alt="whatsapp" />
            </a>
            <a :href="contacts.instagram" v-if="contacts.instagram">
              <img src="../assets/icons/instagram.png" alt="instagram" />
            </a>
            <a :href="'mailto:' + contacts.facebook" v-if="contacts.facebook">
              <img src="../assets/icons/facebook.png" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" v-if="SHOW_MODAL"></div>
    <img
      v-if="SHOW_MODAL"
      @click="requestCallModal"
      class="close_img"
      src="../assets/icons/close.svg"
      alt="close"
    />
    <transition name="review">
      <Modal v-if="SHOW_MODAL">
        <template v-slot:title>Заказать звонок</template>
      </Modal>
    </transition>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "@/components/Modal";
export default {
  name: "Navbar",
  components: { Modal },
  props: ["contacts"],
  data: () => ({
    mobileNav: false,
    navFix: false,
  }),
  methods: {
    ...mapActions(["GET_MODAL_SHOW"]),
    requestCallModal() {
      this.GET_MODAL_SHOW();
    },
    toggleMenu() {
      this.mobileNav = !this.mobileNav;
      if (this.mobileNav) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
    handleScroll: function () {
      let vm = this;
      window.onscroll = () => {
        if (window.scrollY > 0) {
          vm.navFix = true;
        } else {
          vm.navFix = false;
        }
      };
    },
  },

  computed: {
    ...mapGetters(["SHOW_MODAL"]),
  },

  mounted() {
    this.handleScroll();
  },
  watch: {
    $route(to, from) {
      this.mobileNav = false;
      if (this.mobileNav) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/variables";

.router-link-exact-active {
  color: #ff7948 !important;
}

nav {
  transition: all 0.5s ease;
  position: relative;
  z-index: 9;
}

.bg {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  left: 0;
  height: 100%;
  z-index: 1000;
}
.close_img {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000;
}

.activeNavbar {
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  .main-button {
    border: 1px solid $secondary !important;
  }
}
.nav_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1231px;
  margin: 0 auto;
  box-sizing: border-box;
  .desk-none {
    display: none;
  }
  .links a {
    margin: 0 10px;
    text-decoration: none;
    font-size: 16px;
    color: $primary;
  }
  button {
    padding: 12px 15px;
    border-radius: 30px;
    border: 1px solid #181818;
    background: transparent;
    outline: 0;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.5s ease;
    &:hover {
      background: #ff7948;
      color: #fff;
      border: 1px solid #ff7948;
    }
  }
  .social-networks img {
    margin: 0 10px;
  }
  .language {
    display: flex;
    align-items: center;
    h5.lang {
      display: inline-block;
      margin-left: 10px;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 0;
      &:nth-child(1) {
        color: $secondary;
      }
    }
  }
  .mobile_burger_toggle {
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 15;
    span {
      width: 30px;
      height: 5px;
      background: #31363a;
      display: block;
      position: relative;
      transition: all 0.5s ease;
      &::before {
        content: "";
        width: 30px;
        height: 5px;
        background: #31363a;
        position: absolute;
        top: -10px;
        transition: all 0.5s ease;
      }
      &::after {
        content: "";
        width: 30px;
        height: 5px;
        background: #31363a;
        position: absolute;
        top: 10px;
        transition: all 0.5s ease;
      }
    }
  }

  .mobile_nav {
    width: 33%;
    transform: translateX(100%);
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fcf3da;
    z-index: 12;
    transition: all 0.5s ease;
    img {
      margin-left: 20px;
    }
    .links {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        font-weight: 600;
        padding: 10px 0;
      }
    }
    .language {
      h5 {
        margin-top: 10px;
      }
    }
    .contacts {
      position: relative;
      text-align: center;
      margin-bottom: 60px;
      p {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
.mobile_header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.review-enter,
.review-leave-to {
  //opacity: 0;
  transform: translateY(-100%);
}

.review-enter-active,
.review-leave-active {
  transition: all 0.5s ease;
}
@media screen and (max-width: 1024px) {
  .nav_content {
    margin: 0 30px;
    .desk-none {
      display: block;
    }
    .mob-none {
      display: none;
    }
    .mobile_burger_toggle {
      display: flex;
      align-items: center;
    }
    .mobile_burger_toggle.burger_active {
      span {
        background: transparent;
        &::before {
          top: 0;
          transform: rotate(45deg);
          transition: all 0.5s ease;
        }
        &::after {
          top: 0;
          transform: rotate(-45deg);
          transition: all 0.5s ease;
        }
      }
    }
    .bg {
      position: fixed;
      width: 100%;
      left: 0;
      height: 100%;
      bottom: 0;
      background: #00000085;
      z-index: 11;
    }
    .mobile_nav.mobileNavActive {
      transform: translateX(0);
    }
  }
}
@media screen and (max-width: 576px) {
  nav {
    width: 100%;
    margin: 0 auto;
    .mobile_nav {
      width: 100% !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .language {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>