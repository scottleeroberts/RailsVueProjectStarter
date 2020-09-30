<template lang="pug">
RouterView
</template>

<script>
import { authComputed } from '@/store/helpers'

export default {
  name: 'App',
  computed: {
    ...authComputed,
  },
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('auth/setUserData', userData)
    }
  },
}
</script>

<style scoped>
#main-content {
  margin-top: 60px;
  padding-top: 0px !important;
}
</style>
