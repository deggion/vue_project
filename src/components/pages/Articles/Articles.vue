<template>
  <div class="articles">
    <div class="container">
      <ArticlesNav />
      <ArticlesContent />
    </div>
  </div>
</template>

<script>
  import ArticlesNav from './ArticlesNav/ArticlesNav'
  import ArticlesContent from './ArticlesContent/ArticlesContent'

  export default {
    name: 'articles',
    components: {
      ArticlesNav,
      ArticlesContent
    },
  }
</script>