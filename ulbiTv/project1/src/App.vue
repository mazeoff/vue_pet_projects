<template>
    <div class="wrapper">
        <header>
            <div class="page-title">
                <h1>Blog</h1>
            </div>
            <block-button @click="showPopUp">
                Create Post
            </block-button>
            <block-button @click="fetchPosts">
                Add Posts
            </block-button>
        </header>

        <pop-up v-model:show="popUpCreatePostVisible">
            <post-form :posts="posts" @create="createPost"/>
        </pop-up>
        <post-list :posts="posts" @delete="deletePost"/>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import axios from 'axios';
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
                {id:4, title: 'Post #4', desc: 'Post about life of people in wild nature. Part 4'},
                {id:5, title: 'Post #5', desc: 'Post about life of people in wild nature. Part 5'},
                {id:6, title: 'Post #6', desc: 'Post about life of people in wild nature. Part 6'},
                {id:7, title: 'Post #7', desc: 'Post about life of people in wild nature. Part 7'},
                {id:8, title: 'Post #8', desc: 'Post about life of people in wild nature. Part 8'},

            ],
            popUpCreatePostVisible: false
        }
    },
    methods:{
        createPost(post){
            this.posts.push(post);
            this.popUpCreatePostVisible = false;
            console.log(this.posts);
        },
        deletePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showPopUp(){
            this.popUpCreatePostVisible = true;
        },
        async fetchPosts(){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                console.log(response);
            } catch (error) {
                alert('Error '+ error);
            }
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
    margin: auto 5vw;
    // padding: 20px;
}

header{
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
}

</style>