import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://online-food-ordering-system-server.vercel.app/'
})

export default axiosInstance;