import axios from "axios";
import { BASE_URL } from "../utils/apiURL";

const API = axios.create({ baseURL: BASE_URL });

export const getAllHistoryOrder = () => {
  return API.get("/historyorder");
};
