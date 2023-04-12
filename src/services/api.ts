import axios from "axios";

//Arquivo de conexão com o backend 

//Variavel global
const baseURL = process.env.NEXT_PUBLIC_BASEURL

const api = axios.create({
    baseURL: baseURL,
    insecureHTTPParser: true,
});

export default api