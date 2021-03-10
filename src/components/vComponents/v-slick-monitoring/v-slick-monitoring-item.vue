<template>
  <div class="v-slick-monitoring-item">
    <img :src=" require('@/assets/img/components/blocks/Monitoring/' + item_data.img) " alt="">
    <b>{{ item_data.title }}</b>
    <p>{{ item_data.text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'v-slick-monitoring-item',
    props: {
      item_data: {
        type: Object,
        default: () => {}
      }
    },
    computed: {}
  }
</script>