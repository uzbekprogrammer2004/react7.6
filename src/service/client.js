
import http from "./config";

const service = {
  get: () => http.get("/client/all", { params: { page: 1, limit: 10 } }),
  add: (data) => http.post("/client", data),
  // update: (data) => http.put("/service/", data),
  delete: (id) => http.delete("/client", { params: {owner_id, id } }),
};

export default service;
