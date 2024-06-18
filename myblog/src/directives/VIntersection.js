import store from '@/store/index';
import usePosts from '@/hooks/usePosts';
export default{
    mounted(el, binding){
        const {posts, pageNumber, totalPages, isPostsLoading, loadMorePosts} = usePosts(10);
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            // console.log(posts.value);
            if(entries[0].isIntersecting && pageNumber.value <= totalPages.value ){
                console.log("Directive: Posts = ",posts.value);
            //if(entries[0].isIntersecting && store.state.post.pageNumber < store.state.post.totalPages ){ //&& this.pageNumber < this.totalPages //store.state.post.pageNumber < store.state.post.totalPages 
                binding.value();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}