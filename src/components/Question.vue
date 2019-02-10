<template>
<div>
    {{questionList.title}}
</div>

</template>

<script>
export default {
    
    created() {
        const params = this.$route.params.id;
        console.log(this.questionList)        
        // const index = params.findIndex(params => params == questionList.questionId)
        const index = this.questionList.findIndex( item => item.questionId == params )   
             
        if ( index == -1) {
            this.$router.replace({name: 'err'})
        } else {
            this.questionList.title = this.questionList[index].title
        }       
    },
    data() {
        return {
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>