<template>
  <div>
    <div class="list-two" v-for="(item, index) of arr" :key="index">
      <zs-list-underline labelName="车型" :dataName="item.carType" :have_true="false" :show_width="false"></zs-list-underline>
      <zs-list-underline labelName="单价" tonName="元/吨公里" :have-line="false" :show_width="false">
        <span slot="input"><input type="text" placeholder="请输入吨公里"></span>
      </zs-list-underline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [{
        carType: '高栏'
      }, {
        carType: '平板'
      }, {
        carType: '集装箱'
      }]
    }
  }
}
</script>
<style scoped lang="scss">
  input::-webkit-input-placeholder {
    color: #ddd;
  }
  input:-moz-placeholder {
    color: #ddd;
  }
  input::-moz-placeholder {
    color: #ddd;
  }
  input:-ms-input-placeholder {
    color: #ddd;
  }
  input {
    width: 200px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: normal;
    border: 0;
    padding: 0;
    margin: 0;
    color: #333;
  }
  .list-two{
    margin-top: 10px;
  }
</style>
