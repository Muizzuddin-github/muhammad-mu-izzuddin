import axios from "axios";

const quotesIns = axios.create({
  baseURL: "https://quoteskuy-65d4.vercel.app/api/quotes",
  withCredentials: false,
});

class Quoteskuy {
  static today() {
    const options = {
      headers: {
        "X-API-ID": "65eca1d15a03ffbf13a6c90f",
        "X-API-KEY": "a84140cad9ce84d9df4465b6bbce8ce",
      },
    };
    return quotesIns.get("/today", options);
  }
}

export default Quoteskuy;
