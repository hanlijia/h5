<template>
  <div class="app_content">
    <product-component></product-component>
  </div>
</template>
<script>
  import productComponent from './component/productComponent.vue'
  export default {
    components: {
      "product-component": productComponent
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
