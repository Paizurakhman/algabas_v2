<template>
  <div class="GroupPage" v-if="groupPageData">
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img
                :src="$staticImageUrl.staticImgUrl(groupPageData.groups.image)"
                alt=""
              />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1>
                <span class="orange_text">{{ groupPageData.groups.name }}</span>
                {{ groupPageData.groups.title }}
              </h1>
            </div>
            <div class="description_text mt-4">
              <span v-html="groupPageData.groups.description"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my_content">
      <div class="container">
        <div
          class="wrapper"
          v-for="(card, index) in groupPageData.group_blocks"
          :key="index"
        >
          <div class="wrapper_content row" v-if="index % 2">
            <span class="photo col-xl-6 col-md-6 col-12">
              <img
                :src="$staticImageUrl.staticImgUrl(card.image)"
                alt="GroupPage.vue"
              />
            </span>
            <div class="wrapper_title col-xl-6 col-md-6 col-12">
              <h2>{{ card.title }}</h2>
              <span v-html="card.description"></span>
            </div>
          </div>
          <div class="wrapper_content row" v-else>
            <div class="wrapper_title col-xl-6 col-md-6 col-12">
              <h2>{{ card.title }}</h2>
              <span v-html="card.description"></span>
            </div>
            <span class="photo col-xl-6 col-md-6 col-12">
              <img
                :src="$staticImageUrl.staticImgUrl(card.image)"
                alt="GroupPage.vue"
              />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mode_day">
      <div class="title_page">
        <h1>
          Режим дня
          <div class="title_group">
            <span class="orange_text">{{ groupPageData.groups.title }}</span>
            “{{ groupPageData.groups.name }}”
          </div>
        </h1>
      </div>
      <div class="container">
        <div class="mode_day_wrapper wrapper">
          <div
            class="row"
            v-for="(col, index) in groupPageData.daily_regime"
            :key="index"
          >
            <p class="text_time col-xl-2 col-md-2 col-4">{{ col.time }}</p>
            <p class="text_title col-xl-10 col-md-10 col-8">
              {{ col.title }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="schedule_occupations">
      <div class="title_page">
        <h1>
          Расписание занятий
          <div class="title_group">
            <span class="orange_text">{{ groupPageData.groups.title }}</span>
            “{{ groupPageData.groups.name }}”
          </div>
        </h1>
      </div>
      <div class="container container_schedule">
        <div class="wrapper">
          <div
            class="row row_items"
            v-for="subject in groupPageData.time_table"
            :key="subject.id"
          >
            <p class="days_of_the_week col-xl-4 col-md-4">
              {{ subject.day_name }}
            </p>
            <div class="subjects_and_times col-xl-8 col-md-8">
              <div
                class="row"
                v-for="subject in subject.data"
                :key="subject.id"
              >
                <p
                  class="subjects col-xl-8 col-md-8 col-8"
                  :style="{ color: subject.color_code }"
                >
                  {{ subject.title }}
                </p>
                <p class="time_of_lessons col-xl-4 col-md-4 col-4">
                  {{ subject.time }}
                </p>
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
  name: "GroupPage.vue",
  data() {
    return {
      id: this.$route.params.id,
      groupTitle: "",
      groupPageData: null,
    };
  },
  computed: {
    title() {
      if (this.id === "young_group") {
        this.groupTitle = "Ягодки";
        return "младшая группа";
      }
      if (this.id === "middle_group") {
        this.groupTitle = "Солнышко";
        return "средняя группа";
      }
      if (this.id === "older_group") {
        this.groupTitle = "Звездочки";
        return "старшая группа";
      }
    },
  },
  mounted() {
    let slug = this.$route.params.id;
    this.$axios
      .get(
        `http://www.back-collibri.astudiodigital.ru/api/group/${slug}?lang=${this.$lang}`
      )
      .then((response) => (this.groupPageData = response.data));
  },
};
</script>

<style lang="scss">
@import "../assets/variables";
.title_group{
  display: flex;
  align-items: center;
  justify-content: center;
}
.my_content {
  position: relative;
  padding: 90px 0;
  background: #fbf9f5;

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
  background: #fbf9f5;
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
.wrapper_content {
  margin-bottom: 60px;
}
.schedule_occupations {
  background: #fbf9f5;
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