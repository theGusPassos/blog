import Post from "@/models/post";
import { posts } from "@/data/posts/posts";

export const getPostByTitle = (title: string): Post => {
  return posts[0];
};
