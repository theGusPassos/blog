import Post from "@/models/post";
import { posts } from "@/data/posts.ts";

export const getPostByTitle = (title: string): Post => {
  return posts[0];
};
