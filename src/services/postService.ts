import Post from "@/models/post";
import { posts } from "@/data/posts/posts";

export const getPostByTitle = (title: string): Post | undefined => {
  return posts.find((post) => post.title.toLowerCase() === title.toLowerCase());
};

export const getPostTitleFromUrl = (title: string): string => {
  return title.replace(/-/g, " ");
};

export const getUrlWithPostFolder = (
  url: string,
  postFolder: string | undefined
) => {
  return `${url}/posts/${postFolder}`;
};
