<template>
  <div>
    <div class="articles-content">
      <Avia v-if="articles.articles === 'avia'" />
      <Finance v-if="articles.articles === 'finance'" />
      <Communal v-if="articles.articles === 'communal'" />
      <Bus v-if="articles.articles === 'bus'" />
      <Stroi v-if="articles.articles === 'stroi'" />
      <Gruz v-if="articles.articles === 'gruz'" />
      <Transportation v-if="articles.articles === 'transportation'" />
      <Courier v-if="articles.articles === 'courier'" />
      <Passenger v-if="articles.articles === 'passenger'" />
      <Agricultural v-if="articles.articles === 'agricultural'" />
    </div>
    <div class="articles-author">
      <ul>
        <li>
          <router-link :title="'Все статьи автора ' + author.name" to="/">Автор: {{author.name}}</router-link>
        </li>
        <li :title="date">{{date}}</li>
        <li><a href="#comment">Оставить комментарий</a></li>
      </ul>
    </div>
    <div class="articles-toggle">
      <ul>
        <li>
          <i class="icon-chevron-left"></i>
          <div>
            <span>Предыдущая</span>
            <b>Коммунальные службы</b>
          </div>
        </li>
        <li>
          <i class="icon-chevron-left"></i>
          <div>
            <span>Следующая</span>
            <b>Авиа и водный транспорт</b>
          </div>
        </li>
      </ul>
    </div>
    <Comment id="comment" />
  </div>
</template>

<script>
  import Avia from './Avia/Avia'
  import Finance from './Finance/Finance'
  import Communal from './Communal/Communal'
  import Bus from './Bus/Bus'
  import Stroi from './Stroi/Stroi'
  import Gruz from './Gruz/Gruz'
  import Transportation from './Transportation/Transportation'
  import Courier from './Courier/Courier'
  import Passenger from './Passenger/Passenger'
  import Agricultural from './Agricultural/Agricultural'

  import Comment from '@/components/blocks/Comment/Comment'

  import { mapState } from 'vuex'

  export default {
    name: 'articles-content',
    components: {
      Avia,
      Finance,
      Communal,
      Bus,
      Stroi,
      Gruz,
      Transportation,
      Courier,
      Passenger,
      Agricultural,
      Comment
    },
    data () {
      return {
        author: {
          name: 'morales'
        },
        date: '06.08.2019'
      }
    },
    computed: {
      ...mapState({
        articles: state => state.articles
      })
    }
  }
</script>