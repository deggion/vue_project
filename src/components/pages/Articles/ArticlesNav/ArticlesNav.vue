<template>
  <div class="articles-nav">
   <ul>
      <li 
        v-for="item in navItems"
        :key="item.id"
        :class="{active: articles.articles === item.name}"
        @click="$store.commit('setArticle', item.name)"
        :title="item.title"
      >
        <a href="#up"></a>
        <img :src="require('@/assets/img/components/pages/Articles/Nav/' + item.img)" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'articles-nav',
    data () {
      return {
        navItems: [
          {
            id: 1,
            title: 'Авиа и водный транспорт',
            name: 'avia',
            img: 'avia.jpg',
          },
          {
            id: 2,
            title: 'Финансовый сектор',
            name: 'finance',
            img: 'finance.jpg'
          },
          {
            id: 3,
            title: 'Коммунальные службы',
            name: 'communal',
            img: 'communal.jpg'
          },
          {
            id: 4,
            title: 'Мониторинг пассажироперевозок',
            name: 'bus',
            img: 'bus.jpg'
          },
          {
            id: 5,
            title: 'Строительный комплекс',
            name: 'stroi',
            img: 'stroi.jpg'
          },
          {
            id: 6,
            title: 'Дистрибуция',
            name: 'gruz',
            img: 'gruz.jpg'
          },
          {
            id: 7,
            title: 'Мониторинг грузоперевозок',
            name: 'transportation',
            img: 'gps_monitoring.jpg'
          },
          {
            id: 8,
            title: 'Персональный мониторинг',
            name: 'courier',
            img: 'courier.jpg'
          },
          {
            id: 9,
            title: 'GPS мониторинг легкового транспорта',
            name: 'passenger',
            img: 'legkovoi_transport.jpeg'
          },
          {
            id: 10,
            title: 'Агропромышленный комплекс',
            name: 'agricultural',
            img: 'selhoztech.gif'
          }
        ]
      }
    },
    props: {
      item_data: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      ...mapState({
        articles: state => state.articles
      })
    }
  }
</script>