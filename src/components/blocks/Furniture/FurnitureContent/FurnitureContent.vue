<template>
  <div class="furniture-content">
    <div class="furniture-content__sort" aria-label="Заказ в магазине">
      <select name="" id="">
        <option value="menu_order" selected>Исходная сортировка</option>
        <option value="popularity">По популярности</option>
        <option value="rating">По рейтингу</option>
        <option value="date">Сортировка по более позднему</option>
        <option value="price">Цены: по возрастанию</option>
        <option value="price-desc">Цены: по убыванию</option>
      </select>
      <span>Показ всех 20 элементов</span>
    </div>
    <div class="furniture-content__elements">
      <VehicleTrackers v-if="furniture.furniture === 'setVehicleTrackers'" />
      <FuelConsumption v-if="furniture.furniture === 'setFuelConsumption'" />
      <FuelLevel v-if="furniture.furniture === 'setFuelLevel'" />
      <AdditionalSensors v-if="furniture.furniture === 'setAdditionalSensors'" />
      <PersonalTrackers v-if="furniture.furniture === 'setPersonalTrackers'" />
      <SmartphoneSoftware v-if="furniture.furniture === 'setSmartphoneSoftware'" />
    </div>
  </div>
</template>

<script>
  import VehicleTrackers from '@/components/blocks/Furniture/FurnitureContent/VehicleTrackers/VehicleTrackers'
  import FuelConsumption from '@/components/blocks/Furniture/FurnitureContent/FuelConsumption/FuelConsumption'
  import FuelLevel from '@/components/blocks/Furniture/FurnitureContent/FuelLevel/FuelLevel'
  import AdditionalSensors from '@/components/blocks/Furniture/FurnitureContent/AdditionalSensors/AdditionalSensors'
  import PersonalTrackers from '@/components/blocks/Furniture/FurnitureContent/PersonalTrackers/PersonalTrackers'
  import SmartphoneSoftware from '@/components/blocks/Furniture/FurnitureContent/SmartphoneSoftware/SmartphoneSoftware'
  import { mapState } from 'vuex'

  export default {
    name: 'furniture-content',
    components: {
      VehicleTrackers,
      FuelConsumption,
      FuelLevel,
      AdditionalSensors,
      PersonalTrackers,
      SmartphoneSoftware
    },
    computed: {
      ...mapState({
        furniture: state => state.furniture
      })
    }
  }
</script>