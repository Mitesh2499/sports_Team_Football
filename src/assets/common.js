import axios from "axios";
import { format } from "date-fns";

const API = "https://api.npoint.io/20c1afef1661881ddc9c";

const instance = axios.create({
  baseURL: API,
});

const FormatDate = (date) => {
  date = date + " UTC";
  const d = new Date(date);
  const localTime = date.toLocaleString(d);

  return format(new Date(localTime), "yyyy-MM-dd hh:mm:ss a");
};

export { instance, FormatDate };
