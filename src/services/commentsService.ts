import { Comment } from "@/models/comment";

export const getComments = async (issue: number) => {
  return fetch(
    `https://api.github.com/repos/theguspassos/blog/issues/${issue}/comments`
  )
    .then((response) => response.json())
    .then((json: Comment[]) => json);
};
