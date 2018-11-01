<template>
  <div class="common_bottom">
    <van-row>
      <van-col span="6"  v-for="(item,index) in new_text" :key="index" @click.native= "main(index)">
        <div class="four_col" @click="_click(index)">
          <i :class="item.img_house ? item.house:item.house_block"></i>
          <span :class="item.img_text ? item.img_text_different:item.img_text_one">{{item.all_text}}</span>
          <!--<sup :class="item.sup"></sup>-->
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        new_text: [
          {
            all_text: '购销大厅',
            house: 'house',
            house_block: 'house_block',
            img_text_one: 'img_text_one',
            img_text_different: 'img_text_different',
            img_house: false,
            img_text: false,
            name_page: '/mobile/orderDetail'
          },
          {
            all_text: '合同管理',
            house: 'card',
            house_block: 'card_block',
            img_text_one: 'img_text_one',
            img_text_different: 'img_text_different',
            img_house: true,
            img_text: true,
            name_page: '/mobile/orderM'
          },
          {
            all_text: '资金管理',
            house: 'order',
            house_block: 'order_block',
            img_text_one: 'img_text_one',
            img_text_different: 'img_text_different',
            img_house: true,
            img_text: true,
            sup: 'sup',
            name_page: '/mobile/saleIndex'
          },
          {
            all_text: '关于我的',
            house: 'mine',
            house_block: 'mine_block',
            img_text_one: 'img_text_one',
            img_text_different: 'img_text_different',
            img_house: true,
            img_text: true,
            name_page: '/mobile/goldIndex'
          }
        ]
      }
    },
    methods: {
      _click (index) {
        this.new_text.forEach((val) => {
          val.img_house = true
          val.img_text = true
        })
        this.new_text[index].img_house = !this.new_text[index].img_house
        this.new_text[index].img_text = !this.new_text[index].img_text
      },
      main: function (key) {
        this.$router.push({
          path: this.new_text[key].name_page
        })
      }
    }
  }
</script>
<style lang="scss">
  .common_bottom{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    .four_col {
      border-top: 1px solid #eee;
      position: relative;
      height: 50px;
      background-color: white;
      i{
        width: 16px;
        height: 18px;
        display: inline-block;
        position: absolute;
        left: 37px;
        top: 5px;
      }
      .house, .card, .order, .mine, .house_block, .card_block, .order_block, .mine_block {
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .house {
        background-image: url("../test/img/hall.png");
      }
      .card {
        background-image: url("../test/img/order-m.png");
      }
      .order {
        background-image: url("../test/img/logistics.png");
      }
      .mine {
        background-image: url("../test/img/account.png");
      }
      .house_block {
        background-image: url("../test/img/hall-on.png");
      }
      .card_block {
        background-image: url("../test/img/order-m-on.png");
      }
      .order_block {
        background-image: url("../test/img/logistics-on.png");
      }
      .mine_block {
        background-image: url("../test/img/account-on.png");
      }
      .img_text_one, .img_text_different {
        font-size: 11px;
        position: absolute;
        left: 20px;
        top:32px;
        font-weight: bold;
      }
      .img_text_one {
        color: #4a77d9;
      }
      .img_text_different {
        color: #767676;
      }
      /*.sup{*/
        /*display: inline-block;*/
        /*width: 5px;*/
        /*height: 5px;*/
        /*background-color: #df0600;*/
        /*border-radius: 50%;*/
        /*position: absolute;*/
        /*left: 60px;*/
        /*top: 5px;*/
      /*}*/
    }
  }
</style>
