<template>
  <v-app dark>
    <v-app-bar color="primary" fixed app>
      <span class="white--text title ml-3 mr-5">{{ title }}</span>
      <v-spacer />
      <span v-if="$store.state.name" class="white--text title ml-3 mr-5"
        >Name: {{ $store.state.name }}</span
      >
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      fixed: false,
      title: 'XKCD Comics',
    }
  },
}
</script>
