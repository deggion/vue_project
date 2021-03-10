<template>
  <div class="v-slick-services-item">
    <router-link to="/services">
      <img :src=" require('@/assets/img/components/pages/Services/' + item_data.img) " alt="">
      <i></i>
    </router-link>
    <router-link to="/services">{{ item_data.title }}</router-link>
    <p>{{ item_data.text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'v-slick-services-item',
    props: {
      item_data: {
        type: Object,
        default: () => {}
      }
    },
    computed: {}
  }
</script>