<template>
  <div class="model">
    <p class="title">企业信息</p>
    <new-input-list :have-line="true" label-name="账号类型" :data-name="rowData.administrator" have-padding="true"></new-input-list>
    <new-input-list :have-line="false" label-name="账号类型" :data-name="rowData.companyName" have-padding="true"></new-input-list>
    <p class="title">个人信息</p>
    <new-input-list :have-line="true" label-name="登录名" :data-name="rowData.userName" have-padding="true"></new-input-list>
    <new-input-list :have-line="true" label-name="昵称">
     <input type="text" placeholder="请输入昵称" slot="input">
    </new-input-list>
    <new-input-list :have-line="false" label-name="姓名" :data-name="rowData.Name" have-padding="true"></new-input-list>
    <div class="list-three">
      <new-input-list :have-line="true" label-name="身份证号码" :data-name="rowData.ID" have-padding="true"></new-input-list>
      <new-input-list :have-line="false" label-name="绑定邮箱" :data-name="rowData.email" have-padding="true"></new-input-list>
    </div>
    <div class="list-four">
      <new-input-list :have-line="true" label-name="性别" :data-name="rowData.sex" have-padding="true"></new-input-list>
      <new-input-list :have-line="true" label-name="生日" :data-name="rowData.birthday" have-padding="true"></new-input-list>
      <new-input-list :have-line="true" label-name="手机号" :data-name="rowData.iphoneNumber" have-padding="true"></new-input-list>
      <new-input-list :have-line="false" label-name="个人介绍" have-true="true">
        <span slot="text"><van-icon name="arrow" /></span>
      </new-input-list>
    </div>
    <div class="list-five">
      <new-input-list :have-line="false" label-name="修改密码" have-true="true" :span-color="true">
        <span slot="text"><van-icon name="arrow" /></span>
      </new-input-list>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '我的配置'
      }
    },
    data() {
      return {
        rowData: {
          administrator: '管理员',
          companyName: '光明塑化有限公司',
          userName: '1727474868',
          Name: '明明',
          ID: '234556********7876',
          email: 'yy@qq.com',
          sex: '男',
          birthday: '2018/08/01',
          iphoneNumber: '1234****456'
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .model {
    width: 100%;
    height: 100vh;
    input::-webkit-input-placeholder {
      color: #ddd;
    }
    input:-moz-placeholder {
      color: #ddd;
    }
    input::-moz-placeholder {
      color: #ddd;
    }
    input:-ms-input-placeholder {
      color: #ddd;
    }
    input {
      float: right;
      width: 224px;
      height: 20px;
      line-height: 20px;
      margin-top: 10px;
      border: 0;
      padding: 0;
      color: #333;
      text-align: right;
    }
    p.title{
      font-size: 13px;
      color: #333;
      padding: 10px 0 5px 15px;
    }
    .list-three, .list-four, .list-five{
      box-sizing: border-box;
      margin-top: 10px;
    }
  }
</style>
