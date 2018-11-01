<template>
  <div>
    <div class="detail-list-outer">
      <ul class="ul-detail-list" v-for="(item, index) of contain" :key="index">
        <li class="fz-size"><span>{{item.firstTon}}</span> 元/吨</li>
        <li class="fz-size"><span>{{item.secondTon}}</span>吨</li>
        <li>{{item.date}}左右</li>
        <li>{{item.place}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      contain: Array,
      firstTon: String,
      secondTon: String,
      date: String,
      place: String
    }
  }
</script>
<style scoped lang="scss">
  .detail-list-outer{
    width: 100%;
    height: 39px;
    background-color: #fff;
    font-weight: normal;
    .ul-detail-list{
      list-style: none;
      height: 40px;
      font-size: 13px;
      color: #999;
      margin: 0 15px;
      border-bottom: 1px solid #e5e5e5;
      li{
        float: left;
        line-height: 42px;
        span{
          color: #333;
          font-size: 14px;
        }
        &:last-child{
          padding-left: 35px;
        }
      }
      li.fz-size{
        font-size: 14px;
        padding-right: 28px;
      }
    }
  }
</style>
