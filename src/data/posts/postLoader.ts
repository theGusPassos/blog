import { posts } from "./posts";

export const getPosts = () => {
  return posts;
};

export const getPostsByTitle = (title: string | undefined) => {
  if (title === undefined || title === "") {
    return getPosts();
  }

  return posts.filter(
    (a) => a.title.toLowerCase().indexOf(title.toLowerCase()) > -1
  );
};
