import axios from "axios";
import { toast } from "../utils/sweet-alert";

const BASE_URL = "https://localhost:7117/api/participant";

export class ParticipantAPI {
  static async create(participant) {
    try {
        const result = (await axios.post(`${BASE_URL}/create`, participant)).data;
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
