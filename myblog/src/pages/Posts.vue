<template>
    <div>
        <pop-up v-model:show="popUpCreatePostVisible">
            <post-form :posts="posts" @create="createPost"/>
        </pop-up>

        <div class="posts-setting">
            <block-button class="block__button_default" @click="showPopUp">
                Create Post
            </block-button>
            <form-input
                v-model="searchQuery" placeholder="Find..."/>
            <block-select
                v-model:selectedSort="selectedSort"
                v-model:sortOptions="sortOptions"/>
        </div>    

        <post-list
            :posts="sortedAndSearchedPosts"
            @delete="deletePost"
            v-if="!isPostsLoading"/>
        <div v-else>
            <loader-item/>
        </div>
        <!-- <div v-intersection="loadMorePosts" id="load-more-posts"></div> -->

        <pagination-item
            v-model:totalPages="totalPages"
            v-model:pageNumber="pageNumber"
            v-model:isPostsLoading="isPostsLoading"
            @change="changePage"/>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import PaginationItem from '@/components/PaginationItem.vue';
import axios from 'axios';
export default {
    components:{
        PostForm, PostList, PaginationItem
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
            searchQuery: '',
            pageNumber: 1,
            limitPosts: 10,
            totalPages: 1,
        }
    },
    methods:{
        createPost(post){
            this.posts.unshift(post);
            this.popUpCreatePostVisible = false;
        },
        deletePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showPopUp(){
            this.popUpCreatePostVisible = true;
        },
        changePage(page){
            this.pageNumber = page;
        },
        async fetchPosts(){
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                   params: {
                    _page: this.pageNumber,
                    _limit: this.limitPosts
                   } 
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limitPosts);
                this.posts = response.data;
            } catch (error) {
                alert('Error '+ error);
            }finally{
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts(){
            try {
                this.pageNumber++;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                   params: {
                    _page: this.pageNumber,
                    _limit: this.limitPosts
                   } 
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limitPosts);
                this.posts = [...this.posts, ...response.data];
            } catch (error) {
                alert('Error '+ error);
            }finally{
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
    watch:{
        pageNumber(newValue){
            this.fetchPosts();
        }
    }
}

</script>

<style lang="scss" scoped>

.posts-setting{
    margin: auto 20vw;
}

</style>