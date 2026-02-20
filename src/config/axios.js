import axios from "axios"

const clienteAxios = axios.create({
 baseURL: "https://walrus-app-qj647.ondigitalocean.app/"
 //baseURL: "http://localhost:4000"
})

export default clienteAxios