<template>
  <div class="pagination__wrapper" v-if="!isPostsLoading">
        <block-button
            v-for="page in totalPages"
            :key="page"
            class="pagination"
            :class="{
                'pagination_current-page': pageNumber === page
            }"
            @click="changePage(page)"
            >
                {{ page }}
        </block-button>
    </div>
</template>

<script>
export default {
    props:{
        isPostsLoading:{
            type: Boolean,
            required: true
        },
        pageNumber:{
            type: Number,
            required: true
        },
        totalPages:{
            type: Number,
            required: true
        }
    },
    methods:{
        changePage(page){
            this.$emit('change', page);
        },
    }
}
</script>

<style lang="scss" scoped>
.pagination{
    width: 30px;
    &+&{
        margin-left: 20px;
    }
    &__wrapper{
        display: flex;
        justify-content: center;
        padding: 15px;
    }

    &_current-page{
        background-color: $main-color;
    }
}
</style>