<template>
    <div class="post">
        <div class="block__body">
            <div><b>{{post.title}} </b></div>
            <div>{{post.body}}</div>
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

<style lang="scss" scoped>
.post{
    display: flex;
    margin: 5px;
    // flex: 1 1 0;
    flex: 1 1 auto;
    justify-content: space-between;
    padding: 15px;
    background-color: rgb(71 43 0 / 32%);
    border-radius: 10px;
    color: aliceblue;
    box-shadow: 0px 5px 10px rgb(212, 212, 212);
}
.block__buttons{
    display: flex;
    flex-direction: column;
}
</style>
