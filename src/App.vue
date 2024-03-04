<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components: {

    AppMain,
    AppHeader

  }
}
</script>
<template lang="">
  
  <AppHeader/>
  <AppMain/>
  
</template>
<style lang="scss" >
@use "./styles/partials/variables" as *;
@use "./styles/generals.scss" as *;
</style>