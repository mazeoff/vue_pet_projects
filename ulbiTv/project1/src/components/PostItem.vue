<template>
    <div class="post">
        <div class="block__body">
            <div><b>{{post.title}} </b></div>
            <div>{{post.desc}}</div>
        </div>
        <div class="block__buttons">
            <block-button class="block__button_edit">
                Edit
            </block-button>
            <block-button class="block__button_delete" @click="$emit('delete', post)">
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

<style lang="scss">
.block__buttons{
    display: flex;
    flex-direction: column;
}
</style>
