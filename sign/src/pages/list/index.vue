<template>
    <div class="wrap">
      <p class="nav">
        <span>未开始</span>
        <span>已打卡</span>
        <span>已放弃</span>
        <span>全部</span>
      </p>
      <div class="main">
        <p class="main-p">
          <span class="main-name">八维</span>
          <span class="main-start">未开始</span>
        </p>
        <p class="main-add">北京市海淀区上帝软件园南路57号</p>
        <p class="main-time">
          面试时间:2019-06-28 18:00
          <span class="main-label">未提醒</span>
        </p>
      </div>
    </div>
  </template>
  <style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    background: #ededed;
  }
  .nav {
    height: 60px;
    width: 100%;
    line-height: 60px;
    display: flex;
    background: white;
  }
  .nav span {
    display: inline-block;
    width: 25%;
    text-align: center;
  }
  .main {
    width: 100%;
    margin-top: 20px;
    background: white;
    padding: 10px;
  }
  .main p {
    height: 40px;
    line-height: 40px;
  }
  .main-name {
    font-size: 24px;
  }
  .main-start {
    background: #f2f2f2;
    color: #adadaf;
    position: absolute;
    right: 30px;
    font-size: 16px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    width: 80px;
    text-align: center;
  }
  .main-label {
    position: absolute;
    right: 30px;
    background: #fff0f0;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    width: 80px;
    text-align: center;
    color: #d67b84;
    margin-top: 6px;
  }
  .main-p {
    position: relative;
  }
  .main-add {
    color: #b2b2b4;
  }
  .main-time {
    color: #726b63;
    position: relative;
  }
  </style>
  
  