import axios from 'axios';
export const postModule = {
    state : () => ({
        posts:[],
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
    }),
    getters:{
        sortedPosts(state){
            return [...state.posts].sort((post1, post2)=> post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },
        sortedAndSearchedPosts(state, getters){
            return getters.sortedPosts.filter((post) => {
                var postTitle = post.title.toLowerCase();
                var postBody = post.body.toLowerCase();
                var search = state.searchQuery.toLowerCase();
                if(postTitle.includes(search) || postBody.includes(search)){
                   return true;
                }
            });
        }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts;
        },
        setPostsLoading(state, isPostsLoading){
            state.isPostsLoading = isPostsLoading;
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery;
        },
        setPageNumber(state, pageNumber){
            state.pageNumber = pageNumber;
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages;
        },
        
    },
    actions: {
        deletePost({state, commit}, post){
            try {
                state.posts = state.posts.filter(p => p.id !== post.id);
                commit('setPosts', state.posts);
            } catch (error) {
                console.log("Component ERROR: ", error);
            }
        },
        async fetchPosts({state, commit}){
            try {
                commit('setPostsLoading', true);
                console.log(state.pageNumber);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                   params: {
                    _page: state.pageNumber,
                    _limit: state.limitPosts
                   } 
                });
                commit('setTotalPages',
                        Math.ceil(response.headers['x-total-count'] / state.limitPosts)
                );
                commit('setPosts', response.data);
            } catch (error) {
                console.log("Component ERROR: ", error);
            }finally{
                commit('setPostsLoading', false);
            }
        },
        async loadMorePosts({state, commit}){
            console.log('loadMorePosts');
            try {
                commit('setPageNumber', state.pageNumber+1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                   params: {
                    _page: state.pageNumber,
                    _limit: state.limitPosts
                   } 
                });
                commit('setTotalPages',
                        Math.ceil(response.headers['x-total-count'] / state.limitPosts)
                );
                commit('setPosts', [...state.posts, ...response.data]);
            } catch (error) {
                console.log("Component ERROR: ", error);
            }
        }
    },
    namespaced: true
}