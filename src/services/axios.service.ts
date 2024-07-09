import axios from "axios";
import { baseUrl } from "../constants/urls";

export let axiosInstance = axios.create({
   baseURL: baseUrl,
   headers: {}
});