export default{
    props:{
        show:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        hidePopUp(){
            this.$emit('update:show', false)
        }
    }
}