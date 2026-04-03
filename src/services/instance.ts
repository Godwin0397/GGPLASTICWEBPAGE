import axios from "axios";

const baseurl = import.meta.env.VITE_prod_baseurl


// create an axios instance

const instance = axios.create({
  baseURL: baseurl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance };