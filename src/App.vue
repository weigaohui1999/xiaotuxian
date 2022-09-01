<template>
  <div>
    App
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    console.log(store.state.username)
  }
}
</script>
<style lang="less">

</style>
