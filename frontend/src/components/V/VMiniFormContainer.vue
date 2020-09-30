<template lang="pug">
VPanel(:title="title" primary)
  slot
</template>

<script>
export default {
  name: 'VMiniFormContainer',
  props: {
    title: { type: String, required: true },
  },
}
</script>
