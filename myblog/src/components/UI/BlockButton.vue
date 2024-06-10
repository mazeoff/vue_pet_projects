<template>
    <transition name="fade" appear>
        <button class="block__button">
            <slot></slot>
        </button>
    </transition>
</template>

<script>
export default {
    name: 'block-button'
}
</script>

<style lang="scss" scoped>
.block__button{
    cursor: pointer;
    display: flex;
    justify-content: center;
    color:$main-color;
    border: 2px solid $main-color;
    font-weight: 600;
    font-size: 10pt;
    padding: 10px;
    border-radius: 5px;
    &:hover{
        opacity: 0.7;
        background-color: $main-color;
        color: aliceblue;
    }
    &_default{
        background: transparent;
    }
    &_delete{
        margin: 10px;
    }
    &_edit{
        margin: 10px;
    }
    &_details{
        margin: 10px;
    }
    &_create{
        margin: 0;
        align-self: flex-end;
    }
}
</style>