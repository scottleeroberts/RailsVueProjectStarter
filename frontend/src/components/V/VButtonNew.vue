<template lang="pug">
VButton(@click="$emit('click')" primary)
  VIcon(icon="plus")
  span New
</template>

<script>
export default {
  name: 'VButtonNew',
}
</script>
