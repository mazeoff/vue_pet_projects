import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Posts from "@/pages/Posts";
import Post from "@/pages/Post";
import About from "@/pages/About";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/posts/:id',
        component: Post
    },
    {
        path: '/about',
        component: About
    },

];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;