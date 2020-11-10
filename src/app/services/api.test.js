import Api from "./api";
import { spotsData } from "../../_data/data";

jest.mock("./api");

const dummyResponse = { message: "ok", data: spotsData };

afterEach(() => {
  jest.resetAllMocks();
});

describe("init api tests", () => {
  describe("getSpot", () => {
    it("should fetch a single spot", async () => {
      Api.getSpot.mockResolvedValueOnce(dummyResponse);
      const id = 1;
      const response = await Api.getSpot(id);

      expect(response.message).toEqual("ok");
    });
  });

  describe("getSpots", () => {
    it("should fetch a list of spots", async () => {
      Api.getSpots.mockResolvedValueOnce(dummyResponse);

      const response = await Api.getSpots();

      expect(response.message).toEqual("ok");
      expect(response.data).toBe(spotsData);
    });
  });
});
