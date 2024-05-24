<template>
    <div class="wrapper">
        <header>
            <div class="page-title">
                <h1>Blog</h1>
            </div>
            <block-button @click="showPopUp">
                Create Post
            </block-button>
        </header>

        <pop-up v-model:show="popUpCreatePostVisible">
            <post-form :posts="posts" @create="createPost"/>
        </pop-up>

        <div class="filters">
            <form-input
                v-model="searchQuery" placeholder="Find..."/>
            <block-select
                v-model="selectedSort"
                :options="sortOptions"/>
        </div>

        <post-list :posts="sortedAndSearchedPosts" @delete="deletePost" v-if="!isPostsLoading"/>
        <div v-else>Loading posts...</div>
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
            posts:[],
            popUpCreatePostVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'}
            ],
            searchQuery: ''
        }
    },
    methods:{
        createPost(post){
            this.posts.push(post);
            this.popUpCreatePostVisible = false;
        },
        deletePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showPopUp(){
            this.popUpCreatePostVisible = true;
        },
        async fetchPosts(){
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
                console.log(this.posts);
            } catch (error) {
                alert('Error '+ error);
            }finally{
                this.isPostsLoading = false;
            }
        }
    },
    mounted(){
        this.fetchPosts();
    },
    computed:{
        sortedPosts(){
            return [...this.posts].sort((post1, post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter((post) => {
                var postTitle = post.title.toLowerCase();
                var postBody = post.body.toLowerCase();
                var search = this.searchQuery.toLowerCase();
                if(postTitle.includes(search) || postBody.includes(search)){
                   return true;
                }
            });
        }
    },
    watch: {
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