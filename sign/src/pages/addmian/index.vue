<template>
    <div class="wrap">
      <p class="title">面试信息</p>
      <div class="box">
        <p>
          <span>公司名称</span>
          <input type="text" placeholder="请输入公司名称">
        </p>
        <p>
          <span>公司电话</span>
          <input type="text" placeholder="请输入面试联系人电话">
        </p>
        <p>        
          <picker
            mode="time"
            :value="time"
            fields="month"
            start="09:01"
            end="21:01"
            @change="bindTimeChange"
          >
          <div class="picker"><span>面试时间</span><b class="time">{{time}}</b></div>
          </picker>
        </p>
        <p>
          <span>面试地址</span>
          <input type="text" placeholder="请输入面试地址">
        </p>
      </div>
      <p class="title">备注信息</p>
      <div class="beiz">
        <textarea placeholder="备注信息(可选,100个字以内)"></textarea>
      </div>
      <button class="btn" @click="btnyes">确认</button>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        time:new Date().toLocaleString()
      }
    },
    methods: {
      btnyes() {
        wx.navigateTo({
          url: "/pages/list/main"
        });
      },
      bindTimeChange(e) {
          console.log('picker发送选择改变，携带值为', e)
          this.time=e.target.value;
      },
    }
  };
  </script>
  
  <style scoped>
  .box p span {
    float: left;
    padding-left: 14px;
    color: #a0a0a0;
  }
  .box p input {
    float: left;
    height: 50px;
    line-height: 50px;
    margin-left: 18px;
  }
  .box p {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
  }
  .title {
    padding: 14px;
  }
  .wrap {
    width: 100%;
    height: 100%;
    background: #f6f6f6;
  }
  .box {
    width: 100%;
    background: white;
  }
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    margin-top: 18px;
    height: 90px;
    width: 90%;
  }
  .beiz {
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
  }
  .btn {
    margin-top: 30px;
    background: #999999;
    color: white;
    border-radius: 0;
  }
  .box p .picker .time{
    margin-left: 10px;
  }
  </style>
  