<template>
  <div class="filter">
            <form-input
                v-model="this.searchQuery" placeholder="Find..."/>
            <block-select
                v-model="this.selectedSort"
                v-model:sortOptions="this.sortOptions"/>
        </div>
</template>

<script>
export default {
    props:{
        searchQuery:{
            type: String,
        },
        selectedSort:{
            type: String,
        },
        sortOptions:{
            type: Array
        }
    }
}
</script>

<style>

</style>