<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-4 col-12 logo_block">
          <img class="logo" src="../assets/logo-big.png" alt="logo-img" />
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-12">
          <div class="menu margin_all">
            <p class="title">Меню</p>
            <router-link to="/">Главная</router-link>
            <router-link to="/about">О нас</router-link>
            <router-link to="/sales">Акции</router-link>
            <router-link to="/reviews">Отзывы</router-link>
            <router-link to="/ourTeam">Наши сотрудники</router-link>
            <router-link to="/gallery">Галерея</router-link>
            <router-link to="/contacts">Контакты</router-link>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12" v-if="contacts">
          <div class="contacts margin_all">
            <p class="title">Контакты</p>
            <div class="address" v-if="contacts.address">
              <div class="contacts_head_title">
                <img src="../assets/icons/footer-icons/address.svg" alt="" />
                <h5>Адрес:</h5>
              </div>
              <div class="end_element">
                <p>{{ contacts.address }}</p>
              </div>
            </div>

            <div class="phone" v-if="contacts.phone_number">
              <div class="contacts_head_title">
                <img src="../assets/icons/footer-icons/call.svg" alt="" />
                <h5>Телефон:</h5>
              </div>
              <div class="end_element">
                <a :href="'tel:'+ contacts.phone_number">{{ contacts.phone_number }}</a>
              </div>
            </div>

            <div class="mail" v-if="contacts.email">
              <div class="contacts_head_title">
                <img src="../assets/icons/footer-icons/mail.svg" alt="" />
                <h5>Почта:</h5>
              </div>
              <div class="end_element" >
                <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-12">
          <div class="map margin_all">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6318.671017469124!2d76.86046120570192!3d43.22665268251757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x526479d5fcfdeff7!2sMOSKVA%20metropolitan!5e0!3m2!1sen!2skz!4v1618835105926!5m2!1sen!2skz"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["contacts"],
  data:()=>({
  }),

};
</script>

<style lang="scss">
footer {
  padding: 50px 0;
  background: #fbf9f5;

  img.logo {
    max-width: 300px;
  }

  .contacts {
    .end_element {
      margin-left: 20px;
      margin-top: 15px;
      font-size: 15px;
      a {
        text-decoration: none;
        color: #181818;
      }
    }
    .mail {
      margin-top: 15px;
    }
  }

  .contacts_head_title {
    display: flex;
    img {
      margin-right: 10px;
    }
    h5 {
      margin-bottom: 0;
    }
  }

  .title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24.5px;
    margin-bottom: 30px;
  }

  .menu a {
    display: block;
    padding: 5px 0;
    font-size: 15px;
    text-decoration: none;
    color: #181818;
  }
  .map {
      max-width: 300px;
      height: 300px;
      margin-left: auto;
      iframe {
        width: 100%;
        height: 100%;
      }
    }

  @media screen and (max-width: 576px){
    footer {
      padding: 0 20px;
      .logo_block {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  footer {
    padding: 50px 20px;
    .logo_block {
      text-align: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .margin_all {
    margin-bottom: 30px;
  }
  .map {
    max-width: 100% !important;
  }
}

@media screen and (max-width: 1024px) {
  img.logo {
    max-width: 200px !important;
  }
}
</style>