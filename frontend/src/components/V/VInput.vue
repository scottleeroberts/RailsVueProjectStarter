<template lang="pug">
.field
  label.label {{label}}
  p.control(:class="{ 'has-icons-left': icon }")
    input.input(
      :placeholder="placeholder"
      type="text"
      v-model="field"
    )
    span.icon.is-small.is-left(v-if="icon")
      VIcon(:icon="icon" :far="far" :fas="fas")
</template>

<script>
export default {
  name: 'VInput',
  props: {
    placeholder: { type: String, default: '' },
    value: { type: String, default: '' },
    label: { type: String, required: true },
    icon: { type: String, default: '' },
    fas: { type: Boolean, default: false },
    far: { type: Boolean, default: false },
  },
  computed: {
    field: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
}
</script>
