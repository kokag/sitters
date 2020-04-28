<template>
  <VbDemo>
    <VbCard title="sizes">
      <BaseBtn label="size default"/>
      <BaseBtn size="lg" label="size lg"/>
    </VbCard>
    <VbCard title="colors">
      <BaseBtn color="primary" label="primary"/>
      <BaseBtn  label="default"/>
    </VbCard>
  </VbDemo>
</template>

<script>

import BaseBtn from './BaseBtn'
export default {
  components: {
    BaseBtn
  }
}
</script>
