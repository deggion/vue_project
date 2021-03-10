<template>
  <div class="mainSlider">
    <v-slick-main 
      :carousel_data="sliderItems"
    />
  </div>
</template>

<script>
  import vSlickMain from '@/components/vComponents/v-slick-main/v-slick-main'

  export default {
    name: 'main-slider',
    components: {
      vSlickMain
    },
    data () {
      return {
        sliderItems: [
          {
            id: 1,
            title: 'Система GPS мониторинга',
            text: 'Система позволяет определить координаты местонахождения, направление транспорта, скорость движения, а также температуру в рефрижераторе, расход топлива, что позволит сэкономить время, топливо и пробег.',
            background: 'gruzz.jpg',
            img: 'pc.png'
          },
          {
            id: 2,
            title: 'Контроль топлива и ГСМ',
            text: 'Система контроля расхода топлива предусматривает использование нескольких вариантов возможного мониторинга',
            img: ''
          }
        ]
      }
    }
  }
</script>