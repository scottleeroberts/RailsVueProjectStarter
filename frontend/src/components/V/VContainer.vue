<template lang="pug">
div
  .has-text-centered.local-margin(v-if="loading")
    VIcon.fa-spinner.fa-pulse(icon="spinner" fas no-pad xlarge)
  slot(v-else)
</template>

<script>
export default {
  name: 'VContainer',
  props: {
    loading: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.local-margin {
  margin-top: 30px;
}
</style>
