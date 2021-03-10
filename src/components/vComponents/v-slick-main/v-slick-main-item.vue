<template>
  <div class="v-slick-main-item">
    <div class="container">
      <div>
        <b>{{item_data.title}}</b>
        <div>
          <span></span>
        </div>
        <p>{{item_data.text}}</p>
        <router-link to="/services">Подробнее</router-link>
      </div>
      <div>
        <img v-if="item_data.img != ''" :src="require('@/assets/img/components/blocks/MainSlider/' + item_data.img)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-slick-main-item',
    props: {
      item_data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>