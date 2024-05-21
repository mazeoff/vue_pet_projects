<template>
  <input
    class="form-input"
    type="text"
    :value="modelValue"
    @input="updateInput">
</template>

<script>
export default {
    name: 'form-input',
    props:{
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<style lang="scss" scoped>
.form-input{
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 2px solid rgba(71, 43, 0, 0.32);
    border-radius: 10px;
}
</style>