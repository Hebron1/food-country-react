import axios from "axios";

const base = "https://www.themealdb.com/api/json/v1/1"

export const axiosInstance = axios.create({
    baseURL: base
})