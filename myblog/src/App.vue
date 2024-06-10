<template>
    <div class="header">
        <navbar-item></navbar-item>
    </div>
    <div class="app-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
import NavbarItem from "@/components/NavbarItem"
export default {
    components:{
        NavbarItem
    }
}

</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

html, body{
    height: 100%;
}

#app{
    height: 100%;
}
    
.app-wrapper{
    height: 100%;
    padding-top: 20px;
    // margin: auto 5vw;
}

</style>