<template lang="pug">
VButton(@click="$emit('click')" link light)
  VIcon(icon="edit")
  span Edit
</template>

<script>
export default {
  name: 'VButtonEdit',
}
</script>
