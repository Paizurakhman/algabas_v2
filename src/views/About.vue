<template>
  <div class="about">
    <div class="page_info">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-xl-7 col-md-6 position-static">
            <div class="page_main_img">
              <img src="@/assets/img/about_banner_image.png" alt="" />
            </div>
          </div>
          <div class="col-xl-5 col-md-6">
            <div class="title_page">
              <h1><span class="orange_text">О нас</span> Algabas</h1>
            </div>
            <div class="description_text mt-4">
              <p>
                Детский сад – это не просто место, в котором за ребенком присматривают
                пока родители на работе, это образовательное учреждение,
                где дети всесторонне развиваются, учатся жить в коллективе,
                общаться друг с другом и познают окружающий мир.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about_us">
      <div class="fix_elems">
        <img src="../assets/img/red_tick.svg" alt="">
        <img src="../assets/img/green_star.svg" alt="">
        <img src="../assets/img/blue_romb.svg" alt="">
      </div>
      <div class="container">
        <div class="wrapper">
          <p class="about_title">
            В нашем детском саду царит приятная обстановка, чистота и комфорт вместе с благожелательным и внимательным подходом к каждому ребенку.

            У нас светлые и уютные группы с отдельными игровыми комнатами.

            Мебель для детей изготовлена по всем возрастным группам детей, а именно высота столов, стульев и кроватей соответствует Санитарно-эпидемиологическим  требованиям к дошкольным организациям.

            У нас строго соблюдаются санитарные нормы, своевременно и регулярно проводятся кварцевание и проветривание помещений. Ежедневно обрабатываются все игрушки гиппоаллергенными моющими средствами. В группах всегда чистота и порядок.

            Полноценное сбалансированное 5-разовое питание.
            Каждый день детям готовят свежую еду из высококачественных продуктов, овощей и фруктов.


            Для прогулок на улице у нас обустроена большая озелененная территория с игровыми площадками для каждой группы. В наших просторных беседках проводятся занятия на свежем воздухе. В нашем саду есть много разнообразных деревьев и растений.
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .about_us {
    position: relative;
    background: #FBF9F5;
    padding: 80px 0;
    .fix_elems {
      img {
        &:nth-child(1) {
          left: 1%;
          top: 10%;
        }
        &:nth-child(2) {
          right: 5%;
          top: 1%;
        }
        &:nth-child(3) {
          bottom: 1%;
          left: 1%;
        }
      }
    }
  }
</style>