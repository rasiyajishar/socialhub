import axios from "axios";





const token = localStorage.getItem("jwt_token");
console.log(token)

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});


