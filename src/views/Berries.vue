<template>
  <div class="berries">
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img src="@/assets/img/berries_banner_image.png" alt="" />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1><span class="orange_text">{{ groupTitle }}</span> {{ title }}</h1>
            </div>
            <div class="description_text mt-4">
              <p>
                Первые три года - ценнейшее время в жизни вашего ребёнка.
                Сейчас его мозг, как губка, впитывает информацию из окружающего мира:
                названия предметов, устная речь, правила поведения и много-много другого.
              </p>
              <p>
                Зная это, педагоги детского сада ALGABAS стараются дать каждому воспитаннику
                максимум знаний и навыков, которые станут надёжным фундаментом последующей жизни.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my_content">
      <div class="container">
        <div class="wrapper">
          <div class="wrapper_content row">
            <span class="photo col-xl-6 col-md-6 col-12">
              <img src="@/assets/img/photo.png" alt="berries">
            </span>
            <div class="wrapper_title col-xl-6 col-md-6 col-12">
              <h2>Как правильно выстраивать отношения.</h2>
              <p>Дети нашего возраста начинают осознанно взаимодействовать
                со сверстниками. Они общаются друг с другом, как вербально,
                так и при помощи звуков, жестов или мимики.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mode_day">
      <div class="title_page">
        <h1>Режим дня <span class="orange_text">младшая группа “Ягодки”</span></h1>
      </div>
      <div class="container">
        <div class="mode_day_wrapper wrapper">
          <div class="row" v-for="col in 8" :key="col">
            <p class="text_time col-xl-2 col-md-2 col-4">7.00 - 9.00</p>
            <p class="text_title col-xl-10 col-md-10 col-8">Прием, осмотр, игры, утренная гимнастика</p>
          </div>
        </div>
      </div>
    </div>

    <div class="schedule_occupations">
      <div class="title_page">
        <h1>Расписание занятий <span class="orange_text">младшая группа “Ягодки”</span></h1>
      </div>
      <div class="container container_schedule">
        <div class="wrapper">
          <div class="row row_items">
            <p class="days_of_the_week col-xl-4 col-md-4">Понедельник</p>
            <div class="subjects_and_times col-xl-8 col-md-8">
              <div class="row" v-for="subject in 4" :key="subject">
                <p class="subjects col-xl-8 col-md-8 col-8">Развитие речи (1-4 нед)</p>
                <p class="time_of_lessons col-xl-4 col-md-4 col-4">10.00-10.15</p>
              </div>
            </div>
          </div>

          <div class="row row_items">
            <p class="days_of_the_week col-xl-4 col-md-4">Вторник</p>
            <div class="subjects_and_times col-xl-8 col-md-8">
              <div class="row" v-for="subject in 4" :key="subject">
                <p class="subjects col-xl-8 col-md-8 col-8">Развитие речи (1-4 нед)</p>
                <p class="time_of_lessons col-xl-4 col-md-4 col-4">10.00-10.15</p>
              </div>
            </div>
          </div>

          <div class="row row_items">
            <p class="days_of_the_week col-xl-4 col-md-4">Среда</p>
            <div class="subjects_and_times col-xl-8 col-md-8">
              <div class="row" v-for="subject in 4" :key="subject">
                <p class="subjects col-xl-8 col-md-8 col-8">Развитие речи (1-4 нед)</p>
                <p class="time_of_lessons col-xl-4 col-md-4 col-4">10.00-10.15</p>
              </div>
            </div>
          </div>

          <div class="row row_items">
            <p class="days_of_the_week col-xl-4 col-md-4">Четверг</p>
            <div class="subjects_and_times col-xl-8 col-md-8">
              <div class="row" v-for="subject in 4" :key="subject">
                <p class="subjects col-xl-8 col-md-8 col-8">Развитие речи (1-4 нед)</p>
                <p class="time_of_lessons col-xl-4 col-md-4 col-4">10.00-10.15</p>
              </div>
            </div>
          </div>

          <div class="row row_items">
            <p class="days_of_the_week col-xl-4 col-md-4">Пятница</p>
            <div class="subjects_and_times col-xl-8 col-md-8">
              <div class="row" v-for="subject in 4" :key="subject">
                <p class="subjects col-xl-8 col-md-8 col-8">Развитие речи (1-4 нед)</p>
                <p class="time_of_lessons col-xl-4 col-md-4 col-4">10.00-10.15</p>
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
  name: "Berries",
  data() {
    return {
      id: this.$route.params.id,
      groupTitle: ''
    }
  },
  computed: {
    title() {
      if (this.id === 'young_group') {
        this.groupTitle = 'Ягодки'
        return 'младшая группа'
      }
      if (this.id === 'middle_group') {
        this.groupTitle = 'Солнышко'
        return 'средняя группа'
      }
      if (this.id === 'older_group') {
        this.groupTitle = 'Звездочки'
        return 'старшая группа'
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/variables";
  .my_content {
    position: relative;
    padding: 90px 0;
    background: #FBF9F5;

    .photo {
      max-width: 560px;
      img {
        width: 100%;
      }
    }
    .wrapper_title {
      h2 {
        font-weight: 600;
        font-size: 2em;
      }
      p {
        font-size: 1.25em;
      }
    }
  }
  .mode_day {
    background: #FBF9F5;
    padding: 10px 0;
    .mode_day_wrapper {
      max-width: 800px;
      margin: 30px auto;
      p {
        font-size: 1.25em;
      }
      .text_time {
        font-family: $font-family-baby;
      }
      .text_title {
        letter-spacing: 2px;
        font-weight: 600;
      }
    }
  }
  .schedule_occupations {
    background: #FBF9F5;
    padding: 20px 0;
    .container_schedule {
      max-width: 960px;
      margin: 0 auto;
    }
    .row_items {
      margin: 50px 0;
    }
    .days_of_the_week {
      font-size: 1.875em;
      font-weight: 600;
      text-align: left;
    }
    .subjects_and_times {
      p {
        font-size: 1.5em;
      }
    }
  }
</style>