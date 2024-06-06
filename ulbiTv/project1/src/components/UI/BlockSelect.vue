<template>
    <select
    :value="selectedSort"
    @change="changeOption">
        <option disabled value="">Select from list</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value">
                {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'block-select',
    props:{
        selectedSort:{
            type: String,
        },
        options:{
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event){
            this.$emit('update:selectedSort', event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>

select{
    // width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 2px solid $main-color;
    border-radius: 10px;
    background-color: transparent;
}
</style>