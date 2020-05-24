import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Blog from "@/components/blog/Blog.vue";
import Post from "@/components/post/Post.vue";
import About from "@/components/about/About.vue";
import VueShowdown from "vue-showdown";
import VueAnalytics from "vue-analytics";

Vue.use(VueRouter);
Vue.use(VueShowdown);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Blog,
  },
  {
    path: "/post/:title",
    component: Post,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueAnalytics, {
  id: "UA-163830671-2",
  router,
});

export default router;
