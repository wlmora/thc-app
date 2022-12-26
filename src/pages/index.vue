<script>
export default {
  setup() {
    const logo = '../'
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()

      if (valid)
        alert('Form is valid')
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<template>
  <v-responsive class="mx-auto" max-width="344">
    <v-container class="text-xs-center">
      <v-img src="https://picsum.photos/id/11/500/300" class="my-3" contain height="100" />

      <v-container class="text-xs-center">
        <p class="text-uppercase text-h4">
          THE
          HOSPITALITY
          CENTER
        </p>
      </v-container>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        />

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        />
        <v-btn
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
          color="warning"
          @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-form>
    </v-container>
  </v-responsive>
</template>
