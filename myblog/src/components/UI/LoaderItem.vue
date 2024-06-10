<template>
    <div class="loader__wrapper">
        <div class="loader">
            <div class="loader__item"></div>
            <div class="loader__item"></div>
            <div class="loader__item"></div>
            <div class="loader__item"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loader-item',
}
</script>

<style lang="scss" scoped>
.loader{
    display: flex;
    flex-wrap: wrap;
    width: 50px;
    animation: rotate 1s infinite ease-in-out;
    &__wrapper{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    &__item{
        width: 25px;
        height: 25px;
        background-color: $main-color;
        border-radius: 10px;
    }
}


@keyframes rotate {
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
}
</style>