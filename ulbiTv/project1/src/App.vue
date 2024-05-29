<template>
    <div class="app-wrapper">
        <header>
            <div class="page-title">
                <h1>My Blog</h1>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
    
.app-wrapper{
    margin: auto 5vw;
}

header{
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
}

</style>