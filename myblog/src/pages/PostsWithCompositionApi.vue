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
        <div v-if="!isPostsLoading" v-intersection="loadMorePosts" id="load-more-posts"></div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

import usePosts from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

export default {
    components:{
        PostForm, PostList,
    },
    data(){
        return {
            popUpCreatePostVisible: false,
            sortOptions: [
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'}
            ],
        }
    },
    setup(props){
        const {posts, pageNumber, totalPages, isPostsLoading, loadMorePosts} = usePosts(10);
        const {sortedPosts, selectedSort} = useSortedPosts(posts);
        const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

        return {
            posts,
            pageNumber,
            totalPages,
            isPostsLoading,
            loadMorePosts,
            sortedPosts,
            selectedSort,
            searchQuery,
            sortedAndSearchedPosts
        }
    }
}

</script>

<style lang="scss" scoped>


</style>