import { getPostTitleFromUrl } from "./postService";

describe("postService", () => {
  describe("getPostTitleFromUrl", () => {
    it("should return without dashes", () => {
      const url = "url-test";
      const expected = "url test";

      const result = getPostTitleFromUrl(url);

      expect(result).toBe(expected);
    });

    it("should return same when doesn't has dashes", () => {
      const url = "url";

      const result = getPostTitleFromUrl(url);

      expect(result).toBe(url);
    });
  });
});
