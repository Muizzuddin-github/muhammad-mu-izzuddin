import axios from "axios";

const walIns = axios.create({
  baseURL: "https://walpaper-api.vercel.app/api/walpaper",
  withCredentials: false,
});

class Walpaper {
  static getAll(src, page) {
    return walIns.get(`/${src}?page=${page}`);
  }
}

export default Walpaper;
