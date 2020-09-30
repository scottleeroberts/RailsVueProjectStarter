<template lang="pug">
VButton(@click="$emit('click')" danger light)
  VIcon(icon="trash-o")
  span Delete
</template>

<script>
export default {
  name: 'VButtonDelete',
}
</script>
