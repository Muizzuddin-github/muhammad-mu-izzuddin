import axios from "axios";

const axiosIns = axios.create({
  baseURL: "https://api-myportfolio.vercel.app/api",
  withCredentials: true,
});

export default axiosIns;
