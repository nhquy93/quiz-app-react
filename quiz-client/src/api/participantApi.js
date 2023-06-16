import axios from "axios";
import { toast } from "../utils/sweet-alert";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";

export class ParticipantAPI {
  static async create(participant) {
    try {
      const result = (
        await axios.post(
          `${BASE_URL + ROUTE_PATH.participant}/create`,
          participant
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
