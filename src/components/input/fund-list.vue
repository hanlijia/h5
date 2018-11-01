<template>
    <div class="refund">
        <div :class="{'border-underline': haveLine}">
          <div class="float-left">
            <span class="color-color">
              <span :class="{'color-black': haveColor}">{{StatusName}}</span>
            </span>
            <span class="price-date">{{dayName}}&nbsp;&nbsp;<label>{{dataName}}</label></span>
          </div>
          <div class="float-right">
            <span class="color-black"><span class="width">{{numName}}<label class="yuan">&nbsp;&nbsp;{{yuanName}}</label></span></span>
            <span class="date">{{titleName}}&nbsp;&nbsp;<label>{{answerName}}</label></span>
          </div>
          <i><van-icon name="arrow" /></i>
        </div>
        </div>
</template>
<script>
  export default {
    name: 'fund-list-new',
    props: {
      StatusName: String,
      dayName: String,
      dataName: String,
      numName: String,
      yuanName: String,
      titleName: String,
      answerName: String,
      haveLine: {
        type: Boolean,
        default: true
      },
      haveColor: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style scoped lang="scss">
      .refund {
        height: 74px;
        line-height: 74px;
        background: #fff;
        border-bottom: 1px solid transparent;
        padding: 0 15px;
        color: #999;
        font-size: 14px;
        .border-underline {
          height: 74px;
          border-bottom: 1px solid #ddd;
          color: #f54c51;
        }
          .float-left, .float-right {
            height: 49px;
            /*border: 1px solid red;*/
            line-height: 28px;
            margin-top: 10px;
            span {
              display: block;
            }
              .color-black {
                color: #333;
                .width {
                  font-size: 15px;
                  .yuan{
                    font-size: 14px;
                    color: #999;
                  }
                }
            }
          }
          .float-left {
            float: left;
            .color-color{
              color: #f54c51;
            }
           .price-date{
             color: #999;
             }
          }
          .float-right {
            float: right;
            margin-right: 23px;
            .date {
              float: right;
              color: #999;
            }
          }
          i {
            float: right;
            clear: right;
            position: relative;
            bottom: 15px;
            color: #d8d8d8;
          }
        }
</style>
