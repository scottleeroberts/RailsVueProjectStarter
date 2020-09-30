<template lang="pug">
  .modal.is-active
    .modal-background
    .modal-content
      .box
        | {{message}}
        VButtons
          VButton(@click="$emit('cancel')" small) No
          VButton(@click="$emit('confirm')" success small) Yes
</template>

<script>
export default {
  name: 'VConfirmDialog',
  props: {
    message: { type: String, default: 'Are you sure?' },
  },
}
</script>
