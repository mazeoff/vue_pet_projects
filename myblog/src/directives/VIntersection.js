import store from '@/store/index';
export default{
    mounted(el, binding){

        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && store.state.post.pageNumber < store.state.post.totalPages ){ //&& this.pageNumber < this.totalPages
                binding.value()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}