<template>
  <div>
    <ul>
      <li
        v-for="item in itemsPersonalTrackers"
        :key="item.id"
      >
        <router-link to="/">
          <img v-if="item.img != ''" :src=" require('@/assets/img/components/blocks/Furniture/PersonalTrackers/' + item.img) " alt="">
        </router-link>
        <router-link to="/">{{ item.name }}</router-link>
        <p v-if="item.text != ''">
          <b v-if="item.boldText != ''">{{ item.boldText }}</b>
          {{ item.text }}
        </p>
        <router-link to="/">Подробнее</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'personal-trackers',
    data () {
      return {
        itemsPersonalTrackers: [
          {
            id: 1,
            img: 'UA200.png',
            name: 'ПЕРСОНАЛЬНЫЙ GPS ТРЕКЕР — UA200',
            text: 'UA200 – это современный A-GPS персональный трекер с широкими возможностями. Компактный, легкий, защищенный от воздействия влаги, чувствительный приемник с сокращенным интервалом определения координат.'
          },
          {
            id: 2,
            img: 'ua300.png',
            name: 'ПЕРСОНАЛЬНЫЙ GPS ТРЕКЕР — UA300',
            boldText: 'UA300',
            text: 'в водостойком корпусе является мощным трекером, предназначенным для контроля местоположения людей, животных, транспортных средств и грузов.'
          },
          {
            id: 3,
            img: 'ua3000.png',
            name: 'ПЕРСОНАЛЬНЫЙ GPS ТРЕКЕР — UA3000',
            text: 'Персональный GPS/GSM трекер Teltonika HandHeld UA3000 является переносным терминалом с возможностью соединения посредством GSM и GPS, способным получить координаты устройства и передать их по GSM сети.'
          },
          {
            id: 4,
            img: 'ua4000.png',
            name: 'Персональный GPS трекер — UA4000',
            text: 'Основные сферы применения — Обеспечение безопасности и определение местоположение детей и пожилых людей в режиме реального времени.'
          },
          {
            id: 5,
            img: 'SmartWatch.png',
            name: 'Умные часы Smart Watch',
            text: 'Каждому родителю знакомо чувство беспокойства за ребенка, и это естественно, ведь дети – самое дорогое что у них есть. Именно поэтому были разработаны Smart Watch, часы для детей, способные подарить вам чувство спокойствия.'
          },
        ]
      }
    }
  }
</script>