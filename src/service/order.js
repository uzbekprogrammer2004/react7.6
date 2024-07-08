import http from "./config";

const order = {
    create: (data)=> http.post("/order",data),
    get: ()=> http.get("/order/all", {params: {page: 1, limit:40}}),
    delete: (id) => http.delete("/order", { params: { id } }),
    edit: (data, id) => http.put(`/order/${id}`, data),
}
export default order;