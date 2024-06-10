<template>
    <div class="navbar">
        <div class="navbar__title" @click="$router.push('/')"><h1>My Blog</h1></div>
        <div class="navbar__buttons">
            <block-button class="navbar__button" @click="$router.push('/posts')">
                <h3>Props Posts</h3>
            </block-button>
            <block-button class="navbar__button" @click="$router.push('/storage')">
                <h3>Storage(Vuex) Posts</h3>
            </block-button>
            <block-button class="navbar__button" @click="$router.push('/composition')">
                <h3>Composition API Posts</h3>
            </block-button>
            <block-button class="navbar__button" @click="$router.push('/about')">
                <h3>About</h3>
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
        padding: 15px 5vw;
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