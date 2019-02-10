<template>
  <div id="app">
    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <ul class="nav">
          <router-link tag="li" to="/home">首页</router-link>
          <router-link tag="li" to="/learn">课程</router-link>
          <router-link tag="li" to="/student">学生</router-link>
          <router-link tag="li" to="/about">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link>
          
        </ul>
      </div>
    </div>
  <div class="footer"></div>
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>
<style>
/* 
  router-link-exact-active router-link-active
 */
  .header{
    background-color: #111;
    line-height: 70px;
    padding-bottom: 2px
  }
  .header .center{
    border: 1px solid #111;
    display: flex;
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
  }
  .header .center img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
  .header .center .logo {
    line-height: 70px;
  }
  .header .center ul {
    display: flex;
  }
  .header .center ul li {
    color: #fff;
    padding: 0 30px;
    cursor: pointer;
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: #111;
  }
  .router-view {
    width: 1000px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .router-link-active {
    border-bottom: 1px solid #fff;
  }
</style>

