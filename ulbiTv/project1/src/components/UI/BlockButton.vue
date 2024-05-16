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
    border: none;
    font-weight: 600;
    font-size: 10pt;
    padding: 10px;
    border-radius: 5px;
    &:hover{
        opacity: 0.7;
    }
    &_delete{
        background-color: #ca1313;
        margin: 10px;
    }
    &_edit{
        background-color: #207373;
        margin: 10px;
    }
    &_create{
        align-self: flex-end;
    }
}
</style>