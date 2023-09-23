<template>
  <div class="mb-7">
    <div v-if="loading" class="d-flex justify-center mb-10">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      />
    </div>
    <v-card v-else class="mx-auto my-5" max-width="800px">
      <v-toolbar color="#1976d2" text flat>
        <v-toolbar-title class="headline white--text">{{
          comic.title
        }}</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-img
        max-width="800px"
        max-height="400px"
        :src="comic.img"
        :alt="comic.alt"
      />
      <v-card-text> {{ comic.transcript }} </v-card-text>
      <v-card-actions class="pa-4">
        Rate this Comic
        <v-spacer></v-spacer>
        <span class="black--text text-caption mr-2"> ({{ rating }}) </span>
        <v-rating
          v-model="rating"
          background-color="grey lighten-2"
          color="yellow accent-4"
          dense
          hover
          size="30"
          @change="rateComic()"
        ></v-rating>
      </v-card-actions>
    </v-card>

    <div class="d-flex justify-space-between">
      <v-btn color="red" dark @click="getRandomComic(numberCurrentComic - 1)">
        <v-icon left> mdi-skip-previous </v-icon> Prev
      </v-btn>
      <v-btn color="primary" dark @click="getRandomComic()"> Random </v-btn>
      <v-btn color="red" dark @click="getRandomComic(numberCurrentComic + 1)">
        Next
        <v-icon right> mdi-skip-next </v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comic: {
      type: Object,
      default: null,
    },
    numberCurrent: {
      type: Number,
      default: null,
    },
    loading: { Boolean, default: true },
  },
  data: () => ({
    rating: null,
  }),
  watch: {
    rating(val) {
      this.$store.commit('comics/setComic', this.comic)
      this.$store.commit('comics/rateComic', val)
    },
  },
  methods: {
    getRandomComic(value) {
      this.$emit('updateCurrentComic', value)
    },
  },
}
</script>
<style lang="scss"></style>
