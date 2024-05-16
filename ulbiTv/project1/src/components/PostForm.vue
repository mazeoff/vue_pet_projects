<template>
    <form @submit.prevent>
        <h4>Post creating:</h4>
        <form-input v-model="post.title" placeholder="Enter post title"/>
        <form-input v-model="post.desc" type="text" placeholder="Enter post description"/>
        <block-button 
            class="block__button_create"
            @click="createPost">Create
        </block-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post:{
                title: '',
                desc: ''
            }
        }
    },
    props:{
        posts:{
            type: Array,
            required: true
        }
    },
    methods: {
        createPost(){
            if(this.post.title !== '' || this.post.desc !== ''){
                this.post.id = this.posts.length+1;
                this.$emit('create',this.post);
                this.post = {title: '', desc: ''}
            }
        }
    },
}
</script>

<style lang="scss" scoped>
form{
    display: flex;
    flex-direction: column;
    border: 20px outset rgb(48, 173, 173);
    border-radius: 10px;
    padding: 20px;
}

</style>