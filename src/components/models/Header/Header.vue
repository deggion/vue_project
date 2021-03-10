<template>
  <div class="header">
    <div class="container">
      <div class="header-logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="logo">
        </router-link>
      </div>
      <div class="backgroundMobile" :class="{active: active}" @click="active = !active"></div>
      <ul class="header-list mobileNav" :class="{active: active}" @click="active = !active">
          <li :class="{ active: $route.name === 'Home' }">
            <router-link to="/">Главная</router-link>
          </li>
          <li :class="{ active: $route.name === 'Equipment' }">
            <router-link to="/equipment">Оборудование</router-link>
          </li>
          <li :class="{ active: $route.name === 'Solutions' }">
            <router-link to="/solutions">Решения</router-link>
          </li>
          <li :class="{ active: $route.name === 'Services' }">
            <router-link to="/services">Услуги</router-link>
          </li>
          <li :class="{ active: $route.name === 'Software' }">
            <router-link to="/software">ПО</router-link>
          </li>
          <li :class="{ active: $route.name === 'Cost' }">
            <router-link to="/cost">Стоимость</router-link>
          </li>
          <li>
            <a href="http://wiki.monline.com.ua/display/WIK/FAQ">Wiki</a>
          </li>
          <li :class="{ active: $route.name === 'News' }">
            <router-link to="/news">Новости</router-link>
          </li>
          <li :class="{ active: $route.name === 'Contacts' }">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>
      <div class="topBar">
        <div class="container">
          <ul>
            <li>044</li>
            <li>096</li>
            <li>066</li>
            <li>093</li>
          </ul>
          <span>334 32 85</span>
        </div>
      </div>
      <div @click="active = !active" class="mobileBurger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="closeMobileNav" :class="{active: active}" @click="active = !active">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-top',
  data () {
    return {
      active: false
    }
  },
  methods: {
    stickyTop () {
      window.addEventListener('scroll', function(){
        const headerTop = document.querySelector(".header")
        headerTop.classList.toggle('sticky', window.scrollY > 74)
      })
      console.log('done')
    }
  },
  mounted() {
    this.stickyTop()
  }
}
</script>