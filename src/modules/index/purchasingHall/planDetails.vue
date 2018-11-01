<template>
  <div class="app_content">
    <plan-component></plan-component>
  </div>
</template>
<script>
  import planComponent from './component/planComponent.vue'
 export default {
    components: {
      'plan-component': planComponent
    },
   data() {
     return {
     }
   }
 }
</script>
<style lang="scss">
  .app_content{
    width: 100%;
  }
</style>
