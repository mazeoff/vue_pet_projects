// import store from '@/store/index';
export default{
    mounted(el, binding){
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            console.log(entries[0].isIntersecting);
            if(entries[0].isIntersecting){ //&& this.pageNumber < this.totalPages //store.state.post.pageNumber < store.state.post.totalPages 
                // binding.value();
                console.log(1);
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}