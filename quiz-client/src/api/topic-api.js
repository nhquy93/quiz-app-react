import axios from "axios";
import { toast } from "../utils/sweet-alert";

//const BASE_URL = "https://localhost:7117/api/topic";
const BASE_URL = "http://quizappdemo.somee.com/api/topic";

export class TopicAPI {
  static async fetchAll() {
    try {
      const result = (await axios.get(`${BASE_URL}/getall`)).data;
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
      const result = (await axios.get(`${BASE_URL}/getallincludequestiongroup`)).data;
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
