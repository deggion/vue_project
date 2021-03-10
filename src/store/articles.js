export const ARTICLES = {
  state: () => ({
    articles: 'avia'
  }),
  mutations: {
    setArticle(state, prop) {
      state.articles = prop
    }
  }
}