<template>
  <div>
    <login-modal/>
  </div>
</template>

<script>
import LoginModal from './LoginModal'

export default {
  $componentTree: {
    component: LoginModal,
  },
  components: { LoginModal }
}
</script>

