<template>
  <div>
    <ul>
      <li
        v-for="item in itemsSmartphoneSoftware"
        :key="item.id"
      >
        <router-link to="/">
          <img v-if="item.img != ''" :src=" require('@/assets/img/components/blocks/Furniture/SmartphoneSoftware/' + item.img) " alt="">
        </router-link>
        <router-link to="/">{{ item.name }}</router-link>
        <p
          v-if="item.text != ''">
          {{ item.text }}
        </p>
        <router-link to="/">Подробнее</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'smartphone-software',
    data () {
      return {
        itemsSmartphoneSoftware: [
          {
            id: 1,
            img: 'GpsTag.png',
            name: 'GPS Tag — персональный GPS трекер',
            text: 'GPS Tag — полезное мобильное приложение, способное превратить ваш смартфон, планшет или нетбук в GPS трекер. Все, что для этого нужно — доступ в интернет и наличие учетной записи в системе Wialon или GPS Trace. Приложение отлично подходит для персонального мониторинга: дети, родственники, пожилые люди всегда будут под присмотром. Использовать GPS Tag могут и представители малого бизнеса: курьеры, торговые агенты, водители такси.'
          },
          {
            id: 2,
            img: 'WiaTagq.png',
            name: 'WiaTag — персональный GPS трекер',
            text: 'Приложение WiaTag предназначено для использования в сфере мониторинга мобильного персонала. За счет точной фиксации скорости и детальной истории передвижения объекта, WiaTag позволяет осуществлять контроль работы мобильных сотрудников: курьеров, торговых агентов или водителей. Приложение может также быть полезно туристическим компаниям, муниципальным и социальным службам.'
          }
        ]
      }
    }  
  }
</script>