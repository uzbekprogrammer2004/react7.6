import http from './config'
const auth = {
    sign_in: (data)=> http.post("/login",data),
    sign_up: (data)=> http.post("/register", data),
    auth_verify: (data)=> http.post("/verify", data),
    forgot_password: (data)=> http.post("/forgot", data),
    update_password: (data)=> http.post("/update-password", data)
}
export default auth