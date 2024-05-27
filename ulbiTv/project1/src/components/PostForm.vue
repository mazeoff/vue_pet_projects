<template>
    <form @submit.prevent>
        <h4>Post creating:</h4>
        <form-input v-model="post.title" placeholder="Enter post title"/>
        <form-input v-model="post.body" type="text" placeholder="Enter post description"/>
        <block-button 
            class="block__button_default block__button_create"
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
                body: ''
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
            if(this.post.title !== '' || this.post.body !== ''){
                this.post.id = this.posts.length+1;
                this.$emit('create',this.post);
                this.post = {title: '', body: ''}
            }
        }
    },
}
</script>

<style lang="scss" scoped>
form{
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
}

</style>