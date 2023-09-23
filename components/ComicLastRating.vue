<template>
  <div v-if="$store.state.comics.comic">
    <v-card class="mx-auto my-5" max-width="800px">
      <v-toolbar color="#9C27B0" text flat>
        <v-toolbar-title class="headline white--text"
          >Last rated comic /
          {{ $store.state.comics.comic.title }}</v-toolbar-title
        >
        <v-spacer />
      </v-toolbar>
      <v-img
        max-width="800px"
        max-height="400px"
        :src="$store.state.comics.comic.img"
        :alt="$store.state.comics.comic.alt"
      />
      <v-card-text> {{ $store.state.comics.comic.transcript }} </v-card-text>
      <v-card-actions class="pa-4">
        Rate this Comic
        <v-spacer></v-spacer>
        <span class="black--text text-caption mr-2">
          ({{ $store.state.comics.comic.rating }})
        </span>
        <v-rating
          v-model="$store.state.comics.comic.rating"
          background-color="grey lighten-2"
          color="yellow accent-4"
          dense
          disabled
          size="30"
        ></v-rating>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss"></style>
