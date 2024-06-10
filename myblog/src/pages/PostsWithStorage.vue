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
                :model-value="searchQuery"
                @update:model-value="setSearchQuery" 
                placeholder="Find..."/>
            <block-select
                v-model:selectedSort="selectedSort"
                v-model:sortOptions="sortOptions"
                @update:selectedSort="setSelectedSort"
                @update:sortOptions="setSortOptions"/>
        </div>    

        <post-list
            :posts="sortedAndSearchedPosts"
            @delete="deletePost"
            v-if="!isPostsLoading"/>
        <div v-else>
            <loader-item/>
        </div>
        <div v-intersection="loadMorePosts" id="load-more-posts"></div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    components:{
        PostForm, PostList,
    },
    data(){
        return {
            popUpCreatePostVisible: false,
        }
    },
    methods:{
        ...mapMutations({
            setPageNumber:'post/setPageNumber',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
            setSortOptions: 'post/setSortOptions'
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts',
            // deletePost: 'post/deletePost'
        }),
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
    },
    computed:{
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            sortOptions: state => state.post.sortOptions,
            searchQuery: state => state.post.searchQuery,
            pageNumber: state => state.post.pageNumber,
            limitPosts: state => state.post.limitPosts,
            totalPages: state => state.post.totalPages,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        }),
    },
    mounted(){
        this.fetchPosts()
    }
}

</script>

<style lang="scss" scoped>

.pagination{
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

    &_current-page{
        background-color: rgba(71, 43, 0, 0.32);
    }
}

.posts-setting{
    margin: auto 20vw;
}

</style>