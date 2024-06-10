<template>
  <div class="filter">
        <form-input
            v-model="this.searchQuery" placeholder="Find..."/>
        <block-select
            v-model:sort="selectedSort"
            :options="this.sortOptions"
            @changeOption="updateSelectSort"/>
    </div>
</template>

<script>
export default {
    props:{
        searchQuery:{
            type: String
        },
        selectedSort:{
            type: String
        },
        sortOptions:{
            type: Array
        }
    },
    emits:['update:changeOption'],
    methods: {
        updateSelectSort(event){
            this.$emit('update:selectedSort', this.selectedSort);
        }
    }
}
</script>

<style>

</style>