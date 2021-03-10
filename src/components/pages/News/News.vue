<template>
  <div class="news">
    <div class="container">
      <div class="news-sort">
        <div @click="sortFirst = !sortFirst">
          <i class="icon-calendar" title="Сортировать по дате"></i>
          <span>
            <span :class="{toggle: sortFirst}"></span>
          </span>
          <i class="icon-sort-alpha" title="Сортировать по имени"></i>
        </div>
        <div @click="sortSecond = !sortSecond">
          <i class="icon-sort-amount-down" title="По убыванию"></i>
          <span>
            <span :class="{toggle: sortSecond}"></span>
          </span>
          <i class="icon-sort-amount-up" title="По возростанию"></i>
        </div>
      </div>
      <div class="news-elements">
        <ul>
          <li class="news-elements__item">
            <router-link to="/" class="news-elements__item--head">
              <img src="@/assets/img/components/pages/News/wialon.jpg" alt="">
              <router-link to="/">
                <ul>
                  <li>Авг</li>
                  <li>9</li>
                  <li>2019</li>
                </ul>
              </router-link>
            </router-link>
            <b class="news-elements__item--title">ОБНОВЛЕНИЕ WIALON LOCAL 1904</b>
            <div class="news-elements__item--links">
              <router-link to="/">Без рубрики</router-link>
              <router-link to="/">Оставить комментарий</router-link>
            </div>
            <p class="news-elements__item--text">
              Как Вы уже успели заметить, 29.05.2019 мы обновили функционал WialonLocal до последней версии 1904. Более 200 новых разработок, нововведений, оптимизаций и улучшений теперь к Вашим услугам. Среди них: новое приложение FleetRun, Карты погоды для наших аграриев,  возможность получать Уведомления в Телеграмм, оптимизации web-интерфейса и мобильного приложение, оптимизация скорости выполнения сложных отчетов и самой работы сервера …
            </p>
            <router-link class="news-elements__item--more" to="/">
              <span>Read more</span>
              <i class="icon-sort-up"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
        sortFirst: false,
        sortSecond: false
      }
    }
  }
</script>