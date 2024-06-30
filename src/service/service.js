// import { create } from '@mui/material/styles/createTransitions'
// import http from './config'
// const service = {
//     create: (data)=> http.post("/service",data),
//     get: ()=> http.get("/service/all", {params: {pages: 1, limit: 10}})
// }
// export default service

import http from './config'

const service = {
    create: (data) => http.post("/service", data),
    get: ()=> http.get("/service/all", { params: { page: 1, limit: 10 } })
}

export default service
