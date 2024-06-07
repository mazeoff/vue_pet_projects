import {onMounted, ref} from "vue";
import axios from "axios";

export function usePosts(limit){
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                _page: this.pageNumber,
                _limit: this.limitPosts
                } 
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / this.limitPosts);
            posts.value = response.data;
        } catch (error) {
            alert('Error '+ error);
        }finally{
            isPostsLoading.value = false;
        }
    }

    onMounted(fetching);
    return {
        posts, isPostsLoading, totalPages
    }

}