<template lang="pug">
VButton(@click="$emit('click')" success submit :is-processing="isProcessing")
  span Submit
</template>

<script>
export default {
  name: 'VButtonSubmit',
  props: {
    isProcessing: { type: Boolean, default: false },
  },
}
</script>
