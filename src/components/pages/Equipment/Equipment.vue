<template>
  <div>
    <div class="container">
      <Furniture />
    </div>
  </div>
</template>

<script>
  import Furniture from '@/components/blocks/Furniture/Furniture'

  export default {
    name: 'equipment',
    components: {
      Furniture
    }
  }
</script>