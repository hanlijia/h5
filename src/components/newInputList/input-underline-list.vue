<template>
    <div class="input-first">
      <div :class="{'underline-div': haveLine}">
        <span :class="{'font-style-title': spanColor}">{{labelName}}</span>
        <span :class = "{'font-style': haveTrue , 'font-style-diff': havePadding}" class="font-style-color">{{dataName}}</span>
        <slot name = "input"></slot>
        <p class ="font-new">
          <slot name = "text"></slot>
        </p>
        <span class = "font-ton">{{tonName}}</span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'new-input-list',
  props: {
    labelName: String,
    dataName: String,
    tonName: String,
    haveLine: {
      type: Boolean,
      default: true
    },
    havePadding: {
      type: Boolean,
      default: false
    },
    haveTrue: {
      type: Boolean,
      default: true
    },
    spanColor: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
    .new{
      padding-left: 0;
    }
    .input-first{
      height: 40px;
      line-height: 40px;
    }
    .input-first {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: #fff;
      color: #999;
      border-bottom: 1px solid transparent;
      position: relative;
      .underline-div {
        border-bottom: 1px solid #e5e5e5;
      }
      .font-style-title {
        /*width: 150px;*/
        color: #333;
      }
      .font-style {
        position: absolute;
        color: #333;
        right: 34px;
        /*display: block;*/
      }
      .font-style-color{
        color: #333;
      }
      .font-style-diff{
        position: absolute;
        right: 15px;
        color: #333;
      }
      .font-new {
        font-size: 14px;
        color: #ddd;
        float: right;
        margin: 0;
      }
      .font-ton {
        display: inline-block;
        float: right;
        padding-right: 15px;
      }
    }
</style>
