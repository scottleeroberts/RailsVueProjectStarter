<template lang="pug">
span(:class="[iconClass, size, fixed, pad]")
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    icon: { type: String, default: '' },
    large: { type: Boolean, default: false },
    xlarge: { type: Boolean, default: false },
    fixedWidth: { type: Boolean, default: false },
    fas: { type: Boolean, default: false },
    far: { type: Boolean, default: false },
    noPad: { type: Boolean, default: false },
  },
  computed: {
    fixed() {
      return this.fixedWidth ? 'fa-fw' : ''
    },
    prefix() {
      if(this.fas) {
        return 'fas'
      } else if(this.far) {
        return 'far'
      } else {
        return 'fa'
      }
    },
    iconClass() {
      return `${this.prefix} fa-` + this.icon
    },
    size() {
      if(this.large) {
        return 'fa-2x'
      } else if(this.xlarge) {
        return 'fa-5x'
      } else {
        return ''
      }
    },
    pad() {
      return this.noPad ? '' : 'local-pad'
    },
  },
}
</script>

<style scoped>
.local-pad {
  padding-right: 5px;
}
</style>
