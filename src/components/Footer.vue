<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <img class="logo" src="../assets/logo-big.png" alt="logo-img">
        </div>
      <div class="col-xl-3">
        <div class="menu padding">
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
        <div class="col-xl-3">
        <div class="contacts padding">
          <p class="title">Контакты</p>

            <img src="../assets/icons/footer-icons/address.svg" alt="">
            <div class="address">
              <h5>Адрес:</h5>
              <p>Москва, IQ-Park
                Ул. Угрешская, д.2, стр. 146</p>
            </div>

            <img src="../assets/icons/footer-icons/call.svg" alt="">
            <div class="phone">
              <h5 >Телефон:</h5>
              <a href="tel: +7(777) 777-77-77">+7 (777) 777-77-77</a>
            </div>

            <img src="../assets/icons/footer-icons/mail.svg" alt="">
            <div class="mail">
              <h5>Почта:</h5>
              <a href="mailto: algabas@alga.kz">algabas@alga.kz</a>
            </div>
        </div>
        </div>
        <div class="col-xl-3">
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6318.671017469124!2d76.86046120570192!3d43.22665268251757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x526479d5fcfdeff7!2sMOSKVA%20metropolitan!5e0!3m2!1sen!2skz!4v1618835105926!5m2!1sen!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
  footer {
    background: #FBF9F5;

    .padding {
      padding: 50px 0;
    }
      img {
        padding-right: 40px;
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
      .contacts {
        margin-left: -27%;
        padding-right: 35px;
        .container {
          display: flex;
          align-items: flex-start;
          box-sizing: border-box;
          margin-top: 20px;
          img {
            padding: 3px 10px 0 0;
          }
          h5 {
            margin-bottom: 10px;
          }
        }

        h5 {
          font-size: 15px;
          align-items: center;
          font-weight: 600;
        }
      }
      .map {
        margin-top: 60px;
        max-height: 300px;
        iframe {
          width: 100%;
          height: 100%;
        }
      }
  }
@media screen and (max-width: 576px) and (min-width: 769px){
  .footer {
    grid-template-columns: repeat(1, 1fr) !important;

    .contacts {
      margin: 0 0 0 50px !important;
    }

    .map {
      display: flex;
      justify-content: center;
      margin: 0 !important;
      padding-bottom: 50px;

      iframe {
        max-width: 220px !important;
      }
    }

    .logo {
      padding: 0 !important;
      width: 220px;
      margin: 0 auto;
    }

    .contacts {
      .container {
        padding: 0;
      }
    }

    .menu, .contacts {
      margin-left: 50px;
      padding: 10px !important;
    }
  }
}
</style>