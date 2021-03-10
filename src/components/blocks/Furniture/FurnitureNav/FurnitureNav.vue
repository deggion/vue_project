<template>
  <div class="furniture-nav" :class="{active: active}">
    <b>Категории товаров</b>
    <ul @click="active = !active">
      <li
        :class="{ active: furniture.furniture === 'setVehicleTrackers' }"
        @click="$store.commit('setFurniture', 'setVehicleTrackers')"
      >
        <a href="#up">Автомобильные трекеры</a>
      </li>
      <li
        :class="{ active: furniture.furniture === 'setFuelConsumption' }"
        @click="$store.commit('setFurniture', 'setFuelConsumption')"
      >
        <a href="#up">Датчики расхода топлива</a>
      </li>
      <li
        :class="{ active: furniture.furniture === 'setFuelLevel' }"
        @click="$store.commit('setFurniture', 'setFuelLevel')"
      >
        <a href="#up">Датчики уровня топлива (ДУТ)</a>
      </li>
      <li
        :class="{ active: furniture.furniture === 'setAdditionalSensors' }"
        @click="$store.commit('setFurniture', 'setAdditionalSensors')"
      >
        <a href="#up">Доп.датчики</a>
      </li>
      <li
        :class="{ active: furniture.furniture === 'setPersonalTrackers' }"
        @click="$store.commit('setFurniture', 'setPersonalTrackers')"
      >
        <a href="#up">Персональные трекеры</a>
      </li>
      <li
        :class="{ active: furniture.furniture === 'setSmartphoneSoftware' }"
        @click="$store.commit('setFurniture', 'setSmartphoneSoftware')"
      >
        <a href="#up">ПО для смартфонов</a>
      </li>
    </ul>
    <div class="mobileButton" @click="active = !active">
      <i class="icon-sliders-h"></i>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'furniture-nav',
    data () {
      return {
        active: false
      }
    },
    computed: {
      ...mapState({
        furniture: state => state.furniture
      })
    }
  }
</script>