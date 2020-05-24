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

  describe("formatMdFile multiple images", () => {
    const file = `
        # test md file

        ![image alt](imgs/post.jpg)
        
        ![image alt](imgs/post-1.jpg)

        md file text
      `;

    let result: string;
    const url = "website.com/blog";

    beforeEach(() => {
      result = formatMdFile(file, url);
    });

    it("should change first image source to use the url", () => {
      expect(result).toContain(`![image alt](${url}/imgs/post.jpg)`);
    });

    it("should change second image source to use the url", () => {
      expect(result).toContain(`![image alt](${url}/imgs/post-1.jpg)`);
    });
  });
});
