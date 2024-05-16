<template>
    <div class="wrapper">
        <post-form :posts="posts" @create="createPost"/>
        <post-list :posts="posts" @delete="deletePost"/>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
export default {
    components:{
        PostForm, PostList
    },
    data(){
        return {
            posts:[
                {id:1, title: 'Post #1', desc: 'Post about life of people in wild nature. Part 1'},
                {id:2, title: 'Post #2', desc: 'Post about life of people in wild nature. Part 2'},
                {id:3, title: 'Post #3', desc: 'Post about life of people in wild nature. Part 3'},
            ],
        }
    },
    methods:{
        createPost(post){
            this.posts.push(post);
        },
        deletePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        }
    }
}

</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
    
.wrapper{
    padding: 20px;
}

</style>