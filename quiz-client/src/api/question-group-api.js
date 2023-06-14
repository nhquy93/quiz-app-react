import axios from "axios";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";
import { toast } from "../utils/sweet-alert";

export class QuestionGroupAPI {
  static async fetchQuestionGroupById(topicId) {
    try {
      const result = (
        await axios.get(
          `${BASE_URL + ROUTE_PATH.questionGroup}/getbyid/${topicId}`
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

  static async fetchQuestionsById(topicId) {
    try {
      const result = (
        await axios.get(
          `${
            BASE_URL + ROUTE_PATH.questionGroup
          }/getincludequestionbyid/${topicId}`
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
