<template>
  <v-dialog v-model="dialog" persistent max-width="400px">
    <v-card>
      <v-toolbar color="primary" text flat>
        <v-toolbar-title class="headline white--text">
          User name</v-toolbar-title
        >
        <v-spacer />
      </v-toolbar>
      <v-form ref="form" v-model="valid">
        <v-card-text class="mt-5 text-subtitle-1">
          <v-text-field
            v-model="name"
            label="Name"
            :rules="validationRules.name"
            required
            dense
            outlined
          ></v-text-field>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <v-spacer />
        <v-btn class="background-button" :disabled="!valid" @click="saveName()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
    valid: false,
    validationRules: {
      name: [
        (v) => !!v || 'Name is required',
        (v) =>
          (v && v.length >= 3) || 'The name must be longer than 3 characters.',
      ],
    },
    name: '',
  }),
  methods: {
    saveName() {
      this.$store.commit('setName', this.name)
      this.dialog = false
    },
  },
}
</script>
<style lang="scss" scoped>
.background-button {
  background-color: #1976d2 !important;
  color: white !important;
}
</style>
