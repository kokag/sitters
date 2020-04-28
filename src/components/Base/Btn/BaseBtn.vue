<template>
  <button class="base-btn">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'base-btn',
  props: {
    size: {
      type: String,
      validator (v) {
        return [
          'lg',
        ].includes(v)
      }
    },
    label: String,
  },
}
</script>

<style lang="scss">
.base-btn {

}
</style>
