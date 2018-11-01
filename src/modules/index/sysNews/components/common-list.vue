<template>
  <div>
    <div class="contain-list" v-for="(item, index) in contain" :key="index">
      <i :class="{'red': item.haveDot}"></i>
      <span class="title-name">{{item.robotName}}</span>
      <p class="date">{{item.dateName}}<span>{{item.timeName}}</span></p>
      <p class="product">{{item.dataName}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      contain: Array,
      robotName: String,
      dateName: String,
      timeName: String,
      dataName: String,
      haveDot: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped lang="scss">
    .contain-list{
      width: 100%;
      height:  65px;
      background-color: #fff;
      border-radius: 3px;
      margin-bottom: 10px;
      font-size: 13px;
      color: #999;
      clear: both;
      content: "";
      display: block;
      position: relative;
      .red{
        width: 5px;
        height: 5px;
        background-color: #f54c51;
        border-radius: 50px;
        position: absolute;
      }
      .title-name{
        font-size: 15px;
        color: #333;
        display: inline-block;
        margin: 10px 0 7px 10px;
      }
      .date{
        float: right;
        margin: 12px 10px 7px 0;
        span{
          margin-left: 10px;
        }
      }
      .product{
        margin-left: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
</style>
