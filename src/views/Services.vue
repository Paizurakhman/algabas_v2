<template>
  <div>
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img :src="$staticImageUrl.staticImgUrl(card.image)" alt="" />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1><span class="orange_text">Услуги</span> наших клиентов</h1>
            </div>
            <div class="description_text mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                libero sed est sapien, risus, tellus sed pulvinar. Sit sed id
                amet leo mauris sollicitudin vestibulum, arcu erat. Sed massa
                nunc nullam ullamcorper sit lectus sed. Odio scelerisque
                adipiscing pellentesque nisi, suscipit. Ut porta lectus vitae
                nibh. Cum pellentesque ullamcorper semper aliquam fusce lectus
                purus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services_content">
      <div class="container">
        <div class="advantages">
          <div class="row">
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <!-- <img src="../assets/icons/1.png" alt="img" /> -->
                <p>Увлекательные мероприятия</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <!-- <img src="../assets/icons/2.png" alt="img" /> -->
                <p>Вкусная и полезная еда</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <img src="../assets/icons/3.png" alt="img" />
                <p>Защищаем и оберегаем</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <!-- <img src="../assets/icons/4.png" alt="img" /> -->
                <p>Проффесиональные педагоги</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <!-- <img src="../assets/icons/5.png" alt="img" /> -->
                <p>Креативное развитие</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <!-- <img src="../assets/icons/6.png" alt="img" /> -->
                <p>Камеры наблюдения</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <!-- <img src="../assets/icons/7.png" alt="img" /> -->
                <p>Современные методы</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-lg-3">
              <div class="advantages_card">
                <!-- <img src="../assets/icons/8.png" alt="img" /> -->
                <p>Развитая медицина</p>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed-items">
          <!-- <img class="moon" src="../assets/img/Vector4.png" alt="" /> -->
          <!-- <img class="fiveangle" src="../assets/img/fiveangle.png" alt="" /> -->
          <!-- <img class="star" src="../assets/img/star.svg" alt="" /> -->
        </div>
        <div class="additional">
          <div class="title_page">
            <h2>Дополнительные <span class="orange_text">занятия</span></h2>
          </div>
          <div class="lessons_content">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="advantages_card">
                  <!-- <img src="@/assets/img/less1.svg" alt="" /> -->
                  <p>Тхеквондо</p>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="advantages_card">
                  <!-- <img src="@/assets/img/less2.svg" alt="" /> -->
                  <p>Хореография</p>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="advantages_card">
                  <!-- <img src="@/assets/img/less3.svg" alt="" /> -->
                  <p>Моторика</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="additional">
          <div class="title_page">
            <h2>
              Дополнительные платные услуги, <br />
              <span class="orange_text">для детей посещающих сад:</span>
            </h2>
          </div>
          <div class="lessons_content">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="advantages_card">
                  <!-- <img src="@/assets/img/less1.svg" alt="" /> -->
                  <p>
                    <span class="b_text">Шахматы:</span> 10 000 тг. в мес. в
                    группе 4-5 детей, от 4-х лет и старше.
                  </p>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="advantages_card">
                  <!-- <img src="@/assets/img/less2.svg" alt="" /> -->
                  <p>
                    <span class="b_text">Логопед:</span> 1 занятие 20 мин. -
                    4000 тн. после
                  </p>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="advantages_card">
                  <!-- <img src="@/assets/img/less3.svg" alt="" /> -->
                  <p>
                    <span class="b_text">Развозка в обе стороны :</span> 20 000
                    тн. в месяц на 1 ребенка.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    servicesPageData: null
  }),
  mounted() {
    let slug = this.$route.params.id;
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/services?lang=${this.$lang}`
      )
      .then((response) => (this.servicesPageData = response.data));
  },
};
</script>

<style lang="scss">
.services_content {
  background-color: #fbf9f5;
  .advantages {
    padding: 120px 0 40px;
    position: relative;
  }
}
.advantages_card {
  text-align: center;
  max-width: 70%;
  margin: 0 auto 30px;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 15px;
  }
}
.additional {
  margin-top: 50px;
}
.lessons_content {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 80px 0 50px;
  .b_text {
    font-weight: 600;
    display: block;
  }
}
.fixed-items {
  img {
    position: absolute;
    &:first-child {
      left: 9%;
      top: 90px;
    }
    &:nth-child(2) {
      right: 12%;
      top: 60px;
    }
    &:nth-child(3) {
      left: 5%;
      bottom: 160px;
    }
  }
}
</style>