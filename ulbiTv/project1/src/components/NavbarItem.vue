<template>
    <div class="navbar">
        <div class="navbar__title" @click="$router.push('/')"><h1>My Blog</h1></div>
        <div class="navbar__buttons">
            <block-button class="navbar__button" @click="$router.push('/posts')">
                Posts
            </block-button>
            <block-button class="navbar__button" @click="$router.push('/about')">
                About
            </block-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar-item'
}
</script>

<style lang="scss" scoped>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        width: 100%;
        background-color: $main-color;
        box-shadow: $box-shadow;
        &__buttons{
            display: flex;
        }
        &__button + &__button{
            margin-left: 10px;
        }
        &__title{
            color: $main-color;
            cursor: pointer;
        }
    }
</style>