import axios from "axios";
import { toast } from "../utils/sweet-alert";
import { BASE_URL, ROUTE_PATH } from "../constants/route-path.constant";

export class ParticipantResultAPI {
  static async create(payload) {
    try {
      const result = (
        await axios.post(
          `${BASE_URL + ROUTE_PATH.participantResult}/create`,
          payload
        )
      ).data;
      if (result.isSuccessed) return result.resultObj;
      else toast("error", result.message);
    } catch (error) {
      toast("error", error.message);
    }
  }
}
