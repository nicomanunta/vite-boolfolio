<script>
import AppBlog from './pages/AppBlog.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components: {

    AppBlog,
    AppHeader

  }
}
</script>
<template lang="">
  
  <AppHeader/>
  <router-view></router-view>
  
</template>
<style lang="scss" >
@use "./styles/partials/variables" as *;
@use "./styles/generals.scss" as *;
</style>