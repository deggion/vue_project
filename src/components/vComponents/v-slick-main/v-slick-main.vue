<template>
  <div>
    <vSlickMain v-bind="settings">
      <v-slick-main-item 
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </vSlickMain>
  </div>
</template>

<script>
  import vSlickMain from 'vue-slick-carousel'
  import vSlickMainItem from '@/components/vComponents/v-slick-main/v-slick-main-item'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'v-slick-main',
    components: {
      vSlickMain,
      vSlickMainItem
    },
    data () {
      return {
        settings: {
          "dots": false,
          "arrows": false,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "speed": 0,
          "fade": true,
          "infinite": true,
          "autoplay": true,
          "autoplaySpeed": 10000,
          "swipeToSlide": false,
          "initialSlide": 0,
          "pauseOnFocus": false,
          "pauseOnHover": false
        }
      }
    },
    props: {
      carousel_data: {
        type: Array,
        default: () => []
      }
    }
  }
</script>