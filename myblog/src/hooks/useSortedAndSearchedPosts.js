import {computed, ref} from "vue";
export default function useSortedAndSearchedPosts(sortedPosts) {
    const searchQuery = ref('');
    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter((post) => {
            var postTitle = post.title.toLowerCase();
            var postBody = post.body.toLowerCase();
            var search = searchQuery.value.toLowerCase();
            if(postTitle.includes(search) || postBody.includes(search)){
               return true;
            }
        });
    });

    return {
        searchQuery, sortedAndSearchedPosts,
    }
};