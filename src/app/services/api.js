import axios from "axios";
import { data, searchData, spotData, spotsData } from "../../_data/data";

class Api {
  constructor() {
    this.api = axios.create();
  }

  /**
   * Format the success response
   * @param response
   * @returns {{data: *, success: boolean, message: string|object}}
   */
  formatSuccessResponse(response) {
    const formattedResponse = {
      success: response.success,
      data: response.data,
      message: response.message,
    };

    return formattedResponse;
  }

  /**
   *
   * @param params {object}
   * @returns {Promise<any|{data: *, success: boolean, message: (string|Object)}>}
   */
  async getSearchData(params) {
    const response = { success: true, data: searchData };

    try {
      const data = this.formatSuccessResponse(response);
      return data;
    } catch (error) {
      return error.response;
    }
  }

  /**
   *
   * @param params {Object}
   * @returns {Promise<any|{data: *, success: boolean, message: string|object}>}
   */
  async getSpots(params) {
    // const response = await this.api.get("");
    const response = { success: true, data: spotsData };

    try {
      const data = this.formatSuccessResponse(response);
      return data;
    } catch (error) {
      return error.response;
    }
  }

  /**
   *
   * @param spot_id {number|string}
   * @returns {Promise<any|{data: *, success: boolean, message: string|object}>}
   */
  async getSpot(spot_id) {
    // const response = await this.api.get("api/spot");
    const response = { success: true, data: spotData };

    try {
      const data = this.formatSuccessResponse(response);

      return data;
    } catch (error) {
      return error.response;
    }
  }

  async getCheckoutData(routeParams) {
    const response = { success: true, data: data.checkout };
    try {
      const data = this.formatSuccessResponse(response);

      return data;
    } catch (e) {
      return error.response;
    }
  }
}

const instance = new Api();

export default instance;
