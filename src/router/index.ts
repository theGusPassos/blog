import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Blog from "@/components/blog/Blog.vue";
import Post from "@/components/post/Post.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Blog,
  },
  {
    path: "/post/:title",
    component: Post,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
