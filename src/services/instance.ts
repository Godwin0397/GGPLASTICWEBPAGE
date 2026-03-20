import axios from "axios";

const baseurl = import.meta.env.VITE_localhost_backend_sever_3001_baseurl


// create an axios instance

const instance = axios.create({
  baseURL: baseurl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance };