import { CONFIG } from "./utils.js";

const appAxios = axios.create({
    baseURL: CONFIG.API_URL,
    headers:{
        'Content-Type' : 'application/json'
    }
})

export default appAxios