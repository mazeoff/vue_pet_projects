<template>
    <div class="wrapper">
        <form @submit.prevent>
            <h4>Post creating:</h4>
            <input 
                :value="title"
                @input="title=$event.target.value"
                class="input"
                type="text" placeholder="Enter post title">
            <input
            :value="desc"
            @input="desc=$event.target.value"
            class="input" type="text" placeholder="Enter post description">
            <button class="formPostBtn" @click="createPost">Create!</button>
        </form>
        <div class="posts">
            <div class="post" v-for="post in posts">
                <div><b>{{post.title}}</b></div>
                <div>{{post.desc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            posts:[
                {id:1, title: 'Post #1', desc: 'Post about life of people in wild nature. Part 1'},
                {id:2, title: 'Post #2', desc: 'Post about life of people in wild nature. Part 2'},
                {id:3, title: 'Post #3', desc: 'Post about life of people in wild nature. Part 3'},
            ],
            title: '',
            desc: ''
        }
    },
    methods:{
        createPost(){
            if(this.title !== '' || this.desc !== ''){
                this.posts.push({
                    id: this.posts.length+1,
                    title: this.title, 
                    desc: this.desc
                });
                this.title = '',
                this.desc = ''
            }
        }
    }
}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
    
.wrapper{
    padding: 20px;
}

form{
    display: flex;
    flex-direction: column;
    border: 20px outset rgb(48, 173, 173);
    border-radius: 10px;
    padding: 20px;
}

.formPostBtn{
    padding: 10px;
    align-self: flex-end;
    background: none;
    color: teal;
    border: 2px solid rgb(48, 173, 173);
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
}

.posts{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.post{
    padding: 15px;
    background-color: rgb(48, 173, 173);
    border-radius: 10px;
    margin: 15px;
    color: aliceblue;
    box-shadow: 0px 5px 10px rgb(212, 212, 212);
}
.input{
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 2px solid rgb(48, 173, 173);
    border-radius: 10px;
}

</style>