const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

// API - запросы
const getPaintings = () => axiosClient.get('/paintings?populate=*');

const getComments  = () => axiosClient.get('/comments?populate=*');

const getSinglePainting = (id) => axiosClient.get('/paintings?filters[slug][$eqi]=' + id + '&populate=*');

const createOrder = (data: any) => axiosClient.post('/comments', data);

export default {
    getPaintings,
    
    getComments,

    getSinglePainting,

    createOrder
}