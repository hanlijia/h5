<template>
  <div class="big">
    <mine-attention labelName = '我的关注' :arr="arr_data" :is_color = false></mine-attention>
    <mine-attention labelName = '通用塑料' :arr="arr_data" :is_color = true></mine-attention>
  </div>
</template>

<script>
  import mineAttention from './component/mineAttention'
  export default {
    components: {
      'mine-attention': mineAttention
    },
    data() {
      return {
        arr_data: ['HDPE', 'LDPE', 'LLPDE', 'PP', '粉状PVC', '糊状PVC', '聚脂切片']
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .big {
    width: 100%;
    height: 100%;
    background-color: #fff;
    }
</style>
