<template>
    <button class="block__button">
        <slot></slot>
    </button>
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
    background: transparent;
    color: rgba(71, 43, 0, 0.32);
    border: 2px solid rgba(71, 43, 0, 0.32);
    font-weight: 600;
    font-size: 10pt;
    padding: 10px;
    border-radius: 5px;
    &:hover{
        opacity: 0.7;
        background-color: rgba(71, 43, 0, 0.32);
        color: aliceblue;
    }
    &_delete{
        margin: 10px;
    }
    &_edit{
        margin: 10px;
    }
    &_create{
        align-self: flex-end;
    }
}
</style>