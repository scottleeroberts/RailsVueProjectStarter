<template lang="pug">
#app
  #nav
    TheNavbar
  #main-content.section
    .container
      RouterView
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
}
</script>

<style scoped>
#main-content {
  margin-top: 60px;
  padding-top: 0px !important;
}
</style>
