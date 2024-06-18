import {onMounted, ref} from "vue";
import axios from "axios";

export default function usePosts(limitPosts){
    const posts = ref([]);
    const pageNumber = ref(1);
    const totalPages = ref(1);
    const isPostsLoading = ref(true);

    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                _page: pageNumber.value,
                _limit: limitPosts
                } 
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limitPosts);
            posts.value = response.data;
            console.log("usePosts: Posts = ",posts.value);
        }catch (error) {
            alert('Error '+ error);
        }finally{
            isPostsLoading.value = false;
        }
    }

    const loadMorePosts = async () => {
        try {
            console.log("loadMorePosts ",posts.value);
            pageNumber.value++;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                _page: pageNumber.value,
                _limit: limitPosts
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limitPosts);
            posts.value = response.data;
            posts.value = [...posts.value, ...response.data];
        } catch (error) {
            alert('Error '+ error);
        }finally{
            isPostsLoading.value = false;
        }
    }

    onMounted(fetching);

    return {
        posts, pageNumber, totalPages, isPostsLoading, loadMorePosts
    }
}