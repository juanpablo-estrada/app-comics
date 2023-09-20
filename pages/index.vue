<template>
  <div>
    <div v-if="loading" class="d-flex justify-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      />
    </div>

    <div v-else class="d-flex justify-space-around">
      <comic-detail
        :comic="currentComic"
        :number-current="numberCurrentComic"
        @updateCurrentComic="getRandomComic"
      />
      <v-divider class="mt-10" vertical />
      <comic-last-rating />
    </div>

    <v-snackbar v-model="snackbar">
      {{ textError }}

      <template #action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <form-user />
  </div>
</template>

<script>
import ComicDetail from '~/components/ComicDetail.vue'
import FormUser from '~/components/FormUser.vue'
import ComicLastRating from '~/components/ComicLastRating.vue'
export default {
  name: 'IndexPage',
  components: {
    ComicDetail,
    FormUser,
    ComicLastRating,
  },
  data() {
    return {
      currentComic: null,
      numberCurrentComic: null,
      loading: true,
      snackbar: false,
      textError: '',
    }
  },
  mounted() {
    this.getRandomComic()
  },
  methods: {
    async getRandomComic(value = null) {
      this.loading = true
      const number = this.getRandomComicNumber(value)

      try {
        const response = await this.fetchComicData(number)
        this.currentComic = response.data
        this.numberCurrentComic = number
        this.loading = false
      } catch (error) {
        this.textError = 'Something went wrong. Please try again later.'
        this.snackbar = true
      }
    },
    getRandomComicNumber(value) {
      return value || Math.floor(Math.random() * 1000)
    },
    async fetchComicData(number) {
      return await this.$axios.get(`/api/${number}/info.0.json`)
    },
  },
}
</script>
