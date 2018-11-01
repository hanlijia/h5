<template>
  <div>
    <div class="all-margin" v-for="(item, index) of contain" :key="index">
      <p>
        <span>{{item.numberName}}</span>
        <span :class="{span_color: item.haveColor}">{{item.timeName}}</span>
      </p>
      <ul>
        <li>{{item.brandName}}</li>
        <li>{{item.tradeName}}</li>
        <li><span>{{item.yuanName}}</span>元/吨</li>
        <li class="float"><span>{{item.tonName}}</span>吨</li>
        <li class="fz-size-place">{{item.placeName}}</li>
        <li class="fz-size">{{item.dataName}}<label v-show="item.is_show">左右</label></li>
        <li class="handle-button">
          <span class="editor">编辑</span>
          <span class="cancel">撤单</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contain: Array,
    numberName: String,
    timeName: String,
    brandName: String,
    tradeName: String,
    yuanName: String,
    tonName: String,
    placeName: String,
    dataName: String,
    ooo: String,
    is_show: {
      type: Boolean,
      default: true
    },
    haveColor: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  .all-margin {
    height: 100px;
    background-color: #fff;
    font-weight: normal;
    border-top: 10px solid #f8f8f8;
    position: relative;
    p{
      height: 33px;
      line-height: 33px;
      border-bottom: 1px solid #eee;
      margin: 0 15px;
      font-size: 13px;
      color: #999;
      span{
        &:last-child{
          float: right;
        }
      }
      span.span_color{
        color: #4a77d9;
      }
    }
    ul{
      font-weight: normal;
      font-size: 13px;
      color: #999;
      padding: 0 15px;
      li{
        float: left;
        padding-right: 43px;
        padding-top: 10px;
        span{
          color: #333;
          padding-right: 5px;
        }
        &:first-child{
          color: #333;
        }
      }
      li.handle-button{
        padding: 0;
        font-size: 0;
        position: absolute;
        bottom: 26px;
        right: 15px;           //这里为移动按钮的调宽 两个按钮共 -106px
          span.editor{
            margin-right: 5px;
          }
          span.editor, span.cancel{
            padding: 0;
            width: 50px;
            height: 50px;
            display: inline-block;
            text-align: center;
            line-height: 50px;
            border-radius: 6px;
            background-color: #6a99f7;
            font-size: 14px;
            color: #fff;
        }
      }
      li.float{
        padding-right: 0;
      }
      li.fz-size,.fz-size-place{
        font-size: 12px;
      }
      .fz-size-place{
        padding-right: 26px;
      }
    }
  }
</style>
