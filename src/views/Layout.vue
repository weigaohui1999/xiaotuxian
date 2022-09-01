<template>
  <div>
    <AppTopnav />
    <AppHeader />
    <app-header-sticky/>
    <div class="main">
      <!--    二級路由-->
      <router-view/>
    </div>
    <AppFooter/>
  </div>

</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'
import AppHeaderSticky from '@/components/app-header-sticky'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: { AppHeaderSticky, AppFooter, AppHeader, AppTopnav },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped>

</style>
