<template>
  <div class="bg-color" :class="{bg_color_two: is_color}" @click="handleClick">
    <div class="outer-big">
      <p><span class="mine">{{labelName}}</span><i :class="{i_default: isFirst, i_change: is_true}"></i></p>
      <div class="all_content" :class="{abc: is_display}">
        <hr class="line"/>
        <span class="span-all">全部</span>
        <span v-for="(item, index) of arr" :key="index" class="span-content">{{item}}</span>
        <span class="span-add">+</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      labelName: String,
      arr: [Array, Object],
      is_color: {
        type: Boolean,
        default: false
      }
    },
    metaInfo() {
      return {
        title: '购销大厅'
      }
    },
    data () {
      return {
        is_true: false,
        isFirst: true,
        is_display: false
      }
    },
    methods: {
      handleClick() {
        this.is_true = !this.is_true
        this.isFirst = !this.isFirst
        this.is_display = !this.is_display
      }
    }
  }
</script>
<style scoped lang="scss">
  .bg-color {
    margin: 15px;
    background-image: linear-gradient(154deg, #709cfb 0%, #4a77d9 100%);
    border-radius: 4px;
    .outer-big {
      background-image: url("../images/dot.png");
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: 100% 60px;
      p {
        height: 49px;
        margin: 0;
        .mine {
          display: inline-block;
          color: #fff;
          font-size: 16px;
          font-weight: normal;
          padding: 13px 0 10px 25px;
        }
        .i_default {
          width: 0;
          height: 15px;
          border-bottom: 8px solid #fff;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          display: inline-block;
          float: right;
          margin: 6px 22px 17px 0;
        }
        .i_change { //此样式为箭头朝下的样式
          width: 0;
          height: 15px;
          border-top: 8px solid #fff;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          display: inline-block;
          float: right;
          margin: 22px 22px 0 0;
        }
      }
      .all_content {
        min-height: 130px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        font-size: 0;
        position: relative;
        display: none;   //此样式为隐藏
        .line {
          margin: 0 10px;
          border-top: 1px solid #fff;
          opacity: 0.5;
        }
        span {
          display: inline-block;
          width: 75px;
          height: 27px;
          border-radius: 6px;
          text-align: center;
          line-height: 27px;
          font-size: 12px;
          color: #1d1d1d;
          font-weight: normal;
          margin-top: 10px;
        }
        span.span-all {
          background-color: #fff;
          margin-left: 8px;
          margin-right: 0;
        }
        span.span-content {
          background-color: #fff;
          margin-left: 8px;
        }
        span.span-add {
          border: 1px solid #fff;
          text-align: center;
          line-height: 27px;
          border-radius: 6px;
          font-size: 22px;
          color: #fff;
          position: relative;
          left: 8px;
        }
      }
      .abc{
        display: block;
      }
    }
  }
  .bg_color_two{
    background-image: linear-gradient(154deg, #646b7f 0%, #192859 100%);
    margin: 15px;
    border-radius: 4px;
  }
</style>
