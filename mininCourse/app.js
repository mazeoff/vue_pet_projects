const App = {
    data(){
        return {
            title: 'Мои заметки',
            inputPlaceholder: 'Введите название',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2','Заметка 3', 'Заметка 4'],
        }
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value;
        },
        addNote(){
            if(this.inputValue != ''){
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        removeNote(index){
            this.notes.splice(index, 1);
        }
    },
    computed:{
        doubleCountComputed(){
            return this.notes.length * 2;
        }
    },
    watch:{
        inputValue(value){
            if(value.length > 10){
                this.inputValue = value.substr(0, 10);
            }
        }
    }
};

const app = Vue.createApp(App);
app.mount('#app');