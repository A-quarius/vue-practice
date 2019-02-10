<template>
<div>
    <div class="nav">
        <router-link tag="li" :to="{name : 'academic'}">学术</router-link>
        <router-link tag="li" :to="{name : 'download'}">下载</router-link>
        <router-link tag="li" :to="{name : 'personal'}">个人</router-link>        
    </div>
    <router-view class="router-view"></router-view>
</div>

</template>

<script>

export default {
    
}
</script>

<style scoped>
    .nav {
        display: flex;
    }
    .nav li {
        text-align: center;
        cursor: pointer;
        margin-right: 30px;
        height: 30px;
        width: 50px;
        line-height: 30px;
    }
    .router-view {
        width: 1000px;
        margin: 0 auto;
        padding-top: 40px;
    }
    .router-link-active {
        background-color: #000;
        color: #fff;
    }
</style>