export const state = () => ({
  comic: null,
})

export const mutations = {
  setComic(state, comic) {
    state.comic = comic
  },
  rateComic(state, rating) {
    if (state.comic) {
      state.comic.rating = rating
    }
  },
}
