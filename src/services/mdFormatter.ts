export const formatMdFile = (file: string, url: string) => {
  return file.replace(/(imgs\/post.jpg\))/, `${url}/$1`);
};
