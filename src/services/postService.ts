import Post from "@/models/post";
import { posts } from "@/data/posts/posts";
import { formatMdFile } from "./mdFormatter";

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

export const getPostMdFile = async (folder: string) => {
  return fetch(`posts/${folder}/post.md`)
    .then((request) => request.text())
    .then((file) => {
      const formatedFile = formatMdFile(
        file,
        getUrlWithPostFolder(window.location.origin + "/blog", folder)
      );

      return formatedFile;
    });
};
