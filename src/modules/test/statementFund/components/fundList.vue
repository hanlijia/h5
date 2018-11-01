<template>
  <div class="m-body">
    <div class="body-outer" v-for="(val, index) of listData" :key="index">
        <div :class="{'body-list': val.haveLine}" class="cf">
        <span class="span-apply">{{val.applyName}}</span>
        <span class="span-money">
            <label v-show="val.isBlack">{{'-' + val.moneyName}}</label>
            <label class="label-color-change" v-show="val.isBlue">{{'+' + val.moneyName}}</label>
            <i class="arrow"><slot name="arrow"></slot></i>
          </span>
          <span class="span-companyName">{{'['+ val.companyName+ ']'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      listData: [Array, Object],
      haveLine: {
        type: Boolean,
        default: true
      },
      haveColor: {
        type: Boolean,
        default: false
      },
      isBlack: false,
      isBlue: false,
      applyName: String,
      moneyName: String,
      companyName: String
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .m-body{
    box-sizing: border-box;
    .body-outer {
      background-color: #fff;
      height: 59px;
      padding: 0 15px;
      border-bottom: 1px solid transparent;
      color: #333;
      font-size: 14px;
      .body-list {
        height: 59px;
        border-bottom: 1px solid #e5e5e5;
      }
      .span-apply {
        float: left;
        padding: 10px 0 3px 0;
      }
      .span-money {
        float: right;
        font-size: 16px;
        line-height: 59px;
        .label-color-change {
          color: #4a77d9;
        }
        .arrow {
          font-size: 15px;
          color: #d8d8d8;
        }
      }
      .span-companyName {
        font-size: 12px;
        color: #999;
        float: left;
        clear: left;
      }
    }
  }
</style>
