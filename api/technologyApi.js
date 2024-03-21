import axiosIns from "./axiosIns";

class TechnologyApi {
  static add(body) {
    return axiosIns.post("/technology", body);
  }
  static getAll() {
    return axiosIns.get("/technology");
  }
  static del(id) {
    return axiosIns.delete(`/technology/${id}`);
  }
  static edit(id, body) {
    return axiosIns.put(`/technology/${id}`, body);
  }
}

export default TechnologyApi;
