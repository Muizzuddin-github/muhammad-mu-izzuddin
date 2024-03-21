import axios from "axios";

const axiosIns = axios.create({
  baseURL: "https://portfolio-backend-azure-gamma.vercel.app/api",
  withCredentials: true,
});

export default axiosIns;
