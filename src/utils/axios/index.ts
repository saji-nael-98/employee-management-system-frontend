import axios, { AxiosResponse, AxiosError } from 'axios'
export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const responseHandler = (response: AxiosResponse<any, any>) => {
    const data = response.data
    if (response.status === 200) {
        return data;
    }
    return Promise.reject(new Error(response.statusText || 'Error'));
}
const errorHandler = (error: AxiosError) => { return Promise.reject(error); }
axiosClient.interceptors.response.use(responseHandler, errorHandler)