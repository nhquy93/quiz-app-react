import axios from "axios";
import { toast } from "../utils/sweet-alert";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";
export class TopicAPI {
  static async fetchTopics() {
    try {
      const result = (await axios.get(`${BASE_URL + ROUTE_PATH.topic}/getall`))
        .data;
      if (result.isSuccessed) {
        return result.resultObj;
      } else {
        toast("error", result.message);
      }
    } catch (error) {
      toast("error", error.message);
    }
  }

  static async fetchAllIncludeQuestionGroup() {
    try {
      const result = (
        await axios.get(
          `${BASE_URL + ROUTE_PATH.topic}/getallincludequestiongroup`
        )
      ).data;
      if (result.isSuccessed) {
        return result.resultObj;
      } else {
        toast("error", result.message);
      }
    } catch (error) {
      toast("error", error.message);
    }
  }
}
