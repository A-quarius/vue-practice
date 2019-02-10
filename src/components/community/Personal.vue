<template>
    <div>
        个人中心
        <button @click="changeStatus">{{login? "退出": "登录"}}
        </button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            login: false
        }
    },
   
    created() {
       this.login = this.$route.matched[0].meta.login;
    },
    methods: {
        changeStatus() {
            this.login = !this.login
            this.$route.matched[0].meta.login = this.login
        }
    }
    
}
</script>

<style scoped>

</style>