<template lang="pug">
.columns
  .column.is-4.is-offset-4
    form(@submit.prevent="login")
      .local-logo
        span.icon
          i.fa.fa-laptop.fa-5x
      .notification.is-danger(v-if="error")
        span {{error}}
        button.delete(type="button" @click.prevent="error = null")
      .field
        p.control.has-icons-left
          input.input(type="email" v-model="email" placeholder="Email")
          span.icon.is-small.is-left
            i.fa.fa-envelope
      .field
        p.control.has-icons-left
          input.input(type="password" v-model="password" placeholder="Password")
          span.icon.is-small.is-left
            i.fa.fa-lock
      .field
        p.control
          button.button.is-success.is-fullwidth(type="submit" @click.prevent="login") Login
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      })
      .then(() => {
        this.$router.push('/')
      })
      .catch(error => {
        this.error = error.response.data.error
      })
    },
  },
}
</script>

<style scoped>
.local-logo {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
