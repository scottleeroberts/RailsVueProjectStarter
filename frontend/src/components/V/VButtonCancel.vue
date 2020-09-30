<template lang="pug">
VButton(@click="$emit('click')" light)
  span Cancel
</template>

<script>
export default {
  name: 'VButtonCancel',
}
</script>
