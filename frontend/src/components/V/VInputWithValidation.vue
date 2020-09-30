<template lang="pug">
.field
  label.label
    VIcon(v-if="v.$params.required" icon="asterisk")
    | {{label}}
  .control.has-icons.has-icons-right
    input.input(
      :class="cssClass"
      :placeholder="placeholder"
      type="text"
      v-model="field"
      @blur="v.$touch"
    )
    span.icon.is-small.is-right(v-if="hasError")
      i.fas.fa-exclamation-triangle
  .help.is-danger(v-if="hasError")
    p(v-if="!v.required") {{label}} is required
</template>

<script>
export default {
  name: 'VInputWithValidation',
  props: {
    placeholder: { type: String, default: '' },
    value: { type: String, default: '' },
    label: { type: String, required: true },
    v: { type: Object, required: true },
  },
  computed: {
    cssClass() {
      return {
        'is-danger': this.hasError,
        'is-primary': !this.v.$invalid && this.v.$model && this.v.$dirty,
        'is-large': this.large,
      }
    },
    field: {
      get() {
        return this.value
      },
      set(value) {
        this.v.$touch
        this.$emit('input', value)
      },
    },
    hasError() {
      return this.v.$error
    },
  },
}
</script>
