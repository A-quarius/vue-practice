<template>
  <div id="app">
    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="" alt="">
        </div>
        <ul class="nav">
          <router-link tag="li" to="/">首页</router-link>
          <router-link tag="li" to="/learn">课程</router-link>
          <router-link tag="li" to="/student">学生</router-link>
          <router-link tag="li" to="/learn">关于</router-link>
          <router-link tag="li" to="/community">社区</router-link>
          
        </ul>
      </div>
    </div>
    <router-view/>
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

