import Post from "@/models/post";
import { posts } from "@/data/posts/posts";

export const getPostByTitle = (title: string): Post | undefined => {
  const postFound = posts.find((a) => true);
  return postFound;
};

export const getPostTitleAsUrl = (title: string): string => {
  return title.toLowerCase().replace(/ /g, "-");
};

export const getPostTitleUrlAsTitle = (title: string): string => {
  return title.toLowerCase().replace(/-/g, " ");
};
