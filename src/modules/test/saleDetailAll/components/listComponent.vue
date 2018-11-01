<template>
  <div>
    <ul class="in-block" v-for="(val, index) of content" :key="index">
      <li class="li-width">{{val.stateName}}</li>
      <li class="text-align">{{val.moneyName}}</li>
      <li class="symbol">
        <van-icon name="arrow" />
      </li>
      <li class="li-width text">
        <label>还款时间:</label>
        <span>{{val.dateName}}</span>
      </li>
      <li class="text-align text">
        <label>账期:</label>
        <span>{{val.dayName}}天</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      content: [Array, Object],
      stateName: String,
      moneyName: Number,
      dateName: String,
      dayName: Number
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
    ul{
      width: 100%;
      border-bottom: 1px solid  #e5e5e5;;
      background-color: #fff;
      padding: 4px 0;
      position: relative;
      li.symbol{
        width: 14px;
        height: 14px;
        font-size: 14px;
        color: #d8d8d8;
        position: absolute;
        right: 0;
        top: 24px;
      }
      li.li-width{
        width: 180px;
      }
      li.text-align{
        text-align: right;
      }
      .text{
        font-size: 12px;
        color: #999;
      }
      li{
        font-size: 14px;
        width: 39%;
        display: inline-block;
        height: 30px;
        line-height: 30px;
      }
    }
</style>
