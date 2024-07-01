// import http from './config'

// const service = {
//     create: (data) => http.post("/service", data),
//     get: ()=> http.get("/service/all", { params: { page: 1, limit: 10 } })
// }

// export default service


import http from "./config";

const service = {
  get: () => http.get("/service/all", { params: { page: 1, limit: 10 } }),
  add: (data) => http.post("/service", data),
  edit: (data, id) => http.put(`/service/${id}`, data),
  delete: (id) => http.delete("/service", {params: {id}}),
};

export default service;
