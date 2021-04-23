<template>
  <nav>
    <img src="../assets/logo.svg" alt="logo">
    <div class="links mob-none">
      <router-link to="/">Главная</router-link>
      <router-link to="/Sales">Акции</router-link> 
      <router-link to="/Reviews">Отзывы</router-link> 
      <router-link to="/OurTeam">Наши сотрудники</router-link>
      <router-link to="/Gallery">Галерея</router-link>
      <router-link to="/Contacts">Контакты</router-link>
    </div>
    <button class="mob-none">Заказать звонок</button>
    <div class="social-networks mob-none">
      <img src="../assets/icons/whatsapp.png" alt="whatsapp">
      <img src="../assets/icons/instagram.png" alt="instagram">
      <img src="../assets/icons/facebook.png" alt="facebook">
    </div>
    <div class="language mob-none">
      <h5 class="lang">RU</h5>
      <h5 class="lang">KZ</h5>
    </div>

    <div @click="toggleMenu" class="mobile_burger_toggle desk-none" :class="{burger_active: mobileNav}">
      <span></span>
    </div>
    <div v-if="mobileNav" class="bg"></div>
    <div class="mobile_nav" :class="{mobileNavActive: mobileNav}">
      <img src="../assets/logo.svg" alt="logo">
      <div class="links">
        <router-link to="/">Главная</router-link>
        <router-link to="/Sales">Акции</router-link> 
        <router-link to="/Reviews">Отзывы</router-link> 
        <router-link to="/OurTeam">Наши сотрудники</router-link>
        <router-link to="/Gallery">Галерея</router-link>
        <router-link to="/Contacts">Контакты</router-link>
      </div>
      <div class="language">
        <h5>RU</h5>
        <h5>KZ</h5>
      </div>
      <div class="contacts">
        <p>+7 (777) 777-77-77</p>
        <div class="social-networks desk-none">
          <img src="../assets/icons/whatsapp.png" alt="whatsapp">
          <img src="../assets/icons/instagram.png" alt="instagram">
          <img src="../assets/icons/facebook.png" alt="facebook">
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
name: "Navbar",
  data:()=>({
    mobileNav: false
  }),

  methods: {
    toggleMenu() {
      this.mobileNav = !this.mobileNav;
      if(this.mobileNav){
        document.body.style.overflowY ='hidden'
      }else{
        document.body.style.overflowY ='auto'
      }
    }
  },
    watch:{
    $route(to, from) {
      this.mobileNav = false;
      if(this.mobileNav){
        document.body.style.overflowY ='hidden'
      }else{
        document.body.style.overflowY ='auto'
      }
    },
  }
  

}
</script>

<style lang="scss">
  @import "src/assets/variables";
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1231px;
    margin: 0 auto;
    box-sizing: border-box;

    .desk-none {
      display: none;
    }

    .mob-none {
      display: block;
    }
    .links a {
      margin: 0 10px;
      text-decoration: none;
      font-size: 14px;
      color: $primary;
    }

    button {
      width: 170px;
      height: 50px;
      border-radius: 30px;
      border: 1px solid #181818;
      background: 0;
      outline: 0;
      cursor: pointer;
      font-size: 18px;
      transition: all .5s ease;
      &:hover {
        background: #000;
        color: #fff;
        border: 1px solid #000;
      }
    }
    .social-networks img {
      margin: 0 10px;
    }
    .language {
      h5.lang {
        display: inline-block;
        margin-left: 10px;
        font-family: $bold;
        font-size: 18px;
        &:first-child {
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
        background: #31363A;
        display: block;
        position: relative;
        transition: all 0.5s ease;
        &::before {
          content: "";
          width: 30px;
          height: 5px;
          background: #31363A;
          position: absolute;
          top: -10px;
          transition: all 0.5s ease;
        }
        &::after {
          content: "";
          width: 30px;
          height: 5px;
          background: #31363A;
          position: absolute;
          top: 10px;
          transition: all 0.5s ease;
        }
      }
    }
    .mobile_nav {
      //width: 33%
      transform: translateX(100%);
      position: fixed;
      bottom: 0;
      top: 0;
      right: 0;
      background: #FCF3DA;
      z-index: 12;
      transition: all .5s ease;
      img {
        margin-left: 20px;
      }
      .links {
        a {
          display: block;
          font-size: 18px;
          font-weight: 600;
          padding: 10px;
        }
      }
      .language {
        text-align: center;
        h5 {
          margin-top: 10px;
        }
      }
      .contacts {
        position: relative;
        top: 100px;
        padding: 20px 0;
        text-align: center;
        p {
          margin: 20px 0;
          font-size: 18px;
          line-height: 22px;
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    nav {
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
      width: 95%;
      margin: 0 auto;

      .mobile_nav {
        width: 100%;
      }
    }
  }


</style>