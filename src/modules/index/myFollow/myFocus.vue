<template>
  <div class="app_content">
    <div class="common-tile">
      <div  v-for="(item, index) in change_style" :key="index">
        <span :class="item.changeText ? item.styleChange : item.styleSame" @click = "_click(index)">{{item.text}}</span>
      </div>
    </div>
    <div class="m-body">
        <div class="body-left">
          <span class="product-name">HDPE</span>
        </div>
        <div class="body-right"></div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        change_style: [
          {
            text: '已关注',
            changeText: true,
            styleSame: 'style-same',
            styleChange: 'style-change'
          },
          {
            text: '产品类别',
            changeText: false,
            styleSame: 'style-same',
            styleChange: 'style-change'
          }
        ]
      }
    },
    methods: {
      _click(index) {
        this.change_style.forEach((val) => {
          val.changeText = false
        })
        this.change_style[index].changeText = !this.change_style[index].changeText
      }
    }
  }
</script>
<style lang="scss">
  .app_content{
    width: 100%;
    height: 100vh;
    .common-tile{
      height: 40px;
      content: "";
      clear: both;
      display: block;
      line-height: 40px;
      background-color: #fff;
      margin-bottom: 10px;
      .style-change,.style-same{
        font-size: 16px;
        text-align: center;
        display: inline-block;
        padding: 0 8px;
        float: left;
        margin-left: 80px;
        cursor: pointer;
      }
      .style-same {
        color: #666;
      }
      .style-change{
        color: #4a77d9;
        border-bottom: 2px solid #4977d9;
      }
    }
    .m-body{
      border: 1px solid;
      .body-left{
        .product-name{
          padding-top: 0;
          width: 100px;
          height: 63px;
          display: inline-block;
          text-align: center;
          font-size: 15px;
          color: #666;
          border-bottom: 2px solid #4977d9;
        }
      }
    }
  }
</style>
