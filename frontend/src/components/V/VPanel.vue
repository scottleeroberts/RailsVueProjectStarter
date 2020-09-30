<template lang="pug">
.panel(:class="cssClasses")
  .panel-heading.local-thin {{title}}
  .panel-body
    .panel-block
      .container
        slot
</template>

<script>
export default {
  name: 'VPanel',
  props: {
    title: { type: String, required: true },
    primary: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
  },
  computed: {
    cssClasses() {
      return {
        'is-primary': this.primary,
        'is-link': this.link,
        'is-info': this.info,
        'is-success': this.success,
        'is-warning': this.warning,
        'is-danger': this.danger,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.local-thin {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
</style>
