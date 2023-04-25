import axios from "@/api/axios";

const getAllData = () => {
  return axios.post('Home')
}

const createData = (data) => {
  return axios.post("Home/v1/LoginOrToken", data)
}

export const api = {
  getAllData,
  createData,
}
