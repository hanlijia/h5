<template>
    <div class="input-first">
      <div :class="{'underline-div': haveLine}">
        <span :class="{'font-style-title': show_width}">{{labelName}}：</span>
        <span :class = "{'font-style': have_true , 'font-style-diff': have_padding}" class="font-style-color">{{dataName}}</span>
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
  name: 'zs-list-underline',
  props: {
    labelName: String,
    dataName: String,
    tonName: String,
    haveLine: {
      type: Boolean,
      default: true
    },
    have_padding: {
      type: Boolean,
      default: false
    },
    have_true: {
      type: Boolean,
      default: true
    },
    show_width: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped lang="scss">
    .new{
      padding-left: 0;
    }
    .input-first {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      padding-left: 15px;
      background-color: #fff;
      color: #999;
      border-bottom: 1px solid transparent;
      position: relative;
      .underline-div {
        border-bottom: 1px solid #eee;
      }
      .font-style-title {
        width: 70px;
        display: inline-block;
      }
      .font-style {
        position: absolute;
        right: 34px;
        color: #333;
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
        font-size: 13px;
        color: #ddd;
        float: right;
        padding-right: 15px;
        margin: 0;
      }
      .font-ton {
        /*display: inline-block;*/
        float: right;
        padding-right: 15px;
      }
    }
</style>
