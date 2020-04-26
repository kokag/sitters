<template>
  <div>
    <reg-modal/>
  </div>
</template>

<script>
import RegModal from './RegModal'

export default {
  $componentTree: {
    component: RegModal,
  },
  components: { RegModal }
}


</script>

