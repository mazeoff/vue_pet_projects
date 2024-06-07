import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Posts from "@/pages/Posts";
import PostsWithStorage from "@/pages/PostsWithStorage";
import PostsWithCompositionApi from "@/pages/PostsWithCompositionApi";
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
    {
        path: '/storage',
        component: PostsWithStorage
    },
    {
        path: '/composition',
        component: PostsWithCompositionApi
    },

];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;