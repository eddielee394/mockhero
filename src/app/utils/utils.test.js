import {
  formatDate,
  generateRoutesFromConfigs,
  generateSpotDisplayRate,
  generateStarRatingLabel,
  parseImageUrlTemplate,
} from "./utils";

describe("utility functions", () => {
  describe("generateStarRatingLabel()", () => {
    it("returns the correct label", () => {
      expect(generateStarRatingLabel(5)).toBe("Excellent");
      expect(generateStarRatingLabel(3.25)).toBe("Great");
      expect(generateStarRatingLabel(2)).toBe("Ok");
      expect(generateStarRatingLabel(0.5)).toBe("Not Recommended");
    });
  });

  describe("generateSpotDisplayRate()", () => {
    it("returns N/A if rate is 0", () => {
      expect(generateSpotDisplayRate(0)).toBe("N/A");
    });

    it("returns N/A if rate is not a number", () => {
      expect(generateSpotDisplayRate(NaN)).toBe("N/A");
    });

    it("it generates the spot display rate", () => {
      expect(generateSpotDisplayRate(700)).toBe(7);
    });
  });

  describe("formatDate", () => {
    it("returns the string 'Today' if the date is todays date otherwise return a formatted date string", () => {
      const date = new Date();

      expect(formatDate(date.toString(), "p", true)).toBe("Today");
      expect(formatDate("2020-10-30T12:00", "P")).toBe("10/30/2020");
    });
  });

  describe("parseImageUrlTemplate", () => {
    it("returns the parsed url as a string ", () => {
      const url = "https://test.com/$w_{{WIDTH}},$h_{{HEIGHT}},$q_{{QUALITY}}";
      const expectedUrl = "https://test.com/$w_1,$h_2,$q_3";

      expect(parseImageUrlTemplate(url, 1, 2, 3)).toBe(expectedUrl);
    });
  });

  describe("generateRoutesFromConfigs", () => {
    it("should merge all the route configs and extract the paths", () => {
      const testConfig1 = {
        settings: {
          layout: {},
        },
        routes: [{ path: "/testPath1" }],
      };
      const testConfig2 = {
        routes: [{ path: "/testPath2" }, { path: "/testPath3" }],
      };

      const expectedRoutes = [
        { path: "/testPath1" },
        { path: "/testPath2" },
        { path: "/testPath3" },
      ];

      expect(
        generateRoutesFromConfigs([testConfig1, testConfig2])
      ).toMatchObject(expectedRoutes);
    });
  });
});
