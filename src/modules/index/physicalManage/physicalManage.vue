<template>
  <div class="all-content">
    <label v-for="(item, index) in arr" :key="index">
      <i :class="item.is_img ? item.img: ''"></i>
      <span>{{item.store_text}}</span>
    </label>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: '物流管理'
    }
  },
  data() {
    return {
      arr: [{
        store_text: '仓库管理',
        img: 'store_png',
        is_img: true
    }, {
        store_text: '运价配置',
        img: 'freight_png',
        is_img: true
      }]
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.all-content{
  width: 100%;
  height: 100vh;
  label{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: block;
    background-color: #fff;
    color: #333;
    font-weight: normal;
    border-top: 20px solid #f8f8f8;
    font-size: 0;
    position: relative;
    .store_png,.freight_png{
      width: 15px;
      height: 14px;
      display: inline-block;
      background-size: 15px 14px;
      margin: 13px 10px 0 15px;
    }
    .store_png{
      background-image: url("./images/store.png");
    }
    .freight_png{
      background-image: url("./images/freight.png");
    }
    span{
      font-size: 14px;
      position: absolute;
    }
  }
}
</style>
