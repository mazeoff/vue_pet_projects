<template>
    <div class="wrapper">
        <header>
            <div class="page-title">
                <h1>My Blog</h1>
            </div>
            <block-button class="block__button_default" @click="showPopUp">
                Create Post
            </block-button>
        </header>

        <pop-up v-model:show="popUpCreatePostVisible">
            <post-form :posts="posts" @create="createPost"/>
        </pop-up>

        <filter-form
        v-model:searchQuery="this.searchQuery"
        v-model:selectedSort="this.selectedSort"
        v-model:sortOptions="this.sortOptions"
            />

        <post-list
            :posts="sortedAndSearchedPosts"
            @delete="deletePost"
            v-if="!isPostsLoading"/>
        <div v-else>Loading posts...</div>

        <div class="page__wrapper">
            <block-button
                v-for="page in totalPages"
                :key="page"
                class="page"
                :class="{
                    'page_current': pageNumber === page
                }"
                @click="changePage(page)"
                >
                    {{ page }}
            </block-button>
        </div>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import FilterForm from './components/FilterForm.vue';
import axios from 'axios';
export default {
    components:{
        PostForm, PostList, FilterForm,
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
            this.posts.push(post);
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
            this.fetchPosts();
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
}

header{
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
}

.page{
    width: 30px;
    &+&{
        margin-left: 20px;
    }
    &__wrapper{
        display: flex;
        justify-content: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    &_current{
        background-color: rgba(71, 43, 0, 0.32);
    }
}

</style>