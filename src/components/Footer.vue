<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-4 col-12 logo_block">
          <img class="logo" src="../assets/logo-big.png" alt="logo-img" />
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-12">
          <div class="menu margin_all">
            <p class="title">{{$locale[$lang].footer.main}}</p>
            <router-link to="/">{{
              $locale[$lang].navBarCategory.main
            }}</router-link>
            <router-link to="/about">{{
              $locale[$lang].navBarCategory.aboutUs
            }}</router-link>
            <router-link to="/sales">{{
              $locale[$lang].navBarCategory.promotions
            }}</router-link>
            <router-link to="/reviews">{{
              $locale[$lang].navBarCategory.testImonials
            }}</router-link>
            <router-link to="/services">{{
              $locale[$lang].navBarCategory.services
            }}</router-link>
            <router-link to="/our-team">{{
              $locale[$lang].navBarCategory.ourEmployees
            }}</router-link>
            <router-link to="/gallery">{{
              $locale[$lang].navBarCategory.gallery
            }}</router-link>
            <router-link to="/contacts">{{
              $locale[$lang].navBarCategory.contacts
            }}</router-link>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12" v-if="contacts">
          <div class="contacts margin_all">
            <p class="title">{{$locale[$lang].footer.contacts}}</p>
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
                <a :href="'tel:' + contacts.phone_number">{{
                  contacts.phone_number
                }}</a>
              </div>
            </div>

            <div class="mail" v-if="contacts.email">
              <div class="contacts_head_title">
                <img src="../assets/icons/footer-icons/mail.svg" alt="" />
                <h5>Почта:</h5>
              </div>
              <div class="end_element">
                <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-12 col-12">
          <div class="map margin_all">
            <div id="map" style="width: 100%; height: 100%"></div>
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
  data: () => ({}),
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
    padding-top: 2px;
    img {
      margin-right: 10px;
    }
    h5 {
      margin-bottom: 0;
      font-size: 15px;
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
    padding-bottom: 5px;
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
}
@media screen and (max-width: 576px) {
  footer {
    padding: 0 20px;
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