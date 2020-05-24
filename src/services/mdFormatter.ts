export const formatMdFile = (file: string, url: string) => {
  return file.replace(/(imgs\/.*\))/g, `${url}/$1`);
};
