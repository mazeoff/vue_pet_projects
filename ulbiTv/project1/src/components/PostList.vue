<template>
    <div class="posts">
        <post-item
            v-for="post in posts" 
            :key="post.id"
            :post="post"
            @delete="$emit('delete', post)"
        />
        <h3  v-if="posts.length == 0">
            Nothing there:(
        </h3>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  components: { PostItem },
    props:{
        posts:{
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.posts{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -5px;
}

.post{
    display: flex;
    margin: 5px;
    flex: 1 1 0;
    justify-content: space-between;
    padding: 15px;
    background-color: rgb(71 43 0 / 32%);
    border-radius: 10px;
    color: aliceblue;
    box-shadow: 0px 5px 10px rgb(212, 212, 212);
}

</style>