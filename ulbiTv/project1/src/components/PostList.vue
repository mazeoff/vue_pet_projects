<template>
    <transition name="switch" mode="out-in" appear>
            <transition-group name="list"  tag="div" class="posts" v-if="posts.length">
                <post-item
                    v-for="post in posts" 
                    :key="post.id"
                    :post="post"
                    @delete="$emit('delete', post)"
                />
            </transition-group>
        <div v-else>
            <h3>Nothing there:(</h3>
        </div>
    </transition>
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
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    margin: -5px;
}

.list{
    &-move, &-enter-active, &-leave-active{
        transition: all 0.3s ease;
    }
    &-leave{
        &-from{
            opacity: 1;
            transform: scale(1);
        }
        &-to{
            opacity: 0;
            transform: scale(0.5);
        }
        &-active{
            position: absolute;
            width: 90vw
        }
    }
    &-enter{
        &-from{
            opacity: 0;
            transform: scale(0.5);
        }
        &-to{
            opacity: 1;
            transform: scale(1);
        }
    }

}

.switch{
    &-enter-from, &-leave-to{
        opacity: 0;
        transform: translateY(20px);
    }
    &-enter-to, &-leave-from{
        opacity: 1;
        transform: translateY(0);
    }
    &-enter-active, &-leave-active{
        transition: all 0.3s ease;
    }
}


</style>