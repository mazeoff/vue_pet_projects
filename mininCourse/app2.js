const app = Vue.createApp({
    data: () => ({
        title: 'Its',
        html:'<h1>Vue3 app</h1>',
        person: {
            name: 'Gleb',
            lastname: 'Nikonorov',
            age: 26
        },
        items: [1,2,3]
    }),
    methods: {
        addItem(){
            var myInputValue= this.$refs.myInput.value;
            if(myInputValue != '')
                this.items.unshift(myInputValue);
            this.$refs.myInput.value = '';
        },
        removeItem(key){
            this.items.splice(key, 1)
        }
    },
    computed:{
        evenItems(){
            return this.items.filter(i => i % 2 ===0)
        }
    }
}).mount('#app')