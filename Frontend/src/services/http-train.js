import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export default axios.create({
  baseURL: "http://localhost:8094/trainSearch",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  // withCredentials: false,
  // mode: "same-origin",
  mode: "cors",
});
