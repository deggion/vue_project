<template>
  <div>
    <vSlickMonitoring v-bind="settings">
      <v-slick-monitoring-item
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </vSlickMonitoring>
  </div>
</template>

<script>
  import vSlickMonitoring from 'vue-slick-carousel'
  import vSlickMonitoringItem from '@/components/vComponents/v-slick-monitoring/v-slick-monitoring-item'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'v-slick-monitoring',
    components: {
      vSlickMonitoring,
      vSlickMonitoringItem
    },
    data () {
      return {
        settings: {
          "dots": false,
          "arrows": true,
          "infinite": true,
          "initialSlide": 0,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "swipeToSlide": true,
          "adaptiveHeight": true
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