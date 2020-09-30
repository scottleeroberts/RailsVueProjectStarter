<template lang="pug">
button.button(@click.prevent="$emit('click')" :class="cssClasses" :type="buttonType" :disabled="isProcessing")
  slot
</template>

<script>
export default {
  name: 'VButton',
  props: {
    primary: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    light: { type: Boolean, default: false },
    submit: { type: Boolean, default: false },
    isProcessing: { type: Boolean, default: false },
  },
  computed: {
    buttonType() {
      return this.submit ? 'submit' : 'button'
    },
    cssClasses() {
      return {
        'is-primary': this.primary,
        'is-link': this.link,
        'is-info': this.info,
        'is-success': this.success,
        'is-warning': this.warning,
        'is-danger': this.danger,
        'is-small': this.small,
        'is-light': this.light,
        'is-loading': this.isProcessing,
      }
    },
  },
}
</script>
