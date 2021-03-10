<template>
  <div>
    <vSlickServices v-bind="settings">
      <v-slick-services-item
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
      />
    </vSlickServices>
  </div>
</template>

<script>
  import vSlickServices from 'vue-slick-carousel'
  import vSlickServicesItem from '@/components/vComponents/v-slick-services/v-slick-services-item'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'v-slick-services',
    components: {
      vSlickServices,
      vSlickServicesItem
    },
    data () {
      return {
        settings: {
          "dots": false,
          "arrows": true,
          "infinite": true,
          "initialSlide": 0,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "swipeToSlide": true,
          responsive: [
            {
              breakpoint: 1300,
              settings: {
                "slidesToShow": 3
              }
            },
            {
              breakpoint: 992,
              settings: {
                "slidesToShow": 2
              }
            },
            {
              breakpoint: 580,
              settings: {
                "slidesToShow": 1
              }
            }
          ]
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