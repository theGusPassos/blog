import { formatMdFile } from "./mdFormatter";

describe("mdFormatter", () => {
  describe("formatMdFile", () => {
    const file = `
        # test md file

        ![image alt](imgs/post.jpg)

        md file text
      `;

    it("should change image source to use the url", () => {
      const url = "website.com/blog";
      const result = formatMdFile(file, url);

      expect(result).toContain(`![image alt](${url}/imgs/post.jpg)`);
    });
  });
});
