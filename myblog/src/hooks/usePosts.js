import {onMounted, ref} from "vue";
import axios from "axios";

export default function usePosts(limitPosts){
    const posts = ref([]);
    const totalPages = ref(0);
    const isPostsLoading = ref(true);

    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                _page: 1,
                _limit: limitPosts
                } 
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limitPosts);
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