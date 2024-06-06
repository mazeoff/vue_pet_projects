<template>
    <div class="post">
        <div>{{ post.id }}</div>
        <div class="block__body">
            <div><b>{{post.title}} </b></div>
            <div>{{post.body}}</div>
        </div>
        <div class="block__buttons">
            <block-button class="block__button_default block__button_details" @click="$router.push(`/posts/${post.id}`)">
                Details
            </block-button>
            <block-button class="block__button_default block__button_delete" @click="$emit('delete', post)">
                Delete
            </block-button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        post:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.post{
    display: flex;
    margin: 5px 0;
    // flex: 1 1 0;
    flex: 1 1 auto;
    justify-content: space-between;
    padding: 15px;
    background-color: $main-color;
    border-radius: 10px;
    color: aliceblue;
    box-shadow: $box-shadow;
}

.block__buttons{
    display: flex;
    flex-direction: column;
}
</style>
