<template>
  <div class="furniture">
    <FurnitureNav />
    <FurnitureContent />
  </div>
</template>

<script>
  import FurnitureNav from '@/components/blocks/Furniture/FurnitureNav/FurnitureNav'
  import FurnitureContent from '@/components/blocks/Furniture/FurnitureContent/FurnitureContent'

  export default {
    name: 'furniture',
    components: {
      FurnitureNav,
      FurnitureContent
    }
  }
</script>